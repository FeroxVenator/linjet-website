import React from 'react';
import { Clock, Shield, Sparkles, Globe2, Users, Plane } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Zaman Tasarrufu',
    description: 'Ticari havayollarının sınırlamalarından bağımsız, kendi programınıza göre uçun. Aktarmasız direkt uçuşlar ve hızlı check-in süreçleri.',
  },
  {
    icon: Shield,
    title: 'Gizlilik ve Güvenlik',
    description: 'Tam gizlilik içinde iş görüşmeleri yapın. Kişisel eşyalarınızın ve yolcu listenizin tam kontrolü sizde.',
  },
  {
    icon: Sparkles,
    title: 'Konfor ve Lüks',
    description: 'Premium kabin düzeni, özel yemek servisi, özelleştirilebilir iç mekan. Uçuş deneyiminizi tamamen kontrol edin.',
  },
  {
    icon: Globe2,
    title: 'Esnek Rota Seçimi',
    description: 'İstediğiniz havalimanına uçun. Ticari havayollarının uçmadığı 5000\'den fazla havalimanına erişim imkanı.',
  },
  {
    icon: Users,
    title: 'Üretkenlik',
    description: 'Uçuş sırasında toplantılar yapın, önemli anlaşmaları imzalayın. Havada geçen her dakikayı verimli kullanın.',
  },
  {
    icon: Plane,
    title: 'Premium Deneyim',
    description: 'FBO terminalleri ile kalabalıktan uzak, VIP transfer hizmetleri ve 7/24 özel destek ekibi.',
  },
];

export function WhyPrivateJet() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">Neden Özel Uçak?</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            İş dünyasının liderlerinin ve değer odaklı yolcuların tercih ettiği seyahat çözümü
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
              Özel uçak seyahati, sadece bir lüks değil, aynı zamanda stratejik bir iş aracıdır. 
              Zamanınızın değerini bilen, güvenlik ve gizliliğe önem veren, üretkenliği maksimize 
              etmek isteyen profesyoneller için ideal çözüm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
