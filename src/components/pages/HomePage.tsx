import React from 'react';
import { Hero } from '../Hero';
import { Services } from '../Services';
import { Stats } from '../Stats';
import { WhyLinJet } from '../WhyLinJet';
import { Translations } from '../../translations';
import { parseUrl, type SupportedLanguage } from '../../routes';

interface HomePageProps {
  t: Translations;
}

export function HomePage({ t }: HomePageProps) {
  // Get current language from URL
  const parsed = parseUrl(window.location.pathname);
  const currentLang = (parsed?.lang || 'tr') as SupportedLanguage;

  return (
    <>
      <Hero t={t} currentLang={currentLang} />
      <Services t={t} />
      <WhyLinJet t={t} />
      <Stats t={t} />
    </>
  );
}