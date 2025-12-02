import React from 'react';
import { Plane, Settings, ClipboardCheck, DollarSign, Users, Globe } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Uçuş Operasyonları',
    description: 'Uluslararası uçuş planlaması, slot koordinasyonu, rota optimizasyonu ve 7/24 operasyon desteği.',
  },
  {
    icon: Settings,
    title: 'CAMO & Bakım Yönetimi',
    description: 'Sürekli uçuşa elverişlilik yönetimi, bakım planlaması, AD/SB takibi ve teknik dokümantasyon.',
  },
  {
    icon: ClipboardCheck,
    title: 'Sertifikasyon & Regülasyon',
    description: 'AOC, COA, sertifikasyon süreçleri ve uluslararası otoritelerle tam uyum koordinasyonu.',
  },
  {
    icon: DollarSign,
    title: 'Maliyet Optimizasyonu',
    description: 'Şeffaf finansal raporlama, bütçe yönetimi, tedarikçi yönetimi ve maliyet kontrol sistemi.',
  },
  {
    icon: Users,
    title: 'Ekip Yönetimi',
    description: 'Pilot ve kabin ekibi planlaması, eğitim koordinasyonu, lisans takibi ve performans yönetimi.',
  },
  {
    icon: Globe,
    title: 'Global Destek Ağı',
    description: 'Dünya çapında MRO, OEM ve tedarikçi ağı ile 7/24 teknik ve lojistik destek.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Uçak sahiplerine A'dan Z'ye profesyonel destek. Uçtan uca tam kapsamlı yönetim çözümleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800 hover:border-sky-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-sky-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
                  <Icon className="text-sky-400" size={28} />
                </div>
                <h3 className="text-xl text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
