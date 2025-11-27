import React from 'react';
import { Hero } from '../Hero';
import { Services } from '../Services';
import { Stats } from '../Stats';
import { WhyPrivateJet } from '../WhyPrivateJet';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyPrivateJet />
      <Stats />
    </>
  );
}