import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { PageType } from '../App';
import logo from 'figma:asset/754012f2dd1634659ec146627a703a7401bb4b59.png';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button onClick={() => navigateTo('home')} className="mb-4">
              <img src={logo} alt="LinJet" className="h-10 w-auto" />
            </button>
            <p className="text-slate-400 mb-4">
              Premium iş jeti yönetimi ve operasyon hizmetleri.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} className="text-slate-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={20} className="text-slate-400 hover:text-white" />
              </a>
              <a
                href="mailto:info@linjet.com"
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail size={20} className="text-slate-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Hizmetlerimiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('booking')}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Uçuş Talep Formu
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">İletişim</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="mailto:info@linjet.aero" className="hover:text-sky-400 transition-colors">
                  info@linjet.aero
                </a>
              </li>
              <li>
                <a href="tel:+903121234567" className="hover:text-sky-400 transition-colors">
                  +90 (312) 123 45 67
                </a>
              </li>
              <li>Ankara, Türkiye</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} LinJet. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            <button onClick={() => navigateTo('privacy')} className="text-slate-400 hover:text-sky-400 transition-colors">
              Gizlilik Politikası
            </button>
            <button onClick={() => navigateTo('terms')} className="text-slate-400 hover:text-sky-400 transition-colors">
              Kullanım Koşulları
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}