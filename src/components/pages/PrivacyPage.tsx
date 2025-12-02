import React from 'react';
import { Shield } from 'lucide-react';

export function PrivacyPage() {
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
            <h1 className="text-5xl sm:text-6xl text-white mb-6">Gizlilik Politikası</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Son Güncelleme: 27 Kasım 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl text-white mb-4">1. Giriş</h2>
              <p className="text-slate-300 leading-relaxed">
                LinJet olarak müşterilerimizin gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz. 
                Bu Gizlilik Politikası, LinJet tarafından toplanan, kullanılan ve korunan kişisel verilere ilişkin 
                uygulamalarımızı açıklamaktadır. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili 
                tüm mevzuata uygun olarak hareket etmekteyiz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">2. Toplanan Kişisel Veriler</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Web sitemizi ziyaret ettiğinizde ve hizmetlerimizden yararlandığınızda aşağıdaki kişisel verileri toplayabiliriz:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Kimlik Bilgileri: Ad, soyad, T.C. kimlik numarası, pasaport numarası</li>
                <li>İletişim Bilgileri: E-posta adresi, telefon numarası, adres</li>
                <li>Uçuş Bilgileri: Seyahat planları, rota tercihleri, yolcu bilgileri</li>
                <li>Finansal Bilgiler: Ödeme bilgileri, fatura adresi</li>
                <li>Teknik Veriler: IP adresi, çerez verileri, tarayıcı bilgileri</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">3. Verilerin Kullanım Amaçları</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Toplanan kişisel verileriniz aşağıdaki amaçlarla kullanılmaktadır:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Uçuş rezervasyonlarınızın işleme alınması ve yönetimi</li>
                <li>Müşteri hizmetleri ve destek sağlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Havacılık güvenlik ve emniyet gereksinimleri</li>
                <li>İstatistiksel analiz ve hizmet iyileştirme</li>
                <li>Pazarlama ve kampanya bilgilendirmeleri (onay vermeniz halinde)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">4. Verilerin Paylaşımı</h2>
              <p className="text-slate-300 leading-relaxed">
                Kişisel verileriniz, hizmetlerimizin sunulabilmesi için gerekli olan üçüncü taraflarla 
                (havalimanı otoriteleri, güvenlik yetkilileri, sigorta şirketleri, ödeme hizmet sağlayıcıları) 
                paylaşılabilir. Tüm veri paylaşımları yasal düzenlemelere uygun ve güvenli bir şekilde yapılmaktadır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">5. Veri Güvenliği</h2>
              <p className="text-slate-300 leading-relaxed">
                Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari önlemler almaktayız. 
                Verileriniz şifrelenmiş bağlantılar üzerinden iletilmekte ve güvenli sunucularda saklanmaktadır. 
                Yetkisiz erişim, kayıp veya ifşaya karşı en üst düzey koruma sağlanmaktadır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">6. Haklarınız</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                KVKK kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Kişisel verilerin düzeltilmesini veya silinmesini talep etme</li>
                <li>Kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">7. Çerezler (Cookies)</h2>
              <p className="text-slate-300 leading-relaxed">
                Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanılmaktadır. 
                Çerezleri tarayıcı ayarlarınızdan yönetebilir veya devre dışı bırakabilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">8. İletişim</h2>
              <p className="text-slate-300 leading-relaxed">
                Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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
              <h2 className="text-2xl text-white mb-4">9. Değişiklikler</h2>
              <p className="text-slate-300 leading-relaxed">
                Bu Gizlilik Politikası düzenli olarak gözden geçirilmekte ve güncellenebilmektedir. 
                Önemli değişiklikler olması durumunda sizi bilgilendireceğiz.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
