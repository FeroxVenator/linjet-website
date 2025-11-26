import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check } from 'lucide-react';

const features = [
  'Mühendislik odaklı yönetim yaklaşımı',
  'Uluslararası standartlara tam uyum',
  'Şeffaf ve detaylı raporlama sistemi',
  'Kişiye özel işletme modeli',
  'Maliyet optimizasyonu garantisi',
  'Maksimum uçuşa elverişlilik seviyesi',
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661354421565-74ffd9650918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGpldCUyMGludGVyaW9yfGVufDF8fHx8MTc2NDEyNzIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Jet Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl text-white mb-6">
              Engineering-Driven.<br />Owner-Focused.
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              LinJet, Türkiye merkezli premium bir iş jeti yönetimi ve özel uçak operasyonları şirketidir. 
              Uçak sahiplerine; uçuş operasyonlarından sürekli uçuşa elverişlilik (CAMO), bakım planlaması, 
              maliyet kontrolü, lojistik, uçuş ekibi yönetimi ve finansal raporlamaya kadar uçtan uca 
              profesyonel bir yönetim hizmeti sunar.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Misyonumuz, sahip olduğumuz mühendislik tecrübesi, uluslararası regülasyon bilgisi ve 
              operasyonel disiplin sayesinde, uçak sahiplerine en güvenilir, en şeffaf ve en verimli 
              işletme deneyimini sağlamaktır.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-sky-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-sky-400" size={16} />
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="inline-block px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg">
              <p className="text-sky-400 italic">
                "Premium Jet Management for Demanding Owners"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
