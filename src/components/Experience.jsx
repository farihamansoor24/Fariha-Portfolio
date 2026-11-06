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
                  Software Engineer
                </span>
                <h3 className="text-lg font-bold text-[#fcf6ba] mt-1">SRM Techsol Private Limited, India</h3>
              </div>
              <span className="text-xs text-gray-300 bg-[#141414] border border-bronze-subtle px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">June 2012 - July 2015</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              	Developed and maintained dynamic web applications using PHP frameworks.
                 Collaborated with cross-functional teams for system design and integration.
                 Performed debugging, testing, and performance optimization

            </p>
          </div>

          <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-bronze-subtle hover:border-[#ffd700] transition stagger-card shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <span className="text-transparent bg-clip-text font-bold text-xs uppercase tracking-wider" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
                  Junior Software Engineer
                </span>
                <h3 className="text-lg font-bold text-[#fcf6ba] mt-1">Laitkor Info Solutions Pvt. Ltd, India</h3>
              </div>
              <span className="text-xs text-gray-300 bg-[#141414] border border-bronze-subtle px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">Feb 2011 - April 2012</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
           	Built web-based applications using PHP and MySQL.	Worked on UI enhancements using JavaScript, AJAX, and jQuery.	Assisted in application maintenance and troubleshooting

            </p>
          </div>

          <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-bronze-subtle hover:border-[#ffd700] transition stagger-card shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <span className="text-transparent bg-clip-text font-bold text-xs uppercase tracking-wider" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
                  Career Break
                </span>
                <h3 className="text-sm font-bold text-[#fcf6ba] mt-1">Planned career break to focus on family responsibilities.<br/> During this period:</h3>
              </div>
              <span className="text-xs text-gray-300 bg-[#141414] border border-bronze-subtle px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">2015 - 2025</span>
            </  div>
            <ul className="text-gray-400 text-xs leading-relaxed">
                <li>Stayed updated with modern web development trends and tools</li>
              <li>Practiced and refreshed technical skills in PHP frameworks</li>
              <li>Now actively seeking to resume a professional career in web development</li>
              </ul>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience