
import React from 'react';
import { Briefcase, Users, Send, FileText } from 'lucide-react';

const positions = [
  { role: "Medical Staff", desc: "Nurses, Lab Technicians, and Dialysis Technicians." },
  { role: "Administrative", desc: "HR Manager, HR Recruiter, and Administrative Staff." }
];

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-[#0B1E3C] rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E9C9D] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-[#1E9C9D]" /> Recruitment Process
            </h3>
            
            <div className="space-y-8 relative z-10">
              {positions.map((pos, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                    <Users className="text-[#1E9C9D]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{pos.role}</h4>
                    <p className="text-white/60 leading-relaxed">{pos.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-white/80 mb-6 text-sm italic">
                Interested candidates can contact our HR department or submit their resume online.
              </p>
              <a 
                href="mailto:info@khansirhospital.in" 
                className="inline-flex items-center gap-3 bg-[#1E9C9D] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#168a8b] transition-all"
              >
                <FileText size={20} /> Submit Resume
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Work with us</span>
          <h2 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold leading-tight mb-8">
            Build your career <br /> in healthcare.
          </h2>
          <p className="text-[#6B7A8F] text-lg mb-8 leading-relaxed">
            Khan Sir Hospital offers various opportunities for professionals interested in contributing to the healthcare sector in Patna. Join our mission-driven team.
          </p>
          
          <div className="grid gap-6">
            <div className="flex items-center gap-4 bg-[#F6F8FA] p-6 rounded-2xl">
              <div className="w-10 h-10 bg-[#1E9C9D] text-white rounded-full flex items-center justify-center shrink-0">
                <Send size={18} />
              </div>
              <p className="text-[#0B1E3C] font-bold">Contact HR: info@khansirhospital.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
