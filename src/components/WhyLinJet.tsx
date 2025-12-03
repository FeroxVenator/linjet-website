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
    <section className="py-12 sm:py-16 md:py-24 bg-[#001B33] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-4">
            {t.whyLinJet.sectionBadge || 'Neden LinJet'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 px-4">
            {t.whyLinJet.sectionTitle || 'Mühendislik Odaklı. Müşteri Odaklı.'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 px-4">
            {t.whyLinJet.sectionSubtitle || 'Business aviation\'da güvenilir ortağınız'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative cursor-pointer touch-manipulation"
              >
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 hover:border-white/30 active:border-white/40 transition-all duration-300 hover:bg-white/10 active:bg-white/15 h-full">
                  {/* Icon with Gradient */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-active:scale-105 transition-transform duration-300 shadow-lg group-hover:shadow-2xl group-active:shadow-2xl`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl text-white mb-2 sm:mb-3 group-hover:text-sky-300 group-active:text-sky-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed group-hover:text-slate-200 group-active:text-slate-100 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 group-active:opacity-20 transition-opacity duration-300 -z-10 blur-xl`} />
                  
                  {/* Border Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 group-active:opacity-30 transition-opacity duration-300 blur-sm`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center px-4">
          <p className="text-slate-300 text-base sm:text-lg mb-4 sm:mb-6">
            {t.whyLinJet.ctaText || 'Uçağınızı profesyonel ellere teslim etmeye hazır mısınız?'}
          </p>
          <a
            href="tel:+903121234567"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-slate-100 active:bg-slate-200 text-[#001B33] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-2xl hover:scale-105 active:scale-100 touch-manipulation"
          >
            <span className="text-base sm:text-lg">{t.whyLinJet.ctaButton || 'Hemen İletişime Geçin'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}