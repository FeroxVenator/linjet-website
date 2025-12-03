import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Translations } from '../translations';
import { getPath, type SupportedLanguage } from '../routes';
import heroImage from 'figma:asset/bb4913123b13f115cb6219a10e92b94bd42484b3.png';

interface HeroProps {
  t: Translations;
  currentLang?: SupportedLanguage;
}

// Counter component for animated numbers
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{suffix}</>;
}

export function Hero({ t, currentLang = 'tr' }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Airplane flying through clouds"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay - Dark blue to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001B33]/95 via-[#001B33]/75 to-[#001B33]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl">
          {/* Main Heading - Fade In + Slide */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white mb-4 sm:mb-6 leading-tight"
          >
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-2">
              {t.hero.title1 || 'Her Uçuşta Hassasiyet'}
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sky-300">
              {t.hero.title2 || 'Uçağınız, Mükemmel Yönetiliyor'}
            </span>
          </motion.h1>

          {/* Subheading - Fade In + Slide (delayed) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-xl md:text-2xl text-slate-200 mb-6 sm:mb-10 max-w-3xl leading-relaxed"
          >
            {t.hero.subtitle || 'AOC yetkisi ile iş jetleri için uçuş operasyonu ve uçak sahiplerine özel yönetim çözümleri sunuyoruz.'}
          </motion.p>

          {/* CTA Buttons - Fade In + Slide (delayed) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              to={getPath(currentLang, 'services')}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-2xl hover:scale-105 active:scale-100 touch-manipulation"
            >
              <span className="text-base sm:text-lg">{t.hero.cta1 || 'Hizmetlerimizi İnceleyin'}</span>
              <ArrowRight className="group-hover:translate-x-1 group-active:translate-x-2 transition-transform" size={18} />
            </Link>
            
            <Link
              to={getPath(currentLang, 'contact')}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50 active:border-white/70 text-white rounded-lg transition-all duration-300 touch-manipulation"
            >
              <span className="text-base sm:text-lg">{t.hero.cta2 || 'Uçak Sahipleri İçin'}</span>
              <ChevronRight className="group-hover:translate-x-1 group-active:translate-x-2 transition-transform" size={18} />
            </Link>
          </motion.div>

          {/* Trust Indicators - Fade In + Floating Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {/* Stat 1 */}
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl text-white mb-1">{t.hero.statLabel1 || '24/7'}</div>
                <div className="text-xs sm:text-sm text-slate-300">{t.hero.stat1 || 'Dispatch Support'}</div>
              </div>
              
              {/* Stat 2 */}
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl text-white mb-1">{t.hero.statLabel2 || 'Uluslararası'}</div>
                <div className="text-xs sm:text-sm text-slate-300">{t.hero.stat2 || 'Aviation Standards'}</div>
              </div>
              
              {/* Stat 3 */}
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl text-white mb-1">{t.hero.statLabel3 || 'Part-M'}</div>
                <div className="text-xs sm:text-sm text-slate-300">{t.hero.stat3 || 'CAMO Approved'}</div>
              </div>
              
              {/* Stat 4 */}
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl text-white mb-1">{t.hero.statLabel4 || 'Global'}</div>
                <div className="text-xs sm:text-sm text-slate-300">{t.hero.stat4 || 'Operations'}</div>
              </div>
            </div>
          </motion.div>
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