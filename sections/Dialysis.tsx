
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CheckCircle2 } from 'lucide-react';

const DialysisSection: React.FC = () => {
  // Explicitly typing the ref for TypeScript compliance
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    // Safety check for current ref value
    if (!imgRef.current) return;
    
    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      scale: 1.1
    });
  }, []);

  return (
    <section id="dialysis" className="py-24 bg-[#F6F8FA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#1E9C9D] font-bold text-sm uppercase tracking-widest block mb-4">Nephrology Excellence</span>
          <h2 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold leading-tight mb-6">
            Advanced dialysis. <br />
            Human support.
          </h2>
          <p className="text-[#6B7A8F] text-lg mb-8 leading-relaxed">
            Our center provides personalized hemodialysis sessions using German technology, managed by top nephrologists in Bihar. We focus on patient comfort, emotional support, and hygiene.
          </p>
          
          <div className="space-y-4 mb-10">
            {['24/7 Specialist Availability', 'Advanced RO Water Systems', 'In-session Nutrition Support', 'Strict Sterilization Protocols'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#1E9C9D]" size={22} />
                <span className="text-[#0B1E3C] font-semibold">{feature}</span>
              </div>
            ))}
          </div>

          <a href="#appointments" className="btn-primary px-8 py-4 rounded-xl inline-block font-bold">
            Book a consultation
          </a>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-gray-200">
            <img
              ref={imgRef}
              src="https://i.ibb.co/0yrdtfSF/image.jpg"
              alt="Dialysis Center"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-[250px]">
            <h4 className="text-[#0B1E3C] font-bold text-2xl mb-1">98%</h4>
            <p className="text-[#6B7A8F] text-sm font-medium">Patient satisfaction rate in chronic care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DialysisSection;
