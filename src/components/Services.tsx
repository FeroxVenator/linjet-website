import React from 'react';
import { Plane, Radio, Shield, Wrench, Users, Globe2 } from 'lucide-react';
import { Translations } from '../translations';

interface ServicesProps {
  t: Translations;
}

export function Services({ t }: ServicesProps) {
  const services = [
    {
      icon: Plane,
      title: t.services.service1Title || 'AOC Altında Uçuş Operasyonları',
      description: t.services.service1Desc || 'EASA AOC yetkisi ile business jet ve hava taksi operasyonları. Tam uyumlu uçuş prosedürleri ve operasyonel yönetim.',
    },
    {
      icon: Radio,
      title: t.services.service2Title || 'Business Jet Dispatch Yönetimi',
      description: t.services.service2Desc || '24/7 flight dispatch, uçuş planlaması, slot yönetimi, handling koordinasyonu ve gerçek zamanlı operasyon takibi.',
    },
    {
      icon: Shield,
      title: t.services.service3Title || 'Uçak Yönetimi (Aircraft Management)',
      description: t.services.service3Desc || 'Uçak sahiplerine özel finansal raporlama, bakım planlaması, mürettebat yönetimi ve maliyet optimizasyonu.',
    },
    {
      icon: Wrench,
      title: t.services.service4Title || 'CAMO & Airworthiness',
      description: t.services.service4Desc || 'Part-M CAMO onayı ile sürekli uçuşa elverişlilik yönetimi, teknik kayıt takibi ve otorite koordinasyonu.',
    },
    {
      icon: Users,
      title: t.services.service5Title || 'Uçak Sahibi Danışmanlığı',
      description: t.services.service5Desc || 'Uçak alım-satım, kayıt işlemleri, charter gelir optimizasyonu ve vergi planlaması konularında profesyonel danışmanlık.',
    },
    {
      icon: Globe2,
      title: t.services.service6Title || 'Uluslararası Kayıt & Regülasyon',
      description: t.services.service6Desc || 'EASA, FAA, TCCA gibi otoritelerde uçak kaydı, ruhsat işlemleri ve uluslararası operasyon izinleri.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm mb-4">
            {t.services.sectionBadge || 'Hizmetlerimiz'}
          </div>
          <h2 className="text-4xl sm:text-5xl text-[#001B33] mb-4">
            {t.services.sectionTitle || 'Uçtan Uca Business Jet Yönetimi'}
          </h2>
          <p className="text-xl text-slate-600">
            {t.services.sectionSubtitle || 'AOC operasyonundan CAMO hizmetlerine kadar tüm ihtiyaçlarınız için tek çözüm ortağınız'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-sky-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl text-[#001B33] mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sky-400 to-sky-600 group-hover:w-full transition-all duration-300 rounded-b-xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
