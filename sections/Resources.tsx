
import React from 'react';
import { Download, FileText, Landmark, Info } from 'lucide-react';

const resources = [
  { icon: Info, title: "Visitor Guidelines", desc: "Understand visiting hours and hospital code of conduct.", file: "PDF 1.2MB" },
  { icon: Landmark, title: "Insurance & Billing", desc: "List of TPA partners and payment options.", file: "PDF 0.8MB" },
  { icon: FileText, title: "Online Reports Guide", desc: "Step-by-step instructions to access your results online.", file: "PDF 1.5MB" }
];

const ResourcesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F6F8FA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Patient Portal</span>
          <h2 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold mb-4">Guides & Downloads</h2>
          <p className="text-[#6B7A8F] text-lg max-w-2xl mx-auto">Everything you need to prepare for your visit or manage your health records efficiently.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#EAF6F6] rounded-bl-[64px] -z-0 opacity-50 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#F6F8FA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1E9C9D] group-hover:text-white transition-colors">
                  <res.icon size={30} />
                </div>
                <h4 className="text-[#0B1E3C] text-2xl font-bold mb-3">{res.title}</h4>
                <p className="text-[#6B7A8F] mb-10 leading-relaxed">{res.desc}</p>
                <button className="flex items-center gap-3 text-[#1E9C9D] font-bold">
                  <Download size={20} /> Download {res.file}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
