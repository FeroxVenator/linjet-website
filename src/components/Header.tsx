import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/754012f2dd1634659ec146627a703a7401bb4b59.png';
import { PageType } from '../App';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
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
          {/* Logo */}
          <button onClick={() => navigateTo('home')} className="flex-shrink-0">
            <img src={logo} alt="LinJet" className="h-16 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateTo('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`transition-colors ${
                currentPage === 'about' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Hakkımızda
            </button>
            <button
              onClick={() => navigateTo('platforms')}
              className={`transition-colors ${
                currentPage === 'platforms' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Uçak Platformları
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition-colors"
            >
              İletişim
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => navigateTo('home')}
                className={`transition-colors text-left ${
                  currentPage === 'home' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => navigateTo('about')}
                className={`transition-colors text-left ${
                  currentPage === 'about' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Hakkımızda
              </button>
              <button
                onClick={() => navigateTo('platforms')}
                className={`transition-colors text-left ${
                  currentPage === 'platforms' ? 'text-sky-500' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Uçak Platformları
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition-colors text-left"
              >
                İletişim
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}