import React from 'react';

const Education = () => {
  return (
    <section id="education" className="scroll-section px-6 lg:px-16 py-20 bg-[#0c0c0c] border-t border-b border-[#d4af37]/25">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 scroll-anim opacity-0 translate-y-[30px]">
          <span className="text-xs font-semibold tracking-widest text-[#fcf6ba] uppercase">— ACADEMIC & PROFESSIONAL JOURNEY</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Formal Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3 mb-6 scroll-anim opacity-0 translate-y-[30px]">
              <div className="w-10 h-10 rounded-xl bg-[#ffd700]/10 border border-[#ffd700]/30 flex items-center justify-center text-[#ffd700] text-lg">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-bold text-[#fcf6ba]">Formal Education</h3>
            </div>

            <div className="space-y-6 border-l-2 border-[#d4af37]/30 pl-6 ml-4">
              
              <div className="relative bg-[#0a0a0a] p-6 rounded-2xl border border-[#d4af37]/25 hover:border-[#ffd700] transition shadow-lg group stagger-card opacity-0 translate-y-[30px]">
                <span className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-[#ffd700] shadow-[0_0_10px_#ffd700]"></span>
                <span className="text-xs font-bold text-[#d4af37] bg-[#141414] px-3 py-1 rounded-full border border-[#d4af37]/20">2010</span>
                <h4 className="text-base font-bold text-[#fcf6ba] mt-2">M.Sc. in Information Technology</h4>
                <p className="text-xs text-gray-400 font-medium mt-1">Punjab Technical University</p>
              </div>

              <div className="relative bg-[#0a0a0a] p-6 rounded-2xl border border-[#d4af37]/25 hover:border-[#ffd700] transition shadow-lg group stagger-card opacity-0 translate-y-[30px]">
                <span className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-[#ffd700] shadow-[0_0_10px_#ffd700]"></span>
                <span className="text-xs font-bold text-[#d4af37] bg-[#141414] px-3 py-1 rounded-full border border-[#d4af37]/20">2006</span>
                <h4 className="text-base font-bold text-[#fcf6ba] mt-2">Bachelor of Commerce</h4>
                <p className="text-xs text-gray-400 font-medium mt-1">Lucknow University</p>
              </div>

            </div>
          </div>

          {/* Right Column: Professional Courses & Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3 mb-6 scroll-anim opacity-0 translate-y-[30px]">
              <div className="w-10 h-10 rounded-xl bg-[#ffd700]/10 border border-[#ffd700]/30 flex items-center justify-center text-[#ffd700] text-lg">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <h3 className="text-xl font-bold text-[#fcf6ba]">Certifications & Training</h3>
            </div>

            <div className="space-y-6 border-l-2 border-[#d4af37]/30 pl-6 ml-4">
              
              <div className="relative bg-[#0a0a0a] p-6 rounded-2xl border border-[#d4af37]/25 hover:border-[#ffd700] transition shadow-lg group stagger-card opacity-0 translate-y-[30px]">
                <span className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-[#ffd700] shadow-[0_0_10px_#ffd700]"></span>
                <span className="text-xs font-bold text-[#d4af37] bg-[#141414] px-3 py-1 rounded-full border border-[#d4af37]/20">Ongoing</span>
                <h4 className="text-base font-bold text-[#fcf6ba] mt-2">Web and Mobile App Development</h4>
                <p className="text-xs text-gray-400 font-medium mt-1">Saylani Mass IT Training (SMIT)</p>
              </div>

              <div className="relative bg-[#0a0a0a] p-6 rounded-2xl border border-[#d4af37]/25 hover:border-[#ffd700] transition shadow-lg group stagger-card opacity-0 translate-y-[30px]">
                <span className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-[#ffd700] shadow-[0_0_10px_#ffd700]"></span>
                <span className="text-xs font-bold text-[#d4af37] bg-[#141414] px-3 py-1 rounded-full border border-[#d4af37]/20">Professional Credential</span>
                <h4 className="text-base font-bold text-[#fcf6ba] mt-2">Microsoft Certified Professional Developer (MCPD)</h4>
                <p className="text-xs text-gray-400 font-medium mt-1">Microsoft Certification</p>
              </div>

              <div className="relative bg-[#0a0a0a] p-6 rounded-2xl border border-[#d4af37]/25 hover:border-[#ffd700] transition shadow-lg group stagger-card opacity-0 translate-y-[30px]">
                <span className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-[#ffd700] shadow-[0_0_10px_#ffd700]"></span>
                <span className="text-xs font-bold text-[#d4af37] bg-[#141414] px-3 py-1 rounded-full border border-[#d4af37]/20">Diploma</span>
                <h4 className="text-base font-bold text-[#fcf6ba] mt-2">DOEACC ‘A’ Level Diploma</h4>
                <p className="text-xs text-gray-400 font-medium mt-1">Department of Electronics and Accreditation of Computer Courses</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;