
import React from 'react';
import { Stethoscope, Award, Info, ArrowRight } from 'lucide-react';

interface DoctorsSectionProps {
  onBookClick: () => void;
  onSeeAllClick: () => void;
}

const previewDoctors = [
  {
    name: "Dr. Khan Ahmed",
    role: "Founder & Chief Consultant",
    specialization: "General Surgery",
    exp: "20+ Years",
    img: "https://i.ibb.co/B2WcK9Wj/image.jpg",
    bio: "Visionary leader dedicated to accessible healthcare and surgical excellence in Bihar.",
    affiliations: ["Expert in Laparoscopic Procedures", "Pioneer in Local Health Initiatives"]
  },
  {
    name: "Dr. Rakesh Kumar",
    role: "Cardiologist",
    specialization: "Heart Care",
    exp: "12 Years",
    img: "https://i.ibb.co/B2WcK9Wj/image.jpg",
    bio: "Specialist in non-invasive cardiology and advanced cardiac diagnostics.",
    affiliations: ["Member of Cardiac Society of India", "Lead in Cardiac Emergency Protocols"]
  },
  {
    name: "Dr. Priya Singh",
    role: "Gynecologist/Pediatrician",
    specialization: "Mother & Child Care",
    exp: "10 Years",
    img: "https://i.ibb.co/B2WcK9Wj/image.jpg",
    bio: "Compassionate care for both mothers and children with a focus on preventive wellness.",
    affiliations: ["Child Nutrition Specialist", "Painless Delivery Expert"]
  }
];

const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onBookClick, onSeeAllClick }) => {
  return (
    <section id="doctors" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Find a Doctor</span>
            <h2 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold leading-tight">Expert Team</h2>
            <p className="text-[#6B7A8F] text-lg mt-4">We provide a comprehensive list of specialists to ensure you receive the right care for your needs.</p>
          </div>
          <button 
            onClick={onSeeAllClick}
            className="flex items-center gap-2 text-[#1E9C9D] font-bold text-lg hover:gap-3 transition-all group"
          >
            See All Specialists <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewDoctors.map((doc, i) => (
            <div key={i} className="group bg-[#F6F8FA] rounded-[32px] overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#1E9C9D]/30">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={doc.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={doc.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3C]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-white text-2xl font-bold">{doc.name}</h4>
                  <p className="text-[#1E9C9D] font-bold text-sm bg-white px-3 py-1 rounded-full inline-block mt-2 shadow-sm">{doc.role}</p>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <p className="text-[#1E9C9D] font-bold text-sm uppercase tracking-wider mb-1">{doc.specialization}</p>
                  <div className="flex gap-4 mt-4">
                    <Info className="text-[#1E9C9D] shrink-0" size={18} />
                    <p className="text-[#6B7A8F] text-sm leading-relaxed italic line-clamp-2">
                      "{doc.bio}"
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-2 text-[#0B1E3C] text-xs font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl shadow-sm border border-gray-100">
                      <Stethoscope size={14} className="text-[#1E9C9D]" /> {doc.exp} Experience
                    </span>
                  </div>
                </div>

                <button 
                  onClick={onBookClick}
                  className="mt-auto w-full btn-primary py-4 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E9C9D]/20 active:scale-95 transition-all"
                >
                  Book Priority Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
