import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="px-8 py-20 bg-[#0c0c0c] border-t border-b border-bronze-subtle scroll-section">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12 scroll-anim">
          <span className="text-[#fcf6ba] text-xs tracking-widest uppercase font-bold">— CAREER PATH</span>
          <h2 className="text-3xl font-extrabold mt-2 text-transparent bg-clip-text tracking-wide" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
            WORK EXPERIENCE
          </h2>
        </div>
        <div className="space-y-6 stagger-grid">
          <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-bronze-subtle hover:border-[#ffd700] transition stagger-card shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <span className="text-transparent bg-clip-text font-bold text-xs uppercase tracking-wider" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
                  Senior Full Stack Developer
                </span>
                <h3 className="text-lg font-bold text-[#fcf6ba] mt-1">TechCraft Studio</h3>
              </div>
              <span className="text-xs text-gray-300 bg-[#141414] border border-bronze-subtle px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">2024 - Present</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Leading the development of high-performance web applications using React, Node.js, and TypeScript. Collaborating with UI/UX designers to implement custom GSAP animations and responsive layouts.
            </p>
          </div>

          <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-bronze-subtle hover:border-[#ffd700] transition stagger-card shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <span className="text-transparent bg-clip-text font-bold text-xs uppercase tracking-wider" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
                  Frontend Web Developer
                </span>
                <h3 className="text-lg font-bold text-[#fcf6ba] mt-1">PixelCraft Agency</h3>
              </div>
              <span className="text-xs text-gray-300 bg-[#141414] border border-bronze-subtle px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">2022 - 2024</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Built interactive landing pages, e-commerce storefronts, and corporate websites using Tailwind CSS, JavaScript, and modern frontend workflows. Optimized site performance and cross-browser compatibility.
            </p>
          </div>

          <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-bronze-subtle hover:border-[#ffd700] transition stagger-card shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <span className="text-transparent bg-clip-text font-bold text-xs uppercase tracking-wider" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
                  Junior Web Designer
                </span>
                <h3 className="text-lg font-bold text-[#fcf6ba] mt-1">Creative Hub</h3>
              </div>
              <span className="text-xs text-gray-300 bg-[#141414] border border-bronze-subtle px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">2021 - 2022</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Designed user interfaces, wireframes, and prototypes in Figma. Translated design mockups into clean HTML, CSS, and interactive JavaScript components.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience