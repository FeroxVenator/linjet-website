import React from 'react';
import { FileText } from 'lucide-react';

export function TermsPage() {
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
            <h1 className="text-5xl sm:text-6xl text-white mb-6">Kullanım Koşulları</h1>
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
              <h2 className="text-2xl text-white mb-4">1. Genel Hükümler</h2>
              <p className="text-slate-300 leading-relaxed">
                Bu web sitesi LinJet tarafından işletilmektedir. Web sitesini kullanarak, 
                aşağıda belirtilen şart ve koşulları kabul etmiş sayılırsınız. Bu koşulları 
                kabul etmiyorsanız, lütfen web sitesini kullanmayınız.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">2. Hizmet Tanımı</h2>
              <p className="text-slate-300 leading-relaxed">
                LinJet, özel uçak yönetimi, operasyonları, CAMO hizmetleri, bakım yönetimi ve 
                charter uçuş hizmetleri sunmaktadır. Tüm hizmetlerimiz Türkiye Cumhuriyeti 
                mevzuatı ve uluslararası havacılık standartlarına uygun olarak yürütülmektedir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">3. Rezervasyon ve Ödeme</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Uçuş rezervasyonları ve hizmet talepleri:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Tüm rezervasyonlar yazılı onay ile kesinleşir</li>
                <li>Fiyatlar müsaitlik durumuna göre değişkenlik gösterebilir</li>
                <li>Ödeme koşulları her rezervasyon için ayrı belirlenir</li>
                <li>İptal ve değişiklik koşulları rezervasyon sırasında bildirilir</li>
                <li>Tüm fiyatlar aksi belirtilmedikçe KDV dahildir</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">4. İptal ve Değişiklik Politikası</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Uçuş iptal ve değişikliklerinde aşağıdaki koşullar geçerlidir:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Uçuştan 72 saat öncesine kadar yapılan iptallerde %10 kesinti uygulanır</li>
                <li>Uçuştan 48-72 saat arası iptallerde %25 kesinti uygulanır</li>
                <li>Uçuştan 24-48 saat arası iptallerde %50 kesinti uygulanır</li>
                <li>Uçuştan 24 saat öncesinden sonra yapılan iptallerde iade yapılmaz</li>
                <li>Hava durumu ve teknik nedenlerle yapılan iptallerde tam iade yapılır</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">5. Yolcu Sorumlulukları</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Yolcular aşağıdaki hususlardan sorumludur:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Geçerli seyahat belgelerinin bulundurulması (pasaport, vize vb.)</li>
                <li>Uçuş öncesi gerekli sağlık kontrollerinin yapılması</li>
                <li>Yasak maddelerin taşınmaması</li>
                <li>Uçuş kurallarına ve ekip talimatlarına uyulması</li>
                <li>Doğru ve eksiksiz bilgi verilmesi</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">6. Sorumluluk Sınırlamaları</h2>
              <p className="text-slate-300 leading-relaxed">
                LinJet, makul özen ve dikkat göstermektedir. Ancak, hava şartları, teknik arızalar, 
                otorite kısıtlamaları veya mücbir sebepler nedeniyle oluşabilecek gecikmeler, 
                iptal veya değişikliklerden sorumlu tutulamaz. Sorumluluklar uluslararası havacılık 
                konvansiyonları (Varşova, Montreal) ile sınırlıdır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">7. Sigorta</h2>
              <p className="text-slate-300 leading-relaxed">
                Tüm uçuşlarımız yeterli hava taşıma sorumluluk sigortası ile kapsanmaktadır. 
                Ek seyahat sigortası yaptırılması müşterilerin kendi sorumluluğundadır ve tavsiye edilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">8. Fikri Mülkiyet Hakları</h2>
              <p className="text-slate-300 leading-relaxed">
                Bu web sitesindeki tüm içerik, tasarım, logo, metin, görsel ve diğer materyaller 
                LinJet'in mülkiyetindedir ve telif hakları ile korunmaktadır. İzinsiz kullanım, 
                kopyalama veya dağıtım yasaktır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">9. Gizlilik</h2>
              <p className="text-slate-300 leading-relaxed">
                Kişisel verilerinizin işlenmesi Gizlilik Politikamız kapsamında düzenlenmektedir. 
                Detaylı bilgi için Gizlilik Politikası sayfamızı inceleyebilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">10. Uyuşmazlık Çözümü</h2>
              <p className="text-slate-300 leading-relaxed">
                Bu sözleşmeden doğabilecek uyuşmazlıklarda Ankara Mahkemeleri ve İcra Daireleri yetkilidir. 
                Türkiye Cumhuriyeti kanunları uygulanır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">11. Değişiklikler</h2>
              <p className="text-slate-300 leading-relaxed">
                LinJet, bu kullanım koşullarını önceden haber vermeksizin değiştirme hakkını saklı tutar. 
                Güncel koşullar her zaman web sitemizde yayınlanacaktır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">12. İletişim</h2>
              <p className="text-slate-300 leading-relaxed">
                Kullanım koşulları hakkında sorularınız için:
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
