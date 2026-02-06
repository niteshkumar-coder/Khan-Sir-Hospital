
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, HeartPulse } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const root = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });

      gsap.from(cardRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out"
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 scale-110">
        <img
          src="https://i.ibb.co/chX05LBB/image.jpg"
          alt="Khan Sir Hospital Diagnostics Facility"
          className="w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3C]/90 via-[#0B1E3C]/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#1E9C9D]/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#1E9C9D]/30 mb-6">
            <HeartPulse className="text-[#1E9C9D]" size={14} />
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">Healthcare with Compassion</span>
          </div>
          <h1 ref={titleRef} className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
            State-of-the-art <br />
            <span className="text-[#1E9C9D]">Converging Care.</span>
          </h1>
          <p className="text-white/80 text-base mb-8 leading-relaxed max-w-md">
            A multi-specialty center where advanced technology and compassionate care meet to serve the people of Bihar.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onBookClick} 
              className="btn-primary px-6 py-3 rounded-xl flex items-center gap-2 font-bold text-base group"
            >
              Book Appointment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#services" className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-sm hover:bg-white/20 transition-all">
              Our Services
            </a>
          </div>
        </div>

        <div ref={cardRef} className="hidden lg:block">
          <div className="bg-white rounded-[32px] p-8 shadow-2xl dot-pattern relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[#1E9C9D] font-bold text-[10px] uppercase tracking-widest block mb-3">The Vision</span>
              <h3 className="text-[#0B1E3C] text-2xl font-bold mb-3">Patient-First Excellence</h3>
              <p className="text-[#6B7A8F] text-sm leading-relaxed mb-6">
                "Quality healthcare is a right, not a privilege." Our facility is designed for transparency, hygiene, and affordability for every visitor.
              </p>
              <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[#1E9C9D] text-xl font-bold">₹7</p>
                  <p className="text-[#6B7A8F] text-[10px] font-bold uppercase tracking-tight">Blood Tests</p>
                </div>
                <div>
                  <p className="text-[#1E9C9D] text-xl font-bold">₹25</p>
                  <p className="text-[#6B7A8F] text-[10px] font-bold uppercase tracking-tight">ECG Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
