import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Mesajınız alındı. En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <h1 className="text-5xl sm:text-6xl text-white mb-6">İletişim</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Operate Smarter. Fly Better.
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-4">
              Uçak yönetimi hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl text-white mb-8">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-sky-400" size={24} />
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">E-posta</div>
                    <a href="mailto:info@linjet.com" className="text-xl text-white hover:text-sky-400 transition-colors">
                      info@linjet.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-sky-400" size={24} />
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">Telefon</div>
                    <a href="tel:+903121234567" className="text-xl text-white hover:text-sky-400 transition-colors">
                      +90 (312) 123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-sky-400" size={24} />
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">Adres</div>
                    <p className="text-xl text-white">Ankara, Türkiye</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-sky-400" size={24} />
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">Çalışma Saatleri</div>
                    <p className="text-xl text-white">7/24 Operasyon Desteği</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <h3 className="text-white mb-3">24/7 Teknik Destek</h3>
                <p className="text-slate-300 leading-relaxed">
                  Acil durumlarda ve operasyonel konularda 7/24 ulaşabileceğiniz teknik ekibimiz hizmetinizdedir. 
                  Dünya çapında her noktadan size destek sağlamaya hazırız.
                </p>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-xl">
                <h3 className="text-white mb-3">Premium Hizmet Taahhüdü</h3>
                <p className="text-slate-300 leading-relaxed">
                  Tüm sorularınız için profesyonel danışmanlık ve uçak yönetimi ihtiyaçlarınız için 
                  kişiselleştirilmiş çözümler sunuyoruz.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl text-white mb-8">Mesaj Gönderin</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">
                    Ad Soyad *
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
                    E-posta *
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
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                    placeholder="+90 (5XX) XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                    placeholder="Hizmetlerimiz hakkında bilgi almak istiyorum..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-all flex items-center justify-center gap-2 group"
                >
                  Mesaj Gönder
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
