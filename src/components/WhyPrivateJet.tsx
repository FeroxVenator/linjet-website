import React from 'react';
import { Clock, Shield, Sparkles, Globe2, Users, Plane } from 'lucide-react';
import { Translations } from '../translations';

interface WhyPrivateJetProps {
  t: Translations;
}

export function WhyPrivateJet({ t }: WhyPrivateJetProps) {
    const benefits = [
    {
      icon: Clock,
      title: t.whyPrivateJet.benefit1Title,
      description: t.whyPrivateJet.benefit1Desc,
    },
    {
      icon: Shield,
      title: t.whyPrivateJet.benefit2Title,
      description: t.whyPrivateJet.benefit2Desc,
    },
    {
      icon: Sparkles,
      title: t.whyPrivateJet.benefit3Title,
      description: t.whyPrivateJet.benefit3Desc,
    },
    {
      icon: Globe2,
      title: t.whyPrivateJet.benefit4Title,
      description: t.whyPrivateJet.benefit4Desc,
    },
    {
      icon: Users,
      title: t.whyPrivateJet.benefit5Title,
      description: t.whyPrivateJet.benefit5Desc,
    },
    {
      icon: Plane,
      title: t.whyPrivateJet.benefit6Title,
      description: t.whyPrivateJet.benefit6Desc,
    },
  ];
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">{t.whyPrivateJet.title}</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.whyPrivateJet.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800 hover:border-sky-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-sky-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
                  <Icon className="text-sky-400" size={28} />
                </div>
                <h3 className="text-xl text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 max-w-4xl">
            <p className="text-lg text-slate-300 leading-relaxed">
              {t.whyPrivateJet.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
