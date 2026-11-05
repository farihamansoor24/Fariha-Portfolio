
const Services = () => {
  return (
     <section id="services" className="px-6 lg:px-16 py-20 max-w-7xl mx-auto scroll-section">
        <div className="text-center space-y-3 mb-14 scroll-anim">
          <span className="text-xs font-semibold tracking-widest text-[#c5a880] uppercase">WHAT I DO</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#f3e3c3]">My Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-grid">
          <div className="bg-[#141414] p-6 rounded-2xl border border-bronze-subtle hover:border-[#c5a880] transition group stagger-card">
            <div className="w-12 h-12 rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] text-xl mb-6 group-hover:scale-110 transition">
              <i className="fa-solid fa-code"></i>
            </div>
            <h3 className="text-base font-bold text-[#f3e3c3] mb-2">Web Development</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">Custom web applications built with modern technologies and best practices.</p>
            <a href="#contact" className="text-xs font-bold text-[#c5a880] inline-flex items-center space-x-2 hover:underline">
              <span>LEARN MORE</span> <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>

          <div className="bg-[#141414] p-6 rounded-2xl border border-bronze-subtle hover:border-[#c5a880] transition group stagger-card">
            <div className="w-12 h-12 rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] text-xl mb-6 group-hover:scale-110 transition">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h3 className="text-base font-bold text-[#f3e3c3] mb-2">Frontend Development</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">Responsive and interactive user interfaces with React, Next.js, and Tailwind CSS.</p>
            <a href="#contact" className="text-xs font-bold text-[#c5a880] inline-flex items-center space-x-2 hover:underline">
              <span>LEARN MORE</span> <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>

          <div className="bg-[#141414] p-6 rounded-2xl border border-bronze-subtle hover:border-[#c5a880] transition group stagger-card">
            <div className="w-12 h-12 rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] text-xl mb-6 group-hover:scale-110 transition">
              <i className="fa-solid fa-server"></i>
            </div>
            <h3 className="text-base font-bold text-[#f3e3c3] mb-2">Backend Development</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">RESTful APIs and server-side applications with Node.js, Express, and databases.</p>
            <a href="#contact" className="text-xs font-bold text-[#c5a880] inline-flex items-center space-x-2 hover:underline">
              <span>LEARN MORE</span> <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>

          <div className="bg-[#141414] p-6 rounded-2xl border border-bronze-subtle hover:border-[#c5a880] transition group stagger-card">
            <div className="w-12 h-12 rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] text-xl mb-6 group-hover:scale-110 transition">
              <i className="fa-solid fa-database"></i>
            </div>
            <h3 className="text-base font-bold text-[#f3e3c3] mb-2">Database Design</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">Database architecture and optimization for high-performance applications.</p>
            <a href="#contact" className="text-xs font-bold text-[#c5a880] inline-flex items-center space-x-2 hover:underline">
              <span>LEARN MORE</span> <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>
      </section>
  )
}

export default Services