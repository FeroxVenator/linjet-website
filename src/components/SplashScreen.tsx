import React from 'react';
import { motion } from 'motion/react';

interface SplashScreenProps {
  onLanguageSelect: (lang: string) => void;
}

const languages = [
  { code: 'tr', name: 'Türkçe', instruction: 'Lütfen dilinizi seçiniz' },
  { code: 'en', name: 'English', instruction: 'Please select your language' },
  { code: 'de', name: 'Deutsch', instruction: 'Bitte wählen Sie Ihre Sprache' },
  { code: 'pl', name: 'Polski', instruction: 'Proszę wybrać swój język' },
  { code: 'fr', name: 'Français', instruction: 'Veuillez sélectionner votre langue' },
];

export function SplashScreen({ onLanguageSelect }: SplashScreenProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center">
      {/* Background Video Effect - Simulated with gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black">
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-sky-900/20 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mb-12"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight relative inline-block">
            Welcome on Board
            {/* Animated Blue Stripe - from center outward */}
            <motion.div
              className="absolute left-1/2 bottom-4 h-1 bg-gradient-to-r from-sky-500 to-sky-500"
              initial={{ width: 0, x: '0%' }}
              animate={{ width: '100%', x: '-50%' }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            />
          </h1>
        </motion.div>

        {/* Language Instructions */}
        <motion.div
          className="mb-8 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {languages.map((lang, idx) => (
            <div key={lang.code} className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <img
                src={`https://flagcdn.com/w20/${lang.code === 'en' ? 'gb' : lang.code}.png`}
                srcSet={`https://flagcdn.com/w40/${lang.code === 'en' ? 'gb' : lang.code}.png 2x`}
                alt=""
                className="w-5 h-4 rounded-sm"
              />
              <span>{lang.instruction}</span>
            </div>
          ))}
        </motion.div>

        {/* Language Selection */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {languages.map((language, index) => (
            <motion.button
              key={language.code}
              onClick={() => onLanguageSelect(language.code)}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-sky-500/50 rounded-xl p-6 transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="w-16 h-12 mx-auto mb-3 rounded-md overflow-hidden shadow-lg">
                <img
                  src={`https://flagcdn.com/w80/${language.code === 'en' ? 'gb' : language.code}.png`}
                  srcSet={`https://flagcdn.com/w160/${language.code === 'en' ? 'gb' : language.code}.png 2x`}
                  alt={`${language.name} flag`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xl text-white group-hover:text-sky-400 transition-colors mb-2">
                {language.name}
              </div>
              <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                {language.instruction}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}