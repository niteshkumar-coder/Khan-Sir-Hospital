
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface ContactSectionProps {
  onPrivacyClick: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onPrivacyClick }) => {
  return (
    <footer id="contact" className="bg-[#0B1E3C] text-white pt-24 pb-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex flex-col gap-4 mb-8">
            <div className="h-12 md:h-14 w-auto overflow-hidden">
              <img 
                src="https://i.ibb.co/qY2vQPQD/image.png" 
                alt="Khan Sir Hospital Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Khan Sir Hospital</h3>
              <p className="text-[#1E9C9D] text-xs font-bold">Healthcare with Heart</p>
            </div>
          </div>
          <p className="text-white/60 mb-8 leading-relaxed text-sm">
            Leading healthcare through innovation, compassion, and community-focused medical services in the heart of Patna.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#1E9C9D] hover:border-[#1E9C9D] transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-8 border-b border-[#1E9C9D]/30 pb-2">Quick Links</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            {['Services', 'Find a Doctor', 'Dialysis Center', 'Emergency Care', 'Careers'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-[#1E9C9D] transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-8 border-b border-[#1E9C9D]/30 pb-2">Information</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            {['OPD Timings', 'Consultation Fees', 'Recruitment', 'Visitor Rules', 'Price List'].map(link => (
              <li key={link}><a href="#" className="hover:text-[#1E9C9D] transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-8 border-b border-[#1E9C9D]/30 pb-2">Contact Details</h4>
          <ul className="space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="text-[#1E9C9D] shrink-0" size={20} />
              <span className="text-white/60">Gulab Bagh Market, Ashok Rajpath, Near West Gandhi Maidan, Patna 800004</span>
            </li>
            <li className="flex gap-4">
              <Phone className="text-[#1E9C9D] shrink-0" size={20} />
              <div className="text-white/60">
                <p className="text-white font-bold mb-1">Emergency: +91 62002 88285</p>
                <p>OPD Timings: 9:00 AM - 8:00 PM</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="text-[#1E9C9D] shrink-0" size={20} />
              <span className="text-white/60">info@khansirhospital.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Khan Sir Hospital. Unofficial Patient Guide.
        </p>
        <div className="flex gap-8 text-xs text-white/30">
          <button onClick={onPrivacyClick} className="hover:text-white transition-colors">Privacy Policy</button>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">Printable Price List</a>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
