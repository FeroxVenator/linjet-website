import React from 'react';
import { Award, ShieldCheck, TrendingUp, Globe } from 'lucide-react';
import { Translations } from '../translations';

interface WhyLinJetProps {
  t: Translations;
}

export function WhyLinJet({ t }: WhyLinJetProps) {
  const features = [
    {
      icon: Award,
      title: t.whyLinJet.feature1Title || 'AOC Yetkisi',
      description: t.whyLinJet.feature1Desc || 'EASA Air Operator Certificate ile tam yetkili business aviation operatörüyüz.',
      gradient: 'from-sky-400 to-blue-600',
    },
    {
      icon: ShieldCheck,
      title: t.whyLinJet.feature2Title || 'Emniyet & Kalite Yönetimi',
      description: t.whyLinJet.feature2Desc || 'IS-BAO ve Wyvern onaylı emniyet yönetim sistemleri ile en üst düzey güvenlik standardı.',
      gradient: 'from-emerald-400 to-teal-600',
    },
    {
      icon: TrendingUp,
      title: t.whyLinJet.feature3Title || 'Şeffaf Finansal Raporlama',
      description: t.whyLinJet.feature3Desc || 'Detaylı maliyet takibi, aylık raporlama ve uçak sahipleri için tam şeffaflık garantisi.',
      gradient: 'from-violet-400 to-purple-600',
    },
    {
      icon: Globe,
      title: t.whyLinJet.feature4Title || 'Uluslararası Operasyon Tecrübesi',
      description: t.whyLinJet.feature4Desc || 'Global handling network, overflight izinleri ve 5 kıtada operasyon deneyimi.',
      gradient: 'from-amber-400 to-orange-600',
    },
  ];

  return (
    <section className="py-24 bg-[#001B33] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-4">
            {t.whyLinJet.sectionBadge || 'Neden LinJet'}
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            {t.whyLinJet.sectionTitle || 'Mühendislik Odaklı. Müşteri Odaklı.'}
          </h2>
          <p className="text-xl text-slate-300">
            {t.whyLinJet.sectionSubtitle || 'Business aviation\'da güvenilir ortağınız'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10 h-full">
                  {/* Icon with Gradient */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 text-lg mb-6">
            {t.whyLinJet.ctaText || 'Uçağınızı profesyonel ellere teslim etmeye hazır mısınız?'}
          </p>
          <a
            href="tel:+903121234567"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-[#001B33] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="text-lg">{t.whyLinJet.ctaButton || 'Hemen İletişime Geçin'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
