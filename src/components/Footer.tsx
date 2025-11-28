import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { PageType } from '../App';
import { Translations } from '../translations';
import logo from 'figma:asset/754012f2dd1634659ec146627a703a7401bb4b59.png';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
  t: Translations;
}

export function Footer({ setCurrentPage, t }: FooterProps) {
  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <button onClick={() => navigateTo('home')} className="mb-6">
              <img src={logo} alt="LinJet" className="h-12 w-auto" />
            </button>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {t.hero.subtitle.slice(0, 100)}...
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} className="text-slate-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={20} className="text-slate-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={20} className="text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6 text-white">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('booking')}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {t.nav.booking}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6 text-white">{t.footer.contactInfo}</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="text-sky-400 flex-shrink-0" size={20} />
                <a href="tel:+903121234567" className="hover:text-sky-400 transition-colors">
                  +90 (312) 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sky-400 flex-shrink-0" size={20} />
                <a href="mailto:info@linjet.aero" className="hover:text-sky-400 transition-colors">
                  info@linjet.aero
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-sky-400 mt-1 flex-shrink-0" size={20} />
                <span>{t.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl mb-6 text-white">{t.contact.departments}</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="mailto:ops@linjet.aero" className="hover:text-sky-400 transition-colors">
                  {t.contact.ops}: ops@linjet.aero
                </a>
              </li>
              <li>
                <a href="mailto:training@linjet.aero" className="hover:text-sky-400 transition-colors">
                  {t.contact.training}: training@linjet.aero
                </a>
              </li>
              <li>
                <a href="mailto:quality@linjet.aero" className="hover:text-sky-400 transition-colors">
                  {t.contact.quality}: quality@linjet.aero
                </a>
              </li>
              <li>
                <a href="mailto:camo@linjet.aero" className="hover:text-sky-400 transition-colors">
                  {t.contact.camo}: camo@linjet.aero
                </a>
              </li>
              <li>
                <a href="mailto:safety@linjet.aero" className="hover:text-sky-400 transition-colors">
                  {t.contact.safety}: safety@linjet.aero
                </a>
              </li>
              <li>
                <a href="mailto:dispatch@linjet.aero" className="hover:text-sky-400 transition-colors">
                  {t.contact.dispatch}: dispatch@linjet.aero
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} LinJet. {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            <button onClick={() => navigateTo('privacy')} className="text-slate-400 hover:text-sky-400 transition-colors">
              {t.footer.privacyPolicy}
            </button>
            <button onClick={() => navigateTo('terms')} className="text-slate-400 hover:text-sky-400 transition-colors">
              {t.footer.termsOfService}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
