import React from 'react';
import { motion } from 'motion/react';

interface SplashScreenProps {
  onLanguageSelect: (lang: string) => void;
}

const languages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
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
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl text-white mb-4 tracking-tight">
            Welcome on Board
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 mb-12">
            Lütfen dilinizi seçiniz / Please select your language
          </p>
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
              <div className="text-5xl mb-3">{language.flag}</div>
              <div className="text-xl text-white group-hover:text-sky-400 transition-colors">
                {language.name}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
