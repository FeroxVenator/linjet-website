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
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm mb-4">
            {t.services.sectionBadge || 'Hizmetlerimiz'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#001B33] mb-3 sm:mb-4 px-4">
            {t.services.sectionTitle || 'Uçtan Uca Business Jet Yönetimi'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4">
            {t.services.sectionSubtitle || 'AOC operasyonundan CAMO hizmetlerine kadar tm ihtiyaçlarınız için tek çözüm ortağınız'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-xl active:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-sky-300 active:border-sky-400 cursor-pointer touch-manipulation"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-active:scale-105 transition-transform duration-300 shadow-md group-hover:shadow-sky-300/50 group-active:shadow-sky-400/50">
                  <Icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl text-[#001B33] mb-2 sm:mb-3 group-hover:text-sky-600 group-active:text-sky-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sky-400 to-sky-600 group-hover:w-full group-active:w-full transition-all duration-300 rounded-b-xl" />
                
                {/* Background Glow on Hover/Active */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}