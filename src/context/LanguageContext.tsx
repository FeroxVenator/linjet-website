import React, { createContext, useContext } from 'react';
import { Translations } from '../translations';

interface LanguageContextType {
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  return context.t;
}

export function LanguageProvider({ children, t }: { children: React.ReactNode; t: Translations }) {
  return <LanguageContext.Provider value={{ t }}>{children}</LanguageContext.Provider>;
}
