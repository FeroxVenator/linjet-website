import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const platforms = [
  {
    manufacturer: 'Gulfstream',
    models: 'G450, G550, G650',
    description: 'Ultra long-range işletme uzmanlığı',
  },
  {
    manufacturer: 'Bombardier',
    models: 'Global, Challenger',
    description: 'Teknik yönetim ve CAMO desteği',
  },
  {
    manufacturer: 'Dassault',
    models: 'Falcon Series',
    description: 'Avrupa operasyonları uzmanlığı',
  },
  {
    manufacturer: 'Embraer',
    models: 'Legacy, Phenom, Praetor',
    description: 'Orta segment işletme çözümleri',
  },
];

export function AircraftPlatforms() {
  return (
    <section id="platforms" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1696812198996-c57a38342ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJjcmFmdCUyMG1haW50ZW5hbmNlJTIwaGFuZ2FyfGVufDF8fHx8MTc2NDE3NDExNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Aircraft Hangar"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">Hava Aracı Tipleri</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Gulfstream, Bombardier, Dassault, Embraer ve diğer iş jeti platformlarında derin teknik uzmanlık
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl text-white mb-2">{platform.manufacturer}</h3>
              <p className="text-sky-400 mb-3">{platform.models}</p>
              <p className="text-slate-400 text-sm">{platform.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 max-w-4xl">
            <p className="text-lg text-slate-300 leading-relaxed">
              LinJet; global tedarikçiler, MRO'lar, OEM'ler ve uluslararası operasyon ağlarıyla çalışan, 
              teknik olarak güçlü, premium hizmet sunan butik bir operatördür. Her uçak için kişiye özel 
              işletme modeli oluşturur; maliyetleri optimize eder, uçuşa elverişliliği en üst düzeyde tutar 
              ve uçak sahibinin operasyonel yükünü tamamen ortadan kaldırır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
