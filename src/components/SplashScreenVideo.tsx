import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/754012f2dd1634659ec146627a703a7401bb4b59.png';

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
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLanguages, setShowLanguages] = useState(false);

  useEffect(() => {
    // Show welcome message for 3 seconds
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setShowLanguages(true);
    }, 3000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  const handleLanguageSelect = (lang: string) => {
    onLanguageSelect(lang);
  };

  return (
    <div className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center overflow-y-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950 opacity-90"></div>
      
      <div className="relative z-10 text-center px-4 py-8 w-full max-w-4xl mx-auto my-auto">
        <AnimatePresence mode="wait">
          {showWelcome && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <motion.div
                className="mb-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img src={logo} alt="LinJet" className="h-24 sm:h-32 md:h-40 w-auto mx-auto" />
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Welcome on Board
              </motion.h1>
            </motion.div>
          )}

          {showLanguages && (
            <motion.div
              key="languages"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center w-full max-w-5xl mx-auto"
            >
              <motion.div
                className="mb-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img src={logo} alt="LinJet" className="h-24 sm:h-32 md:h-40 w-auto mx-auto" />
              </motion.div>

              <motion.div
                className="text-lg sm:text-xl text-slate-300 mb-8 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p>🇹🇷 Lütfen dilinizi seçiniz</p>
                <p>🇬🇧 Please select your language</p>
                <p>🇩🇪 Bitte wählen Sie Ihre Sprache</p>
                <p>🇵🇱 Proszę wybrać swój język</p>
                <p>🇫🇷 Veuillez sélectionner votre langue</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto"
              >
                {languages.map((lang, index) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-800/30 hover:bg-slate-800/60 backdrop-blur-md border border-slate-700/30 hover:border-sky-500/50 rounded-2xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-5xl sm:text-6xl md:text-7xl">{lang.flag}</div>
                    <span className="text-white text-base sm:text-lg group-hover:text-sky-400 transition-colors">
                      {lang.name}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}