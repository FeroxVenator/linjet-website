import React from 'react';
import { Hero } from '../Hero';
import { Services } from '../Services';
import { Stats } from '../Stats';
import { WhyPrivateJet } from '../WhyPrivateJet';
import { Translations } from '../../translations';

interface HomePageProps {
  t: Translations;
}

export function HomePage({ t }: HomePageProps) {
  return (
    <>
      <Hero t={t} />
      <Services t={t} />
      <WhyPrivateJet t={t} />
      <Stats t={t} />
    </>
  );
}