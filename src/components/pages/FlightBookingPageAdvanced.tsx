import React, { useState, useMemo } from 'react';
import { Plane, MapPin, Users, Send, Plus, X, Search } from 'lucide-react';
import { airportDatabase, Airport } from '../../data/airports';
import { Translations } from '../../translations';

interface FlightBookingPageProps {
  t: Translations;
}

const getAircraftTypes = (t: Translations) => [
  'Gulfstream G450',
  'Gulfstream G550',
  'Gulfstream G650',
  'Bombardier Global 5000',
  'Bombardier Global 6000',
  'Bombardier Challenger 350',
  'Bombardier Challenger 650',
  'Dassault Falcon 2000',
  'Dassault Falcon 7X',
  'Dassault Falcon 8X',
  'Embraer Legacy 450',
  'Embraer Legacy 500',
  'Embraer Phenom 300',
  'Embraer Praetor 600',
  t.booking.noPreference,
];

interface RouteSegment {
  id: number;
  from: Airport | null;
  to: Airport | null;
  fromSearch: string;
  toSearch: string;
  showFromResults: boolean;
  showToResults: boolean;
}

export function FlightBookingPage({ t }: FlightBookingPageProps) {
  const aircraftTypes = getAircraftTypes(t);
  const [routes, setRoutes] = useState<RouteSegment[]>([
    { id: 1, from: null, to: null, fromSearch: '', toSearch: '', showFromResults: false, showToResults: false }
  ]);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    passengers: '',
    aircraftType: '',
    extraRequests: '',
    name: '',
    email: '',
    phone: '',
  });

  const searchAirports = (query: string): Airport[] => {
    if (query.length < 2) return [];
    
    const upperQuery = query.toUpperCase();
    return airportDatabase.filter(airport =>
      airport.icao.includes(upperQuery) ||
      airport.iata.includes(upperQuery) ||
      airport.city.toUpperCase().includes(upperQuery) ||
      airport.name.toUpperCase().includes(upperQuery) ||
      airport.country.toUpperCase().includes(upperQuery)
    ).slice(0, 10);
  };

  const handleFromSearchChange = (id: number, value: string) => {
    setRoutes(routes.map(route => 
      route.id === id 
        ? { ...route, fromSearch: value, showFromResults: true }
        : route
    ));
  };

  const handleToSearchChange = (id: number, value: string) => {
    setRoutes(routes.map(route => 
      route.id === id 
        ? { ...route, toSearch: value, showToResults: true }
        : route
    ));
  };

  const selectFromAirport = (id: number, airport: Airport) => {
    setRoutes(routes.map(route => 
      route.id === id 
        ? { ...route, from: airport, fromSearch: `${airport.iata} - ${airport.name}`, showFromResults: false }
        : route
    ));
  };

  const selectToAirport = (id: number, airport: Airport) => {
    setRoutes(routes.map(route => 
      route.id === id 
        ? { ...route, to: airport, toSearch: `${airport.iata} - ${airport.name}`, showToResults: false }
        : route
    ));
  };

  const addRoute = () => {
    const newId = Math.max(...routes.map(r => r.id)) + 1;
    setRoutes([...routes, { id: newId, from: null, to: null, fromSearch: '', toSearch: '', showFromResults: false, showToResults: false }]);
  };

  const removeRoute = (id: number) => {
    if (routes.length > 1) {
      setRoutes(routes.filter(route => route.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create route string
    const routeString = routes.map(r => `${r.from?.iata || '?'} → ${r.to?.iata || '?'}`).join(' → ');
    
    // Create email content
    const emailBody = `
Yeni Uçuş Talebi
==================

UÇUŞ BİLGİLERİ:
Rota: ${routeString}
Tarih: ${formData.date}
Saat: ${formData.time}
Yolcu Sayısı: ${formData.passengers}
Tercih Edilen Uçak Tipi: ${formData.aircraftType}

ROTA DETAYLARI:
${routes.map((r, i) => `
${i + 1}. Segment:
   Kalkış: ${r.from ? `${r.from.name} (${r.from.icao}/${r.from.iata}) - ${r.from.location}` : 'Belirtilmedi'}
   Varış: ${r.to ? `${r.to.name} (${r.to.icao}/${r.to.iata}) - ${r.to.location}` : 'Belirtilmedi'}
`).join('')}

İLETİŞİM BİLGİLERİ:
Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone}

EKSTRA TALEPLER:
${formData.extraRequests || 'Yok'}
    `;

    // Create mailto link
    const mailtoLink = `mailto:sales@linjet.aero?subject=Uçuş Talebi - ${routeString}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    alert('Uçuş talep formunuz hazırlandı. E-posta istemciniz açılacak.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-sky-500/10 rounded-full flex items-center justify-center">
                <Plane className="text-sky-400" size={40} />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl text-white mb-6">{t.booking.title}</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t.booking.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            {/* Flight Route Card */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-white flex items-center gap-3">
                  <MapPin className="text-sky-400" size={28} />
                  {t.booking.routeTitle}
                </h2>
                <button
                  type="button"
                  onClick={addRoute}
                  className="px-4 py-2 bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Plus size={20} />
                  {t.booking.addRoute}
                </button>
              </div>

              <div className="space-y-6">
                {routes.map((route, index) => (
                  <div key={route.id} className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-slate-400">{t.booking.segment} {index + 1}</span>
                      {routes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRoute(route.id)}
                          className="ml-auto text-red-400 hover:text-red-300 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* From Airport */}
                      <div className="relative">
                        <label className="block text-slate-300 mb-2">
                          {t.booking.departureLabel} *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={route.fromSearch}
                            onChange={(e) => handleFromSearchChange(route.id, e.target.value)}
                            onFocus={() => setRoutes(routes.map(r => r.id === route.id ? {...r, showFromResults: true} : r))}
                            required
                            className="w-full px-4 py-3 pl-10 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                            placeholder="Şehir, havalimanı veya kod ara..."
                          />
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                        </div>
                        
                        {route.showFromResults && route.fromSearch.length >= 2 && (
                          <div className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl max-h-64 overflow-y-auto">
                            {searchAirports(route.fromSearch).map((airport, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => selectFromAirport(route.id, airport)}
                                className="w-full px-4 py-3 text-left hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0"
                              >
                                <div className="text-white">{airport.name}</div>
                                <div className="text-sm text-slate-400 mt-1">
                                  {airport.icao} / {airport.iata} - {airport.location}
                                </div>
                              </button>
                            ))}
                          </div>
                        )}

                        {route.from && (
                          <div className="mt-2 p-3 bg-sky-500/10 border border-sky-500/20 rounded-lg">
                            <p className="text-sky-400 text-sm">{route.from.name}</p>
                            <p className="text-slate-400 text-xs">{route.from.icao} / {route.from.iata} - {route.from.location}</p>
                          </div>
                        )}
                      </div>

                      {/* To Airport */}
                      <div className="relative">
                        <label className="block text-slate-300 mb-2">
                          {t.booking.arrivalLabel} *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={route.toSearch}
                            onChange={(e) => handleToSearchChange(route.id, e.target.value)}
                            onFocus={() => setRoutes(routes.map(r => r.id === route.id ? {...r, showToResults: true} : r))}
                            required
                            className="w-full px-4 py-3 pl-10 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                            placeholder="Şehir, havalimanı veya kod ara..."
                          />
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                        </div>
                        
                        {route.showToResults && route.toSearch.length >= 2 && (
                          <div className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl max-h-64 overflow-y-auto">
                            {searchAirports(route.toSearch).map((airport, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => selectToAirport(route.id, airport)}
                                className="w-full px-4 py-3 text-left hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0"
                              >
                                <div className="text-white">{airport.name}</div>
                                <div className="text-sm text-slate-400 mt-1">
                                  {airport.icao} / {airport.iata} - {airport.location}
                                </div>
                              </button>
                            ))}
                          </div>
                        )}

                        {route.to && (
                          <div className="mt-2 p-3 bg-sky-500/10 border border-sky-500/20 rounded-lg">
                            <p className="text-sky-400 text-sm">{route.to.name}</p>
                            <p className="text-slate-400 text-xs">{route.to.icao} / {route.to.iata} - {route.to.location}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="date" className="block text-slate-300 mb-2">
                    {t.booking.dateLabel} *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-slate-300 mb-2">
                    {t.booking.timeLabel} *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label htmlFor="passengers" className="block text-slate-300 mb-2">
                    {t.booking.passengersLabel} *
                  </label>
                  <input
                    type="number"
                    id="passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                    placeholder="Örn: 6"
                  />
                </div>

                <div>
                  <label htmlFor="aircraftType" className="block text-slate-300 mb-2">
                    {t.booking.aircraftLabel} *
                  </label>
                  <select
                    id="aircraftType"
                    name="aircraftType"
                    value={formData.aircraftType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                  >
                    <option value="">{t.booking.selectAircraft}</option>
                    {aircraftTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="extraRequests" className="block text-slate-300 mb-2">
                  {t.booking.extraRequestsLabel}
                </label>
                <textarea
                  id="extraRequests"
                  name="extraRequests"
                  value={formData.extraRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                  placeholder={t.booking.extraRequestsPlaceholder}
                ></textarea>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl text-white mb-6 flex items-center gap-3">
                <Users className="text-sky-400" size={28} />
                {t.booking.contactTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">
                    {t.booking.nameLabel} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">
                    {t.booking.emailLabel} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-slate-300 mb-2">
                    {t.booking.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                    placeholder="+90 (5XX) XXX XX XX"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-all flex items-center justify-center gap-3 group mx-auto text-lg"
              >
                {t.booking.submitButton}
                <Send size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-slate-400 mt-4">
                {t.booking.submitNote}
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}