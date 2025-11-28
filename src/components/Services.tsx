import React from 'react';
import { Settings, Wrench, Shield, PlaneTakeoff } from 'lucide-react';
import { Translations } from '../translations';

interface ServicesProps {
  t: Translations;
}

export function Services({ t }: ServicesProps) {
  const services = [
    {
      icon: Settings,
      title: t.services.service1Title,
      description: t.services.service1Desc,
    },
    {
      icon: Wrench,
      title: t.services.service2Title,
      description: t.services.service2Desc,
    },
    {
      icon: Shield,
      title: t.services.service3Title,
      description: t.services.service3Desc,
    },
    {
      icon: PlaneTakeoff,
      title: t.services.service4Title,
      description: t.services.service4Desc,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">{t.services.title}</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
