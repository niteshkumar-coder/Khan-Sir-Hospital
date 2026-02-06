
import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Phone, Stethoscope, Calendar, MessageSquare, CheckCircle, Send } from 'lucide-react';

interface AppointmentPageProps {
  onBack: () => void;
}

const AppointmentPage: React.FC<AppointmentPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: '',
    date: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send data to a backend
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-[#1E9C9D] text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#1E9C9D]/20">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-[#0B1E3C] text-3xl font-bold mb-4">Appointment Requested!</h2>
          <p className="text-[#6B7A8F] text-lg mb-10 leading-relaxed">
            Thank you, <span className="text-[#0B1E3C] font-bold">{formData.name}</span>. 
            Our coordinator will call you shortly on <span className="text-[#0B1E3C] font-bold">{formData.phone}</span> to confirm your visit.
          </p>
          <button 
            onClick={onBack}
            className="w-full btn-primary py-4 rounded-2xl font-bold text-lg"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F8FA] pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#1E9C9D] font-bold mb-10 hover:gap-3 transition-all group"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-gray-200 border border-gray-100">
          <div className="mb-10">
            <h1 className="text-[#0B1E3C] text-3xl md:text-4xl font-bold mb-3">Book Appointment</h1>
            <p className="text-[#6B7A8F]">Please provide your details below and we'll secure your consultation slot.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-[#0B1E3C] font-bold text-sm block ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-[#1E9C9D] focus:bg-white transition-all outline-none"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <label className="text-[#0B1E3C] font-bold text-sm block ml-1">Mobile Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  required
                  type="tel"
                  placeholder="+91 9XXXXXXXXX"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-[#1E9C9D] focus:bg-white transition-all outline-none"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            {/* Department */}
            <div className="space-y-2">
              <label className="text-[#0B1E3C] font-bold text-sm block ml-1">Department</label>
              <div className="relative">
                <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-[#1E9C9D] focus:bg-white transition-all outline-none appearance-none"
                  value={formData.department}
                  onChange={e => setFormData({...formData, department: e.target.value})}
                >
                  <option value="">Select Department</option>
                  <option value="General Medicine">General Medicine</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Dialysis">Dialysis Center</option>
                </select>
              </div>
            </div>

            {/* Preferred Date */}
            <div className="space-y-2">
              <label className="text-[#0B1E3C] font-bold text-sm block ml-1">Preferred Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  required
                  type="date"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-[#1E9C9D] focus:bg-white transition-all outline-none"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="text-[#0B1E3C] font-bold text-sm block ml-1">Notes / symptoms (optional)</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 text-gray-400" size={20} />
                <textarea
                  placeholder="Brief description of symptoms"
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-[#1E9C9D] focus:bg-white transition-all outline-none resize-none"
                  value={formData.notes}
                  onChange={e => setFormData({...formData, notes: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full btn-primary py-5 rounded-2xl font-bold text-lg shadow-xl shadow-[#1E9C9D]/20 active:scale-95 transition-all flex items-center justify-center gap-3 mt-4"
            >
              Confirm Appointment <Send size={20} />
            </button>
          </form>

          <p className="text-[11px] text-[#6B7A8F] mt-8 text-center bg-gray-50 p-4 rounded-xl leading-relaxed">
            By clicking Confirm Appointment, you agree to our patient guide terms. Your data is handled with strict confidentiality as per hospital protocols.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
