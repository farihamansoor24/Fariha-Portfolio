const Services = () => {
  return (
    <section id="services" className="px-6 lg:px-16 py-20 max-w-7xl mx-auto scroll-section">
      <div className="text-center space-y-3 mb-14 scroll-anim">
        <span className="text-xs font-semibold tracking-widest text-[#fcf6ba] uppercase">WHAT I DO</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>My Services</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-grid">
        {[
          { icon: "fa-solid fa-code", title: "Web Development", desc: "Custom web applications built with modern technologies and best practices." },
          { icon: "fa-solid fa-laptop-code", title: "Frontend Development", desc: "Responsive and interactive user interfaces with React, Next.js, and Tailwind CSS." },
          { icon: "fa-solid fa-server", title: "Backend Development", desc: "RESTful APIs and server-side applications with Node.js, Express, and databases." },
          { icon: "fa-solid fa-database", title: "Database Design", desc: "Database architecture and optimization for high-performance applications." }
        ].map((service, idx) => (
          <div key={idx} className="bg-[#0a0a0a] p-6 rounded-2xl border border-bronze-subtle hover:border-[#ffd700] transition group stagger-card shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <div className="w-12 h-12 rounded-xl bg-[#ffd700]/10 border border-[#ffd700]/30 flex items-center justify-center text-[#ffd700] text-xl mb-6 group-hover:scale-110 transition">
              <i className={service.icon}></i>
            </div>
            <h3 className="text-base font-bold text-[#fcf6ba] mb-2">{service.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">{service.desc}</p>
            <a href="#contact" className="text-xs font-bold text-[#ffd700] inline-flex items-center space-x-2 hover:underline">
              <span>LEARN MORE</span> <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services