
import React from 'react';
import { Clock, IndianRupee, MapPin } from 'lucide-react';

const opdData = [
  { dept: "General Medicine", fee: "₹400", timings: "Mon-Sat: 09:00 - 20:00" },
  { dept: "Pediatrics", fee: "₹400 - ₹450", timings: "Mon-Sat: 10:00 - 14:00" },
  { dept: "Orthopedics", fee: "₹450 - ₹500", timings: "Tue, Thu, Sat: 11:00 - 15:00" },
  { dept: "Gynecology", fee: "₹400 - ₹500", timings: "Mon-Sat: 10:00 - 17:00" },
  { dept: "Cardiology", fee: "₹500", timings: "Mon, Wed, Fri: 16:00 - 19:00" },
];

const OpdInfo: React.FC = () => {
  return (
    <section id="opd" className="py-24 bg-[#F6F8FA] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Visiting Us</span>
            <h2 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold leading-tight mb-8">
              OPD Timings & <br /> Consultation Fees
            </h2>
            <p className="text-[#6B7A8F] text-lg mb-10 leading-relaxed">
              We maintain transparent pricing for all consultations. Our OPD is operational throughout the week to ensure accessible healthcare for everyone.
            </p>
            
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1E9C9D]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-[#1E9C9D]" />
                </div>
                <div>
                  <h4 className="text-[#0B1E3C] font-bold text-lg">Emergency 24/7</h4>
                  <p className="text-[#6B7A8F] text-sm">Always available for trauma care.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1E9C9D]/10 rounded-xl flex items-center justify-center shrink-0">
                  <IndianRupee className="text-[#1E9C9D]" />
                </div>
                <div>
                  <h4 className="text-[#0B1E3C] font-bold text-lg">Affordable Lab</h4>
                  <p className="text-[#6B7A8F] text-sm">₹7 Blood Tests & ₹25 ECG available.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-gray-100">
              <table className="w-full text-left">
                <thead className="bg-[#0B1E3C] text-white">
                  <tr>
                    <th className="px-8 py-6 font-bold uppercase tracking-wider text-sm">Department</th>
                    <th className="px-8 py-6 font-bold uppercase tracking-wider text-sm">Consultation Fee</th>
                    <th className="px-8 py-6 font-bold uppercase tracking-wider text-sm">OPD Timings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {opdData.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 font-bold text-[#0B1E3C]">{row.dept}</td>
                      <td className="px-8 py-6 font-bold text-[#1E9C9D]">{row.fee}</td>
                      <td className="px-8 py-6 text-[#6B7A8F] text-sm font-medium">{row.timings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-12 flex items-center gap-4 p-6 bg-[#EAF6F6] rounded-2xl border border-[#1E9C9D]/20">
              <MapPin className="text-[#1E9C9D]" />
              <p className="text-[#0B1E3C] text-sm font-bold">
                Location: Gulab Bagh Market, Ashok Rajpath, Patna 800004
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpdInfo;
