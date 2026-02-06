
import React, { useEffect } from 'react';
import { Stethoscope, Award, Info, ArrowLeft } from 'lucide-react';

interface DoctorsPageProps {
  onBack: () => void;
  onBookClick: () => void;
}

const doctors = [
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
  },
  {
    name: "Dr. Amit Sharma",
    role: "Orthopedic Surgeon",
    specialization: "Joint & Bone Care",
    exp: "15 Years",
    img: "https://i.ibb.co/B2WcK9Wj/image.jpg",
    bio: "Expert in trauma orthopedics and minimally invasive joint surgeries.",
    affiliations: ["Member of Orthopedic Association", "Sports Injury Specialist"]
  },
  {
    name: "Dr. Rehana Khan",
    role: "Senior Gynecologist",
    specialization: "Women's Health",
    exp: "15+ Years",
    img: "https://i.ibb.co/B2WcK9Wj/image.jpg",
    bio: "Dedicated to comprehensive women's health and complex obstetric care.",
    affiliations: ["Expert in High-Risk Pregnancy", "Women's Health Advocate"]
  },
  {
    name: "Dr. Sameer Kumar",
    role: "Senior Physician",
    specialization: "Diabetes & Hypertension",
    exp: "12 Years",
    img: "https://i.ibb.co/B2WcK9Wj/image.jpg",
    bio: "Focuses on chronic disease management and lifestyle-based recovery protocols.",
    affiliations: ["Diabetes Management Expert", "Internal Medicine Specialist"]
  }
];

const DoctorsPage: React.FC<DoctorsPageProps> = ({ onBack, onBookClick }) => {
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

        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Find a Doctor</span>
          <h1 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold leading-tight mb-4">Expert Team</h1>
          <p className="text-[#6B7A8F] text-lg">We provide a comprehensive list of specialists to ensure you receive the right care for your needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <div key={i} className="group bg-white rounded-[32px] overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#1E9C9D]/30">
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
                    <p className="text-[#6B7A8F] text-sm leading-relaxed italic">
                      "{doc.bio}"
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-2 text-[#0B1E3C] text-xs font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl shadow-sm border border-gray-100">
                      <Stethoscope size={14} className="text-[#1E9C9D]" /> {doc.exp} Experience
                    </span>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h5 className="flex items-center gap-1.5 text-[#0B1E3C] font-bold text-xs mb-3">
                      <Award size={16} className="text-[#1E9C9D]" /> Expertise
                    </h5>
                    <ul className="space-y-2">
                      {doc.affiliations.map((aff, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[#6B7A8F] text-xs leading-tight">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1E9C9D] mt-1 shrink-0" />
                          {aff}
                        </li>
                      ))}
                    </ul>
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
    </div>
  );
};

export default DoctorsPage;
