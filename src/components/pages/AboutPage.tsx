import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Target, Eye, Check } from 'lucide-react';

const features = [
  'Mühendislik odaklı yönetim yaklaşımı',
  'Uluslararası standartlara tam uyum',
  'Şeffaf ve detaylı raporlama sistemi',
  'Kişiye özel işletme modeli',
  'Maliyet optimizasyonu garantisi',
  'Maksimum uçuşa elverişlilik seviyesi',
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl text-white mb-6">Hakkımızda</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Engineering-Driven. Owner-Focused.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1661354421565-74ffd9650918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGpldCUyMGludGVyaW9yfGVufDF8fHx8MTc2NDEyNzIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business Jet Interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl text-white mb-6">
                LinJet Kimdir?
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                LinJet, Türkiye merkezli premium bir iş jeti yönetimi ve özel uçak operasyonları şirketidir. 
                Uçak sahiplerine; uçuş operasyonlarından sürekli uçuşa elverişlilik (CAMO), bakım planlaması, 
                maliyet kontrolü, lojistik, uçuş ekibi yönetimi ve finansal raporlamaya kadar uçtan uca 
                profesyonel bir yönetim hizmeti sunar.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                LinJet; global tedarikçiler, MRO'lar, OEM'ler ve uluslararası operasyon ağlarıyla çalışan, 
                teknik olarak güçlü, premium hizmet sunan butik bir operatördür. Her uçak için kişiye özel 
                işletme modeli oluşturur; maliyetleri optimize eder, uçuşa elverişliliği en üst düzeyde tutar 
                ve uçak sahibinin operasyonel yükünü tamamen ortadan kaldırır.
              </p>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-sky-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-sky-400" size={16} />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-sky-400" size={32} />
              </div>
              <h3 className="text-3xl text-white mb-4">Misyonumuz</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Sahip olduğumuz mühendislik tecrübesi, uluslararası regülasyon bilgisi ve operasyonel disiplin 
                sayesinde, uçak sahiplerine en güvenilir, en şeffaf ve en verimli işletme deneyimini sağlamak. 
                Uçak sahiplerinin zamanını, maliyetini ve operasyonel risklerini azaltırken, en yüksek uçuşa 
                elverişlilik seviyesini garanti etmek.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-sky-400" size={32} />
              </div>
              <h3 className="text-3xl text-white mb-4">Vizyonumuz</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Türkiye ve bölgede iş jeti yönetiminde öncü olmak, mühendislik odaklı yaklaşımımız ve premium 
                hizmet anlayışımızla sektörde standart belirlemek. Uçak sahiplerinin tercih ettiği, güvendiği 
                ve operasyonel mükemmellik için ilk başvurduğu, global standartlarda hizmet sunan lider 
                havacılık yönetim şirketi olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">Değerlerimiz</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Hizmet yaklaşımımızı şekillendiren temel değerler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center">
              <h4 className="text-xl text-white mb-3">Mühendislik Odaklılık</h4>
              <p className="text-slate-400">
                Teknik uzmanlık ve mühendislik bilgisi ile desteklenen profesyonel yönetim
              </p>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center">
              <h4 className="text-xl text-white mb-3">Tam Şeffaflık</h4>
              <p className="text-slate-400">
                Her aşamada detaylı raporlama ve tam finansal görünürlük
              </p>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center">
              <h4 className="text-xl text-white mb-3">Uluslararası Standartlar</h4>
              <p className="text-slate-400">
                Global regülasyonlara eksiksiz uyum ve en yüksek güvenlik standartları
              </p>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center">
              <h4 className="text-xl text-white mb-3">Müşteri Odaklılık</h4>
              <p className="text-slate-400">
                Her uçak sahibine özel, ihtiyaçlara göre özelleştirilebilir hizmet modeli
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
