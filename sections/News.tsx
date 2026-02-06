
import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const news = [
  {
    tag: 'Service',
    title: 'Educator Khan Sir opens low-cost hospital in Patna',
    date: 'Aug 10, 2025',
    img: 'https://medicalbuyer.co.in/wp-content/uploads/2026/01/Educator-Khan-Sir-opens-low-cost-hospital-in-Patna.jpg'
  },
  {
    tag: 'Care',
    title: 'Advanced Neonatal ICU Wing Updates',
    date: 'Aug 05, 2025',
    img: 'https://ik.imagekit.io/d7t01fhx2/Ovum_Hospitals/specialities/nicu-new/Top-Tier-Neonatal-Intensive-Care-Unit-Hospital-In-Bangalore.jpg?updatedAt=1706091173962'
  },
  {
    tag: 'Facility',
    title: 'New High-Tech Diagnostic Center',
    date: 'Jul 28, 2025',
    img: 'https://www.northumbria.nhs.uk/application/files/thumbnails/xs/2316/5183/0820/New-CT-scanner-at-NTGH-1-1920x1440.jpg'
  }
];

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-[#F6F8FA] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Inside the hospital</span>
            <h2 className="text-[#0B1E3C] text-4xl font-bold">Latest Updates</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#1E9C9D] font-bold hover:underline">
            View Newsroom <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={item.img} 
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur shadow text-[#1E9C9D] font-bold text-xs rounded-full uppercase">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar size={14} /> {item.date}
              </div>
              <h4 className="text-[#0B1E3C] text-xl font-bold group-hover:text-[#1E9C9D] transition-colors line-clamp-2">
                {item.title}
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
