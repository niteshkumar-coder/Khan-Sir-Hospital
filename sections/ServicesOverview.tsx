
import React from 'react';
import { Activity, Droplets, HeartPulse, Scan, ArrowRight, ShieldCheck } from 'lucide-react';

const services = [
  { 
    icon: Droplets, 
    title: "Dialysis Center", 
    desc: "Advanced imported machines with medical-grade anti-infection mats for supreme hygiene.",
    details: "Our flagship department focusing on infection control and patient safety."
  },
  { 
    icon: Activity, 
    title: "Emergency Care", 
    desc: "24/7 Trauma unit with ICU backup and ALS ambulance response teams.",
    details: "Rapid intervention for critically ill patients around the clock."
  },
  { 
    icon: HeartPulse, 
    title: "Blood Bank", 
    desc: "Safe donations and emergency units available 24/7 with strict screening.",
    details: "International standard component separation and storage."
  },
  { 
    icon: Scan, 
    title: "Modern Laboratory", 
    desc: "Diagnostic excellence starting at ₹7 for blood tests and ₹25 for ECGs.",
    details: "High-end imaging and automated testing for accurate results."
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">What we do</span>
            <h2 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold leading-tight">
              State-of-the-art care <br /> converged.
            </h2>
          </div>
          <p className="text-[#6B7A8F] text-lg max-w-md">
            Khan Sir Hospital operates as a multi-specialty center where modern technology and compassionate care meet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-[24px] bg-[#F6F8FA] border border-transparent hover:border-[#1E9C9D]/20 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#1E9C9D]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1E9C9D] group-hover:text-white transition-colors duration-500">
                <item.icon size={28} />
              </div>
              <h4 className="text-[#0B1E3C] text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-[#6B7A8F] text-sm leading-relaxed mb-4 font-bold">{item.desc}</p>
              <p className="text-[#6B7A8F] text-xs leading-relaxed mb-6">{item.details}</p>
              <div className="flex items-center text-[#1E9C9D] font-bold text-sm group-hover:translate-x-1 transition-transform">
                Read More <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#0B1E3C] rounded-[40px] p-12 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E9C9D]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex-1 z-10">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-[#1E9C9D]" />
              <span className="text-[#1E9C9D] font-bold uppercase tracking-widest text-xs">Hygiene Technology</span>
            </div>
            <h3 className="text-white text-3xl font-bold mb-4">Advanced Dialysis Unit</h3>
            <p className="text-white/60 mb-8 max-w-lg">
              Equipped with imported machines and medical-grade anti-infection mats, our dialysis unit is significantly safer and more hygienic than traditional facilities.
            </p>
            <button className="btn-primary px-8 py-3 rounded-xl font-bold">
              Explore Our Unit
            </button>
          </div>

          <div className="flex-shrink-0 w-full lg:w-1/3 aspect-video lg:aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 group">
            <img 
              src="https://slrhapi.rahejahospital.com//images/home-aboutus/right-img/home-about-side.jpg" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              alt="Hospital Interior"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
