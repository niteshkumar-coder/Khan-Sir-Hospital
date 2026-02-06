
import React, { useEffect } from 'react';
import { Phone, ArrowRight, Calendar, ArrowLeft, Mail, MapPin, Clock } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
  onBookClick: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack, onBookClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F8FA] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#1E9C9D] font-bold mb-10 hover:gap-3 transition-all group"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="h-[500px] rounded-[40px] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://i.ibb.co/PvjMmm8T/image.jpg" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Patient Consultation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3C]/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1E9C9D] text-white rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#6B7A8F] uppercase tracking-widest">Emergency Line</p>
                      <p className="text-xl font-bold text-[#0B1E3C]">+91 62002 88285</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-16 border border-gray-100 relative shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E9C9D]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Patient Care</span>
              <h1 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready for your <br /> consultation?</h1>
              <p className="text-[#6B7A8F] text-lg mb-10 leading-relaxed font-medium">
                Our scheduling process is simple and transparent. Join thousands of patients who trust Khan Sir Hospital for dedicated medical expertise and compassionate recovery.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center text-[#1E9C9D]">
                    <Calendar size={20} />
                  </div>
                  <p className="text-[#0B1E3C] font-semibold">Priority slots for surgical consults</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center text-[#1E9C9D]">
                    <ArrowRight size={20} />
                  </div>
                  <p className="text-[#0B1E3C] font-semibold">No wait-time for registered patients</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center text-[#1E9C9D]">
                    <MapPin size={20} />
                  </div>
                  <p className="text-[#0B1E3C] font-semibold">Ashok Rajpath, Near West Gandhi Maidan, Patna</p>
                </div>
              </div>

              <button 
                onClick={onBookClick}
                className="w-full btn-primary py-6 rounded-[24px] font-bold text-xl shadow-2xl shadow-[#1E9C9D]/30 active:scale-95 transition-all flex items-center justify-center gap-4 group"
              >
                Start Booking Now
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#1E9C9D]/10 text-[#1E9C9D] rounded-full flex items-center justify-center mb-6">
              <Mail size={28} />
            </div>
            <h4 className="text-[#0B1E3C] font-bold text-xl mb-2">Email Us</h4>
            <p className="text-[#6B7A8F] text-sm mb-4">For general inquiries and reports</p>
            <p className="text-[#1E9C9D] font-bold">info@khansirhospital.in</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#1E9C9D]/10 text-[#1E9C9D] rounded-full flex items-center justify-center mb-6">
              <Phone size={28} />
            </div>
            <h4 className="text-[#0B1E3C] font-bold text-xl mb-2">Call Us</h4>
            <p className="text-[#6B7A8F] text-sm mb-4">24/7 Helpline & Appointments</p>
            <p className="text-[#1E9C9D] font-bold">+91 62002 88285</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#1E9C9D]/10 text-[#1E9C9D] rounded-full flex items-center justify-center mb-6">
              <Clock size={28} />
            </div>
            <h4 className="text-[#0B1E3C] font-bold text-xl mb-2">Working Hours</h4>
            <p className="text-[#6B7A8F] text-sm mb-4">OPD and Diagnostics</p>
            <p className="text-[#1E9C9D] font-bold">9:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
