import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import logo from 'figma:asset/754012f2dd1634659ec146627a703a7401bb4b59.png';
import { PageType } from '../App';
import { Translations } from '../translations';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  onLanguageChange?: () => void;
  t: Translations;
}

export function Header({ currentPage, setCurrentPage, onLanguageChange, t }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <button
              onClick={() => navigateTo('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`transition-colors ${
                currentPage === 'about' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => navigateTo('services')}
              className={`transition-colors ${
                currentPage === 'services' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => navigateTo('booking')}
              className={`transition-colors ${
                currentPage === 'booking' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {t.nav.booking}
            </button>
          </nav>

          {/* Logo - Center */}
          <button onClick={() => navigateTo('home')} className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <img src={logo} alt="LinJet" className="h-16 w-auto" />
          </button>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="tel:+903121234567" className="text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-2">
              <Phone size={18} />
              +90 (312) 123 45 67
            </a>
            <button
              onClick={() => navigateTo('contact')}
              className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition-colors"
            >
              {t.nav.contact}
            </button>
            {onLanguageChange && (
              <button
                onClick={onLanguageChange}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors flex items-center gap-2"
                title="Change Language"
              >
                <Globe size={20} />
              </button>
            )}
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
              <button
                onClick={() => navigateTo('home')}
                className={`transition-colors text-left ${
                  currentPage === 'home' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => navigateTo('about')}
                className={`transition-colors text-left ${
                  currentPage === 'about' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => navigateTo('services')}
                className={`transition-colors text-left ${
                  currentPage === 'services' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => navigateTo('booking')}
                className={`transition-colors text-left ${
                  currentPage === 'booking' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {t.nav.booking}
              </button>
              <a href="tel:+903121234567" className="text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-2">
                <Phone size={18} />
                +90 (312) 123 45 67
              </a>
              <button
                onClick={() => navigateTo('contact')}
                className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition-colors text-left"
              >
                {t.nav.contact}
              </button>
              {onLanguageChange && (
                <button
                  onClick={onLanguageChange}
                  className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors text-left flex items-center gap-2"
                >
                  <Globe size={20} />
                  Change Language
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}