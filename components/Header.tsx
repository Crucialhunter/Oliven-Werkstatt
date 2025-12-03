import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.workshops, path: '/workshops' },
    { name: t.nav.varieties, path: '/varieties' },
    { name: t.nav.knowledge, path: '/knowledge' },
    { name: t.nav.recipes, path: '/recipes' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
          <div className="bg-olive-600 text-white p-2 rounded-full transition-transform group-hover:rotate-12">
            <Droplet size={20} fill="currentColor" />
          </div>
          <span className="font-serif text-2xl font-bold text-olive-900 tracking-tight">
            Oliven Werkstatt
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-olive-600 ${
                location.pathname === link.path ? 'text-olive-700 underline underline-offset-4 decoration-2' : 'text-stone-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Language Switcher Desktop */}
        <div className="hidden lg:flex items-center gap-1 bg-olive-100 rounded-full p-1">
          {Object.values(Language).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                language === lang ? 'bg-olive-600 text-white shadow-sm' : 'text-olive-800 hover:bg-olive-200'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-olive-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-olive-100 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`text-lg font-medium text-center py-2 ${
                location.pathname === link.path ? 'text-olive-700' : 'text-stone-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
            {Object.values(Language).map((lang) => (
              <button
                key={lang}
                onClick={() => { setLanguage(lang); closeMenu(); }}
                className={`px-4 py-2 text-sm font-bold rounded-full border ${
                  language === lang ? 'bg-olive-600 text-white border-olive-600' : 'text-olive-700 border-olive-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;