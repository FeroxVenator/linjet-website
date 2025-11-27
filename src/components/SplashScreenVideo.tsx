import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 overflow-hidden">
      {/* Simulated Video Background - Cabin Interior Movement */}
      <div className="absolute inset-0">
        {/* Dark gradient overlay to simulate video */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Simulated cabin lights/windows effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Simulated forward movement effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
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
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h1 className="text-6xl sm:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
                  Welcome on Board
                </h1>
                <motion.div
                  className="w-32 h-1 bg-sky-500 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 128 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.div>
            </motion.div>
          )}

          {showLanguages && (
            <motion.div
              key="languages"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center w-full max-w-5xl"
            >
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

              {/* Language Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {languages.map((language, index) => (
                  <motion.button
                    key={language.code}
                    onClick={() => onLanguageSelect(language.code)}
                    className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-sky-500/50 rounded-xl p-6 transition-all group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-5xl mb-3">{language.flag}</div>
                    <div className="text-xl text-white group-hover:text-sky-400 transition-colors">
                      {language.name}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/30" />
    </div>
  );
}