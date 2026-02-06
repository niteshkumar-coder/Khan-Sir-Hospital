
import React from 'react';
import { MapPin, Map as MapIcon, Compass } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#0B1E3C] rounded-[48px] p-8 md:p-20 grid lg:grid-cols-5 gap-16 items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full dot-pattern opacity-10" />
          
          <div className="lg:col-span-2 relative z-10">
            <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Visit Us</span>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-8">
              Centrally located. <br />
              Easily accessible.
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#1E9C9D]/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-[#1E9C9D]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Our Address</h4>
                  <p className="text-white/60">Gulab Bagh Market, Ashok Rajpath, Patna, Bihar</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#1E9C9D]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Compass className="text-[#1E9C9D]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Getting Here</h4>
                  <p className="text-white/60">Convenient parking in the basement and along the main market road.</p>
                </div>
              </div>
            </div>

            <button className="btn-primary mt-12 px-10 py-4 rounded-xl flex items-center gap-3 font-bold group">
              <MapIcon size={20} /> Open in Google Maps
            </button>
          </div>

          <div className="lg:col-span-3 relative z-10 h-full min-h-[400px]">
            <div className="w-full h-full bg-white/5 rounded-[40px] border border-white/10 overflow-hidden group">
              <img 
                src="https://i.ibb.co/KzKR2kjz/image.jpg" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                alt="Hospital Exterior"
              />
              <div className="absolute inset-0 bg-[#1E9C9D]/10 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-16 h-16 bg-[#1E9C9D] rounded-full animate-ping opacity-25 absolute top-0 left-0" />
                  <div className="w-16 h-16 bg-[#1E9C9D] rounded-full shadow-2xl flex items-center justify-center border-4 border-white">
                    <MapPin className="text-white" size={28} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
