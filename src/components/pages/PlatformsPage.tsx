import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Wrench, Shield, Globe, Clock } from 'lucide-react';

const platforms = [
  {
    manufacturer: 'Gulfstream',
    models: 'G450, G550, G650',
    description: 'Ultra long-range işletme uzmanlığı',
    capabilities: ['CAMO Yönetimi', 'Teknik Destek', 'Bakım Planlaması', 'AOG Müdahalesi'],
  },
  {
    manufacturer: 'Bombardier',
    models: 'Global, Challenger',
    description: 'Teknik yönetim ve CAMO desteği',
    capabilities: ['İşletme Yönetimi', 'Sertifikasyon', 'Ekip Koordinasyonu', 'Operasyon Desteği'],
  },
  {
    manufacturer: 'Dassault',
    models: 'Falcon Series',
    description: 'Avrupa operasyonları uzmanlığı',
    capabilities: ['Bakım İzleme', 'Part Support', 'Dokümantasyon', 'Compliance'],
  },
  {
    manufacturer: 'Embraer',
    models: 'Legacy, Phenom, Praetor',
    description: 'Orta segment işletme çözümleri',
    capabilities: ['Maliyet Optimizasyonu', 'Uçuş Planlama', 'Teknik Takip', 'Vendor Yönetimi'],
  },
];

const services = [
  {
    icon: Wrench,
    title: 'Teknik Yönetim',
    description: 'Her platform için OEM standartlarında bakım ve teknik yönetim',
  },
  {
    icon: Shield,
    title: 'CAMO Hizmetleri',
    description: 'Sürekli uçuşa elverişlilik yönetimi ve regülasyon uyumu',
  },
  {
    icon: Globe,
    title: 'Global Destek',
    description: 'Dünya çapında MRO ve OEM network erişimi',
  },
  {
    icon: Clock,
    title: '7/24 Operasyon',
    description: 'Kesintisiz teknik ve operasyonel destek',
  },
];

export function PlatformsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1696812198996-c57a38342ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJjcmFmdCUyMG1haW50ZW5hbmNlJTIwaGFuZ2FyfGVufDF8fHx8MTc2NDE3NDExNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Aircraft Hangar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl text-white mb-6">Uçak Platformları</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Gulfstream, Bombardier, Dassault, Embraer ve diğer iş jeti platformlarında derin teknik uzmanlık
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300"
              >
                <h3 className="text-3xl text-white mb-2">{platform.manufacturer}</h3>
                <p className="text-sky-400 text-xl mb-4">{platform.models}</p>
                <p className="text-slate-300 mb-6">{platform.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {platform.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                      <span className="text-slate-400 text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Platforms */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">Platform Hizmetlerimiz</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Her platform için özelleştirilmiş yönetim ve destek hizmetleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800 hover:border-sky-500/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-sky-400" size={28} />
                  </div>
                  <h4 className="text-xl text-white mb-3">{service.title}</h4>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Statement */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center">
            <h3 className="text-3xl text-white mb-6">Premium & Butik Yaklaşım</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              LinJet; global tedarikçiler, MRO'lar, OEM'ler ve uluslararası operasyon ağlarıyla çalışan, 
              teknik olarak güçlü, premium hizmet sunan butik bir operatördür. Her uçak için kişiye özel 
              işletme modeli oluşturur; maliyetleri optimize eder, uçuşa elverişliliği en üst düzeyde tutar 
              ve uçak sahibinin operasyonel yükünü tamamen ortadan kaldırır.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
