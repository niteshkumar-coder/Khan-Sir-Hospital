
import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, EyeOff, Link as LinkIcon, Info, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#1E9C9D] font-bold mb-12 hover:gap-3 transition-all group"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="bg-[#F6F8FA] rounded-[40px] p-8 md:p-16 border border-gray-100">
          <header className="mb-12 border-b border-gray-200 pb-8">
            <h1 className="text-[#0B1E3C] text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-[#6B7A8F] font-medium">Last Updated: November 24, 2025</p>
          </header>

          <div className="space-y-12">
            <section>
              <p className="text-[#0B1E3C] text-lg leading-relaxed mb-6">
                Welcome to <a href="https://khansirhospital.online/" className="text-[#1E9C9D] hover:underline">Khan Sir Hospital</a>. This is an unofficial patient guide website created to help patients and visitors with useful information about the hospital.
              </p>
            </section>

            <div className="grid gap-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                  <Shield className="text-[#1E9C9D]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#0B1E3C] text-xl font-bold mb-2">1. We Do Not Collect Personal Information</h3>
                  <p className="text-[#6B7A8F] leading-relaxed">
                    We do not collect, store, or share any personal data such as names, email addresses, phone numbers, or IP addresses.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                  <EyeOff className="text-[#1E9C9D]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#0B1E3C] text-xl font-bold mb-2">2. No Cookies or Tracking</h3>
                  <p className="text-[#6B7A8F] leading-relaxed">
                    This website does not use cookies, analytics tools (like Google Analytics), or any third-party tracking scripts.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                  <LinkIcon className="text-[#1E9C9D]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#0B1E3C] text-xl font-bold mb-2">3. Third-Party Links</h3>
                  <p className="text-[#6B7A8F] leading-relaxed">
                    We may link to official hospital pages, government health websites, or trusted medical resources. Once you click on an external link, their privacy policy applies (not ours).
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                  <Info className="text-[#1E9C9D]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#0B1E3C] text-xl font-bold mb-2">4. Information We Display</h3>
                  <p className="text-[#6B7A8F] leading-relaxed">
                    All information on this website (doctor names, department details, visiting hours, etc.) is publicly available and collected from official sources for patient convenience only.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                  <Lock className="text-[#1E9C9D]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#0B1E3C] text-xl font-bold mb-2">5. Children’s Privacy</h3>
                  <p className="text-[#6B7A8F] leading-relaxed">
                    This website does not target children and does not knowingly collect any data from minors.
                  </p>
                </div>
              </div>
            </div>

            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-[#0B1E3C] text-xl font-bold mb-4">6. Changes to This Policy</h3>
              <p className="text-[#6B7A8F] leading-relaxed">
                We may update this privacy policy from time to time. The latest version will always be available on this page with the updated date.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <h3 className="text-[#0B1E3C] text-2xl font-bold mb-4">Contact Us</h3>
              <p className="text-[#6B7A8F] mb-6">If you have any questions about this Privacy Policy, please contact us at:</p>
              <a href="mailto:info@khansirhospital.online" className="inline-flex items-center gap-3 bg-[#0B1E3C] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1E9C9D] transition-colors">
                <Mail size={20} /> info@khansirhospital.online
              </a>
            </section>
          </div>

          <p className="mt-20 text-center text-[#6B7A8F] font-bold text-sm">
            Thank you for visiting Khan Sir Hospital Patient Guide!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
