import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Translations } from '../translations';
import { getPath, type SupportedLanguage } from '../routes';

interface HeroProps {
  t: Translations;
  currentLang?: SupportedLanguage;
}

export function Hero({ t, currentLang = 'tr' }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1760183957226-8ad1e94c863f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGpldCUyMGFpcmNyYWZ0JTIwbHV4dXJ5fGVufDF8fHx8MTc2NDcyOTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Business Jet"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - Dark blue to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001B33]/95 via-[#001B33]/70 to-[#001B33]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            <span className="text-white text-sm tracking-wide">
              {t.hero.badge || 'AOC Certified Business Aviation'}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white mb-6 leading-tight">
            <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">
              {t.hero.title1 || 'Her Uçuşta Hassasiyet'}
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-sky-300">
              {t.hero.title2 || 'Uçağınız, Mükemmel Yönetiliyor'}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-slate-200 mb-10 max-w-3xl leading-relaxed">
            {t.hero.subtitle || 'AOC yetkisi ile iş jetleri için uçuş operasyonu ve uçak sahiplerine özel yönetim çözümleri sunuyoruz.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={getPath(currentLang, 'services')}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="text-lg">{t.hero.cta1 || 'Hizmetlerimizi İnceleyin'}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            
            <Link
              to={getPath(currentLang, 'contact')}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg transition-all duration-300"
            >
              <span className="text-lg">{t.hero.cta2 || 'Uçak Sahipleri İçin'}</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl text-white mb-1">{t.hero.statLabel1 || '24/7'}</div>
                <div className="text-sm text-slate-300">{t.hero.stat1 || 'Dispatch Support'}</div>
              </div>
              <div>
                <div className="text-3xl text-white mb-1">{t.hero.statLabel2 || 'Uluslararası'}</div>
                <div className="text-sm text-slate-300">{t.hero.stat2 || 'Aviation Standards'}</div>
              </div>
              <div>
                <div className="text-3xl text-white mb-1">{t.hero.statLabel3 || 'Part-M'}</div>
                <div className="text-sm text-slate-300">{t.hero.stat3 || 'CAMO Approved'}</div>
              </div>
              <div>
                <div className="text-3xl text-white mb-1">{t.hero.statLabel4 || 'Global'}</div>
                <div className="text-sm text-slate-300">{t.hero.stat4 || 'Operations'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-wider">{t.hero.scrollText || 'Scroll'}</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}