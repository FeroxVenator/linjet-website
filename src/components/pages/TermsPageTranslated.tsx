import React from 'react';
import { FileText } from 'lucide-react';
import { Translations } from '../../translations';

interface TermsPageProps {
  t: Translations;
}

export function TermsPage({ t }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-sky-500/10 rounded-full flex items-center justify-center">
                <FileText className="text-sky-400" size={40} />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl text-white mb-6">{t.terms.title}</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {t.terms.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section1Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.terms.section1Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section2Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.terms.section2Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section3Title}</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t.terms.section3Content}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                {t.terms.section3List.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section4Title}</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t.terms.section4Content}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                {t.terms.section4List.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section5Title}</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t.terms.section5Content}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                {t.terms.section5List.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section6Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.terms.section6Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section7Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.terms.section7Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section8Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.terms.section8Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section9Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.terms.section9Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section10Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.terms.section10Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section11Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.terms.section11Content}
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">{t.terms.section12Title}</h2>
              <p className="text-slate-300 leading-relaxed">
                {t.terms.section12Content}
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                <p className="text-slate-300">
                  <strong className="text-white">E-posta:</strong> info@linjet.aero<br />
                  <strong className="text-white">Telefon:</strong> +90 (312) 123 45 67<br />
                  <strong className="text-white">Adres:</strong> Ankara, Türkiye
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
