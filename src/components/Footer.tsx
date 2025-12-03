import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Translations } from '../translations';
import { getPath, type SupportedLanguage } from '../routes';
import logo from 'figma:asset/754012f2dd1634659ec146627a703a7401bb4b59.png';

interface FooterProps {
  currentLang: SupportedLanguage;
  t: Translations;
}

export function Footer({ currentLang, t }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <Link to={getPath(currentLang, 'home')} onClick={scrollToTop} className="mb-4 sm:mb-6 inline-block">
              <img src={logo} alt="LinJet" className="h-10 sm:h-12 w-auto" />
            </Link>
            <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 leading-relaxed">
              {t.footer.tagline || 'Premium iş jeti yönetimi ve operasyon hizmetleri.'}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 active:bg-sky-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-100 touch-manipulation"
              >
                <Linkedin size={20} className="text-slate-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 active:bg-sky-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-100 touch-manipulation"
              >
                <Twitter size={20} className="text-slate-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 active:bg-sky-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-100 touch-manipulation"
              >
                <Instagram size={20} className="text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl mb-4 sm:mb-6 text-white">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to={getPath(currentLang, 'home')}
                  onClick={scrollToTop}
                  className="text-sm sm:text-base text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  to={getPath(currentLang, 'about')}
                  onClick={scrollToTop}
                  className="text-sm sm:text-base text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to={getPath(currentLang, 'services')}
                  onClick={scrollToTop}
                  className="text-sm sm:text-base text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  to={getPath(currentLang, 'booking')}
                  onClick={scrollToTop}
                  className="text-sm sm:text-base text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {t.nav.booking}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl mb-4 sm:mb-6 text-white">{t.footer.contactInfo}</h3>
            <ul className="space-y-3 sm:space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="text-sky-400 flex-shrink-0" size={18} />
                <a href="tel:+903121234567" className="text-sm sm:text-base hover:text-sky-400 transition-colors">
                  +90 (312) 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sky-400 flex-shrink-0" size={18} />
                <a href="mailto:info@linjet.aero" className="text-sm sm:text-base hover:text-sky-400 transition-colors break-all">
                  info@linjet.aero
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-sky-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">{t.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg sm:text-xl mb-4 sm:mb-6 text-white">{t.contact.departments}</h3>
            <ul className="space-y-2 sm:space-y-3 text-slate-400">
              <li>
                <a href="mailto:ops@linjet.aero" className="text-sm hover:text-sky-400 transition-colors block">
                  {t.contact.ops}: <span className="break-all">ops@linjet.aero</span>
                </a>
              </li>
              <li>
                <a href="mailto:training@linjet.aero" className="text-sm hover:text-sky-400 transition-colors block">
                  {t.contact.training}: <span className="break-all">training@linjet.aero</span>
                </a>
              </li>
              <li>
                <a href="mailto:quality@linjet.aero" className="text-sm hover:text-sky-400 transition-colors block">
                  {t.contact.quality}: <span className="break-all">quality@linjet.aero</span>
                </a>
              </li>
              <li>
                <a href="mailto:camo@linjet.aero" className="text-sm hover:text-sky-400 transition-colors block">
                  {t.contact.camo}: <span className="break-all">camo@linjet.aero</span>
                </a>
              </li>
              <li>
                <a href="mailto:safety@linjet.aero" className="text-sm hover:text-sky-400 transition-colors block">
                  {t.contact.safety}: <span className="break-all">safety@linjet.aero</span>
                </a>
              </li>
              <li>
                <a href="mailto:dispatch@linjet.aero" className="text-sm hover:text-sky-400 transition-colors block">
                  {t.contact.dispatch}: <span className="break-all">dispatch@linjet.aero</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-slate-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} LinJet. {t.footer.copyright}
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link 
              to={getPath(currentLang, 'privacy')} 
              onClick={scrollToTop}
              className="text-slate-400 hover:text-sky-400 transition-colors"
            >
              {t.footer.privacyPolicy}
            </Link>
            <Link 
              to={getPath(currentLang, 'terms')} 
              onClick={scrollToTop}
              className="text-slate-400 hover:text-sky-400 transition-colors"
            >
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}