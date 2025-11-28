import React from 'react';
import { Shield } from 'lucide-react';
import { Translations } from '../../translations';

interface PrivacyPageProps {
  t: Translations;
}

export function PrivacyPage({ t }: PrivacyPageProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-sky-500/10 rounded-full flex items-center justify-center">
                <Shield className="text-sky-400" size={40} />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl text-white mb-6">{t.privacy.title}</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {t.privacy.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl text-white mb-4">{t.privacy.section1Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.privacy.section1Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.privacy.section2Title}</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t.privacy.section2Content}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                {t.privacy.section2List.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.privacy.section3Title}</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t.privacy.section3Content}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                {t.privacy.section3List.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.privacy.section4Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.privacy.section4Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.privacy.section5Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.privacy.section5Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.privacy.section6Title}</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t.privacy.section6Content}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                {t.privacy.section6List.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.privacy.section7Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.privacy.section7Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.privacy.section8Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.privacy.section8Content}
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                <p className="text-slate-300">
                  <strong className="text-white">E-posta:</strong> info@linjet.aero<br />
                  <strong className="text-white">Telefon:</strong> +90 (312) 123 45 67<br />
                  <strong className="text-white">Adres:</strong> Ankara, Türkiye
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.privacy.section9Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.privacy.section9Content}
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
