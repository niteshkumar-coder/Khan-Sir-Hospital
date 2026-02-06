
import React from 'react';
import { Droplet, Search, ShieldCheck } from 'lucide-react';

const BloodBankSection: React.FC = () => {
  return (
    <section id="bloodbank" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Life Saving</span>
          <h2 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold leading-tight mb-6">
            Safe blood supply <br /> for Bihar.
          </h2>
          <p className="text-[#6B7A8F] text-lg mb-8 leading-relaxed">
            Our 24/7 Blood Bank follows international standards for component separation and safety testing. We maintain a robust stock for emergencies, surgeries, and dialysis patients.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: ShieldCheck, label: "FDA Certified" },
              { icon: Search, label: "Strict Screening" },
              { icon: Droplet, label: "All Groups Ready" }
            ].map((item, i) => (
              <div key={i} className="bg-[#F6F8FA] p-6 rounded-3xl text-center border border-gray-100 group hover:bg-white hover:shadow-lg transition-all duration-300">
                <item.icon className="text-[#1E9C9D] mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                <p className="text-[#0B1E3C] font-bold text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary px-8 py-4 rounded-xl font-bold">Donate Now</button>
            <button className="px-8 py-4 rounded-xl text-[#0B1E3C] font-bold border border-gray-200 hover:bg-gray-50">Request Units</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6 pt-12">
            <img src="https://www.breachcandyhospital.org/sites/default/files/123123-compressed_0.jpg" className="w-full rounded-[40px] shadow-lg object-cover aspect-[4/5]" alt="Blood Analysis Lab" />
            <div className="bg-[#EAF6F6] p-8 rounded-[40px] border border-[#1E9C9D]/10">
              <h4 className="text-[#1E9C9D] font-bold text-3xl mb-1">2k+</h4>
              <p className="text-[#0B1E3C] text-sm font-semibold">Active Donors</p>
            </div>
          </div>
          <div className="space-y-6">
             <div className="bg-[#0B1E3C] p-8 rounded-[40px]">
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">Availability</p>
              <h4 className="text-white font-bold text-xl leading-snug">Real-time inventory for rare groups.</h4>
            </div>
            <img src="https://www.breachcandyhospital.org/sites/default/files/17-compressed.jpg" className="w-full rounded-[40px] shadow-lg object-cover aspect-[4/5]" alt="Inpatient Ward" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodBankSection;
