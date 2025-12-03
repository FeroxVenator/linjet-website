import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, Phone, ChevronDown } from 'lucide-react';
import logo from 'figma:asset/754012f2dd1634659ec146627a703a7401bb4b59.png';
import { Translations } from '../translations';
import { getPath, supportedLanguages, type SupportedLanguage, type PageSlug } from '../routes';
import { FlagIcon } from './FlagIcon';

interface HeaderProps {
  currentLang: SupportedLanguage;
  t: Translations;
}

const languageNames: Record<SupportedLanguage, string> = {
  tr: 'Türkçe',
  en: 'English',
  de: 'Deutsch',
  pl: 'Polski',
  fr: 'Français',
};

export function Header({ currentLang, t }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
    // Navigate to home page in new language
    navigate(getPath(newLang, 'home'));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to={getPath(currentLang, 'home')}
              className="transition-colors text-slate-700 hover:text-slate-900 hover:text-sky-500"
            >
              {t.nav.home}
            </Link>
            <Link
              to={getPath(currentLang, 'about')}
              className="transition-colors text-slate-700 hover:text-slate-900 hover:text-sky-500"
            >
              {t.nav.about}
            </Link>
            <Link
              to={getPath(currentLang, 'services')}
              className="transition-colors text-slate-700 hover:text-slate-900 hover:text-sky-500"
            >
              {t.nav.services}
            </Link>
            <Link
              to={getPath(currentLang, 'booking')}
              className="transition-colors text-slate-700 hover:text-slate-900 hover:text-sky-500"
            >
              {t.nav.booking}
            </Link>
          </nav>

          {/* Logo - Center */}
          <Link to={getPath(currentLang, 'home')} className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <img src={logo} alt="LinJet" className="h-16 w-auto" />
          </Link>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="tel:+903121234567" className="text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-2">
              <Phone size={18} />
              +90 (312) 123 45 67
            </a>
            <Link
              to={getPath(currentLang, 'contact')}
              className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition-colors"
            >
              {t.nav.contact}
            </Link>
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors flex items-center gap-2"
                title="Change Language"
              >
                <Globe size={20} />
                <span className="uppercase">{currentLang}</span>
                <ChevronDown size={16} />
              </button>
              
              {isLangMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                    {supportedLanguages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-full px-4 py-2 text-left hover:bg-sky-50 transition-colors flex items-center gap-3 ${
                          currentLang === lang ? 'bg-sky-50 text-sky-600' : 'text-slate-700'
                        }`}
                      >
                        <FlagIcon lang={lang} />
                        <span className="text-sm">{languageNames[lang]}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to={getPath(currentLang, 'home')}
                onClick={closeMobileMenu}
                className="transition-colors text-left text-slate-700 hover:text-slate-900"
              >
                {t.nav.home}
              </Link>
              <Link
                to={getPath(currentLang, 'about')}
                onClick={closeMobileMenu}
                className="transition-colors text-left text-slate-700 hover:text-slate-900"
              >
                {t.nav.about}
              </Link>
              <Link
                to={getPath(currentLang, 'services')}
                onClick={closeMobileMenu}
                className="transition-colors text-left text-slate-700 hover:text-slate-900"
              >
                {t.nav.services}
              </Link>
              <Link
                to={getPath(currentLang, 'booking')}
                onClick={closeMobileMenu}
                className="transition-colors text-left text-slate-700 hover:text-slate-900"
              >
                {t.nav.booking}
              </Link>
              <a href="tel:+903121234567" className="text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-2">
                <Phone size={18} />
                +90 (312) 123 45 67
              </a>
              <Link
                to={getPath(currentLang, 'contact')}
                onClick={closeMobileMenu}
                className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition-colors text-left"
              >
                {t.nav.contact}
              </Link>
              
              {/* Mobile Language Selector */}
              <div className="border-t border-slate-200 pt-4 mt-2">
                <p className="text-sm text-slate-500 mb-2 px-2">Language / Dil</p>
                <div className="flex flex-col gap-2">
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`px-4 py-2 rounded-md text-left flex items-center gap-3 transition-colors ${
                        currentLang === lang 
                          ? 'bg-sky-500 text-white' 
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <FlagIcon lang={lang} />
                      <span className="text-sm">{languageNames[lang]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}