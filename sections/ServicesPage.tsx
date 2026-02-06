
import React, { useEffect } from 'react';
import { Activity, Droplets, HeartPulse, Scan, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';

interface ServicesPageProps {
  onBack: () => void;
  onBookClick: () => void;
}

const services = [
  { 
    icon: Droplets, 
    title: "Dialysis Center", 
    desc: "Advanced imported machines with medical-grade anti-infection mats for supreme hygiene.",
    details: "Our flagship department focusing on infection control and patient safety with German technology."
  },
  { 
    icon: Activity, 
    title: "Emergency Care", 
    desc: "24/7 Trauma unit with ICU backup and ALS ambulance response teams.",
    details: "Rapid intervention for critically ill patients around the clock with skilled medical staff."
  },
  { 
    icon: HeartPulse, 
    title: "Blood Bank", 
    desc: "Safe donations and emergency units available 24/7 with strict screening.",
    details: "International standard component separation and storage for all blood types."
  },
  { 
    icon: Scan, 
    title: "Modern Laboratory", 
    desc: "Diagnostic excellence starting at ₹7 for blood tests and ₹25 for ECGs.",
    details: "High-end imaging and automated testing for accurate results at affordable prices."
  }
];

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack, onBookClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F8FA] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#1E9C9D] font-bold mb-10 hover:gap-3 transition-all group"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl text-left">
            <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">What we do</span>
            <h1 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold leading-tight">
              State-of-the-art care <br /> converged.
            </h1>
          </div>
          <p className="text-[#6B7A8F] text-lg max-w-md text-left md:text-right">
            Khan Sir Hospital operates as a multi-specialty center where modern technology and compassionate care meet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-[32px] bg-white border border-transparent hover:border-[#1E9C9D]/20 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-[#1E9C9D]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1E9C9D] group-hover:text-white transition-colors duration-500">
                <item.icon size={28} />
              </div>
              <h4 className="text-[#0B1E3C] text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-[#6B7A8F] text-sm leading-relaxed mb-4 font-bold">{item.desc}</p>
              <p className="text-[#6B7A8F] text-xs leading-relaxed mb-8">{item.details}</p>
              <button 
                onClick={onBookClick}
                className="flex items-center text-[#1E9C9D] font-bold text-sm group-hover:translate-x-1 transition-transform"
              >
                Book Service <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-[#0B1E3C] rounded-[48px] p-12 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E9C9D]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex-1 z-10">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-[#1E9C9D]" />
              <span className="text-[#1E9C9D] font-bold uppercase tracking-widest text-xs">Hygiene Technology</span>
            </div>
            <h3 className="text-white text-3xl font-bold mb-4">Advanced Dialysis Unit</h3>
            <p className="text-white/60 mb-8 max-w-lg leading-relaxed">
              Our dialysis unit is a benchmark in safety and hygiene for the state of Bihar. We use imported machines and a specialized medical-grade anti-infection environment to prevent cross-contamination, ensuring every patient receives safe and world-class treatment.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={onBookClick} className="btn-primary px-8 py-4 rounded-xl font-bold">
                Book Dialysis Slot
              </button>
              <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-1/3 aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 group">
            <img 
              src="https://i.ibb.co/27Shzcqb/image.jpg" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              alt="Hospital Facility"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
