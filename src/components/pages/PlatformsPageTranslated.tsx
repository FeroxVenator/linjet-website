import React from 'react';
import { Plane, Settings, Wrench, Award } from 'lucide-react';
import { Translations } from '../../translations';

interface PlatformsPageProps {
  t: Translations;
}

export function PlatformsPage({ t }: PlatformsPageProps) {
  const aircraftPlatforms = [
    {
      manufacturer: 'Gulfstream',
      models: ['G450', 'G500', 'G550', 'G650', 'GIV-SP'],
      description: t.platforms.gulfstreamDesc,
    },
    {
      manufacturer: 'Bombardier',
      models: ['Global 5000', 'Global 6000', 'Challenger 350', 'Challenger 650'],
      description: t.platforms.bombardierDesc,
    },
    {
      manufacturer: 'Dassault',
      models: ['Falcon 2000', 'Falcon 7X', 'Falcon 8X'],
      description: t.platforms.dassaultDesc,
    },
    {
      manufacturer: 'Embraer',
      models: ['Legacy 450', 'Legacy 500', 'Phenom 300', 'Praetor 600'],
      description: t.platforms.embraerDesc,
    },
  ];

  const expertise = [
    {
      icon: Settings,
      title: t.platforms.expertise1Title,
      description: t.platforms.expertise1Desc,
    },
    {
      icon: Wrench,
      title: t.platforms.expertise2Title,
      description: t.platforms.expertise2Desc,
    },
    {
      icon: Award,
      title: t.platforms.expertise3Title,
      description: t.platforms.expertise3Desc,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-sky-500/10 rounded-full flex items-center justify-center">
                <Plane className="text-sky-400" size={40} />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl text-white mb-6">{t.platforms.title}</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t.platforms.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Aircraft Platforms */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white mb-12 text-center">{t.platforms.platformsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aircraftPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl text-white mb-4">{platform.manufacturer}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {platform.models.map((model, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full text-sm"
                    >
                      {model}
                    </span>
                  ))}
                </div>
                <p className="text-slate-300">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 text-center"
                >
                  <div className="w-14 h-14 bg-sky-500/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-sky-400" size={28} />
                  </div>
                  <h3 className="text-xl text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
