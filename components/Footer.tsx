import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Droplet, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-olive-900 text-olive-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Droplet className="text-olive-300" fill="currentColor" />
              <span className="font-serif text-xl font-bold text-white">Oliven Werkstatt</span>
            </div>
            <p className="text-olive-200 max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Menu</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/workshops" className="hover:text-white transition-colors">{t.nav.workshops}</Link></li>
              <li><Link to="/varieties" className="hover:text-white transition-colors">{t.nav.varieties}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact Info (Static for now) */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Location</h4>
            <p className="mb-2">Granada, España</p>
            <p className="mb-2">Mallorca, España</p>
            <a href="mailto:hola@olivenwerkstatt.com" className="hover:text-white underline">hola@olivenwerkstatt.com</a>
          </div>
        </div>

        <div className="border-t border-olive-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-olive-400">
          <p>&copy; {new Date().getFullYear()} Oliven Werkstatt.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t.footer.legal}</a>
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;