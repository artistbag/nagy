import React, { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { RoutePath } from '../types';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === RoutePath.HOME;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || !isHome ? 'bg-stone-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <RouterLink 
          to={RoutePath.HOME} 
          className={`text-2xl font-serif tracking-widest font-bold z-50 relative ${
            (isHome && !scrolled && !isOpen) ? 'text-white' : 'text-stone-800'
          }`}
        >
          NAGY STUDIO
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <RouterLink
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest hover:opacity-60 transition-colors uppercase ${
                (isHome && !scrolled) ? 'text-white/90 hover:text-white' : 'text-stone-600 hover:text-stone-900'
              } ${location.pathname === link.path ? 'opacity-100 font-medium border-b border-current pb-1' : ''}`}
            >
              {link.label}
            </RouterLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-stone-800" />
          ) : (
            <Menu className={`w-6 h-6 ${(isHome && !scrolled) ? 'text-white' : 'text-stone-800'}`} />
          )}
        </button>

        {/* Mobile Full Screen Menu */}
        <div
          className={`fixed inset-0 bg-stone-50 flex flex-col justify-center items-center space-y-8 transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <RouterLink
              key={link.path}
              to={link.path}
              className="text-2xl font-serif text-stone-800 hover:text-stone-500 transition-colors"
            >
              {link.label}
            </RouterLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;