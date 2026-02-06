
import React from 'react';
import { Zap, Clock, UserPlus } from 'lucide-react';

const steps = [
  { icon: UserPlus, title: "Triage & Vitals", text: "Immediate assessment by senior nurses." },
  { icon: Zap, title: "Rapid Diagnostics", text: "Priority access to imaging and labs." },
  { icon: Clock, title: "Expert Care", text: "Specialist intervention within minutes." }
];

const EmergencySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B1E3C] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid gap-6">
            <div className="aspect-video bg-white/5 rounded-[40px] overflow-hidden border border-white/10">
              <img src="https://i.ibb.co/VYkFX1n0/image.jpg" className="w-full h-full object-cover opacity-80" alt="Surgery Theater" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-white/5 rounded-[40px] overflow-hidden border border-white/10">
                <img src="https://i.ibb.co/PvjMmm8T/image.jpg" className="w-full h-full object-cover opacity-80" alt="Intensive Care" />
              </div>
              <div className="bg-[#1E9C9D] rounded-[40px] p-8 flex flex-col justify-center">
                <h4 className="text-4xl font-bold mb-2">12s</h4>
                <p className="text-white/80 font-medium">Average triage time</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Trauma Center</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Every second counts. <br />
            Our protocol reflects it.
          </h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                  <step.icon className="text-[#1E9C9D]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-white/60 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
