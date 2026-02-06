
import React from 'react';
import { Heart, Globe, Users } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#EAF6F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Our Mission</span>
          <h2 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold leading-tight mb-6">
            Healthcare beyond the <br /> hospital walls.
          </h2>
          <p className="text-[#6B7A8F] text-lg mb-10 leading-relaxed">
            Khan Sir Hospital is more than a building—it's a commitment to the people of Bihar. We actively conduct health awareness drives and subsidized treatment camps for rural communities.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-bold text-[#1E9C9D] mb-1">100+</h4>
              <p className="text-[#0B1E3C] font-semibold text-sm">Rural Health Camps</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-[#1E9C9D] mb-1">50k+</h4>
              <p className="text-[#0B1E3C] font-semibold text-sm">Lives Impacted</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="flex gap-4 items-end">
            <div className="flex-1 bg-white p-8 rounded-[40px] shadow-sm">
              <Heart className="text-red-500 mb-4" size={32} />
              <h4 className="text-[#0B1E3C] font-bold mb-2">Charity Care</h4>
              <p className="text-[#6B7A8F] text-sm">Providing aid to those who cannot afford critical life-saving treatments.</p>
            </div>
            <div className="flex-1 aspect-[4/5] rounded-[40px] overflow-hidden">
               <img src="https://www.breachcandyhospital.org/sites/default/files/17-compressed.jpg" className="w-full h-full object-cover" alt="Patient Ward" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 aspect-video rounded-[40px] overflow-hidden">
               <img src="https://medicalbuyer.co.in/wp-content/uploads/2023/05/Health-officials-to-inspect-Tamil-Nadu-govt-hospitals-from-Apr-10.jpg" className="w-full h-full object-cover" alt="Hospital Inspection" />
            </div>
            <div className="flex-1 bg-[#0B1E3C] p-8 rounded-[40px] text-white">
              <Users className="text-[#1E9C9D] mb-4" size={32} />
              <h4 className="font-bold mb-2">Volunteer</h4>
              <p className="text-white/60 text-sm">Join our medical student and professional volunteer network.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
