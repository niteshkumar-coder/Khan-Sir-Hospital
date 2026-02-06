
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  onBookClick: () => void;
  onDoctorsClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onBookClick, onDoctorsClick, onServicesClick, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'OPD Info', href: '#opd' },
    { label: 'Careers', href: '#careers' },
    { label: 'Appointments', href: '#appointments' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#appointments') {
      e.preventDefault();
      onBookClick();
      setMobileMenuOpen(false);
      return;
    }
    if (href === '#doctors') {
      e.preventDefault();
      onDoctorsClick();
      setMobileMenuOpen(false);
      return;
    }
    if (href === '#services') {
      e.preventDefault();
      onServicesClick();
      setMobileMenuOpen(false);
      return;
    }
    if (href === '#contact') {
      e.preventDefault();
      onContactClick();
      setMobileMenuOpen(false);
      return;
    }
    if (href.startsWith('#')) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className={`${isScrolled ? 'h-8' : 'h-10 md:h-12'} w-auto transition-all duration-500`}>
            <img 
              src="https://i.ibb.co/qY2vQPQD/image.png" 
              alt="Khan Sir Hospital Logo" 
              className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className={`font-bold text-base md:text-lg leading-none transition-colors ${isScrolled ? 'text-[#0B1E3C]' : 'text-white'}`}>
              Khan Sir
            </span>
            <span className={`font-light text-[10px] md:text-xs leading-none transition-colors ${isScrolled ? 'text-[#0B1E3C]' : 'text-white/90'}`}>
              Hospital
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#1E9C9D] ${
                isScrolled ? 'text-[#0B1E3C]' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onBookClick}
            className="px-6 py-2 rounded-full bg-[#1E9C9D] text-white text-xs font-bold hover:bg-[#168a8b] transition-all shadow-md active:scale-95 uppercase tracking-widest"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-[#0B1E3C]' : 'text-white'}`}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="p-6 space-y-4">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-lg font-bold text-[#0B1E3C] hover:text-[#1E9C9D]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <a href="tel:+916200288285" className="flex items-center gap-3 text-[#1E9C9D] font-bold text-lg mb-4">
                <Phone size={20} /> Emergency: +91 62002 88285
              </a>
              <button
                onClick={onBookClick}
                className="block w-full text-center px-6 py-4 rounded-xl bg-[#1E9C9D] text-white font-bold"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
