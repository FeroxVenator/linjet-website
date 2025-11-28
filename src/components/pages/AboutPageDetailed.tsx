import React from 'react';
import { Target, Eye, CheckCircle } from 'lucide-react';
import { Translations } from '../../translations';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AboutPageProps {
  t: Translations;
}

export function AboutPage({ t }: AboutPageProps) {
  const keyFeatures = [
    t.about.feature1 || 'Mühendislik odaklı yönetim yaklaşımı',
    t.about.feature2 || 'Uluslararası standartlara tam uyum',
    t.about.feature3 || 'Şeffaf ve detaylı raporlama sistemi',
    t.about.feature4 || 'Kayıp özel işletme modeli',
    t.about.feature5 || 'Maliyet optimizasyonu garantisi',
    t.about.feature6 || 'Maksimum uçuş elverişlik seviyesi',
  ];

  const values = [
    {
      title: t.about.value1,
      description: t.about.value1Desc,
    },
    {
      title: t.about.value2,
      description: t.about.value2Desc,
    },
    {
      title: t.about.value3,
      description: t.about.value3Desc,
    },
    {
      title: t.about.value4,
      description: t.about.value4Desc,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* LinJet Kimdir Section with Image */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGRpbm5lcnxlbnwwfHx8fDE3MzI4MjQwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="LinJet"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl text-white mb-6">{t.about.introTitle}</h2>
              
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed mb-8">
                <p>{t.about.introParagraph1 || 'LinJet, Türkiye merkezli premium bir iş jeti yönetimi ve özel uçak operasyonları şirketidir. Uçak sahiplerine tüm operasyonlarından sürekli uçuşa elverişlilik (CAMO), bakım planlaması, maliyet kontrolü, lojistik, uçuş ekibi yönetimi ve finansal raporlamaya kadar uçtan uca profesyonel bir yönetim hizmeti sunar.'}</p>
                <p>{t.about.introParagraph2 || 'LinJet, global tedarikçiler, MRO\'lar, OEM\'ler ve uluslararası operasyon ağlarıyla çalışan, teknik olarak güçlü, premium hizmet sunan bütik bir operatördür. Her uçak için kişiye özel işletme modeli oluşturur, maliyetleri optimize eder, uçuşa elverişliği en üst düzeyde tutar ve uçak sahibinin operasyonel yükünü tamamen ortadan kaldırır.'}</p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-sky-400" size={16} />
                    </div>
                    <p className="text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-sky-500/10 rounded-full flex items-center justify-center">
                  <Target className="text-sky-400" size={28} />
                </div>
                <h3 className="text-2xl text-white">{t.about.missionTitle}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-sky-500/10 rounded-full flex items-center justify-center">
                  <Eye className="text-sky-400" size={28} />
                </div>
                <h3 className="text-2xl text-white">{t.about.visionTitle}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">{t.about.valuesTitle || 'Değerlerimiz'}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t.about.valuesSubtitle || 'Hizmet yaklaşımımızı şekillendiren temel değerler'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-sky-500/50 transition-all"
              >
                <h4 className="text-lg text-white mb-3">{value.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
