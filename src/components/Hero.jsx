const Hero = () => {
  return (
    <section id="home" className="w-full relative px-6 md:px-12 pt-36 pb-20 min-h-screen flex items-center justify-center mx-auto overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'linear-gradient(135deg, rgba(5, 5, 5, 0.85), rgba(15, 12, 10, 0.95)), url(\'./photo-1709625862266-014ef072fd93.avif\')' }}>
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        
        <div className="w-full lg:max-w-xl hero-text text-left">
          <span className="hero-tagline text-xs tracking-widest uppercase font-bold text-transparent bg-clip-text opacity-0 -translate-y-4" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>— HELLO, I'M</span>
          <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-extrabold mt-3 tracking-tight text-transparent bg-clip-text opacity-0 translate-y-6" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>Fariha Mansoor</h1>
          <p className="hero-sub text-base md:text-lg text-[#fcf6ba] mt-3 font-medium h-8 opacity-0"><span id="typed-text"></span><span className="typing-cursor">&nbsp;</span></p>
          <p className="hero-desc text-gray-400 mt-4 leading-relaxed text-base opacity-0 translate-y-6">
            I craft end-to-end web solutions, combining engaging frontend interfaces with powerful backend systems to build high-performance applications that elevate your brand.
          </p>
          
          {/* Action Buttons with Smooth Hover Effects */}
          <div className="hero-btns flex flex-wrap items-center gap-4 mt-8 opacity-0 translate-y-6">
            
            {/* HIRE ME Button */}
            <a 
              href="#contact" 
              className="relative group p-[1.5px] rounded-full overflow-hidden inline-block transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(252,246,186,0.6)] shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              <span className="absolute inset-0 animate-rotate-shine opacity-90 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'conic-gradient(from 0deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #bf953f)' }}></span>
              <span className="relative flex items-center justify-center px-7 py-3 rounded-full bg-[#0a0a0a] text-[#fcf6ba] font-bold group-hover:bg-gradient-to-r group-hover:from-[#fcf6ba] group-hover:via-[#d4af37] group-hover:to-[#bf953f] group-hover:text-black transition-all duration-500 text-xs tracking-wider uppercase">
                HIRE ME 
                <i className="fa-solid fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-2 text-[#ffd700] group-hover:text-black"></i>
              </span>
            </a>

            {/* VIEW WORK Button */}
            <a 
              href="#projects" 
              className="relative px-7 py-3 rounded-full border border-[#d4af37]/50 text-gray-200 bg-[#0a0a0a]/50 backdrop-blur-sm hover:text-black hover:bg-gradient-to-r hover:from-[#fcf6ba] hover:via-[#d4af37] hover:to-[#bf953f] hover:border-[#ffd700] transition-all duration-500 text-xs tracking-wider uppercase shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 flex items-center font-bold group"
            >
              VIEW WORK 
              <i className="fa-regular fa-folder-open ml-2 transition-transform duration-300 group-hover:scale-110 text-[#ffd700] group-hover:text-black"></i>
            </a>

          </div>

          <div className="hero-meta mt-6 text-xs tracking-wider text-green-400 flex items-center opacity-0">
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block mr-2 animate-pulse"></span> AVAILABLE FOR FREELANCE WORK | OPEN TO REMOTE JOBS
          </div>
          
          <div className="hero-social flex space-x-3 mt-6 text-gray-400 opacity-0">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="border border-[#d4af37]/30 w-9 h-9 rounded-full flex items-center justify-center hover:text-[#fcf6ba] hover:border-[#ffd700] transition"><i className="fa-brands fa-linkedin-in text-xs"></i></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="border border-[#d4af37]/30 w-9 h-9 rounded-full flex items-center justify-center hover:text-[#fcf6ba] hover:border-[#ffd700] transition"><i className="fa-brands fa-github text-xs"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="border border-[#d4af37]/30 w-9 h-9 rounded-full flex items-center justify-center hover:text-[#fcf6ba] hover:border-[#ffd700] transition"><i className="fa-brands fa-facebook-f text-xs"></i></a>
            <a href="mailto:fariha.mansoor24@gmail.com" className="border border-[#d4af37]/30 w-9 h-9 rounded-full flex items-center justify-center hover:text-[#fcf6ba] hover:border-[#ffd700] transition"><i className="fa-regular fa-envelope text-xs"></i></a>
          </div>
        </div>

        <div className="hero-visual relative flex items-center justify-center w-full lg:w-auto py-12 opacity-0 scale-95">
          <div className="absolute -top-5 sm:-top-2 inset-x-0 flex justify-center pointer-events-none select-none z-30">
            <h2 className="shining-text text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              WEB DEVELOPER
            </h2>
          </div>

          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center z-20 my-6">
            <div className="absolute inset-0 rounded-full animate-rotate-shine opacity-90 blur-[1px]" style={{ background: 'conic-gradient(from 0deg, #ffd700, transparent 40%, #fff3a7, transparent 75%, #b8860b)' }}></div>
            <div className="absolute -inset-2 rounded-full border border-[#ffd700]/30 shadow-[0_0_40px_rgba(212,175,55,0.3)]"></div>

            <div className="absolute inset-1 rounded-full border border-[#d4af37]/50 flex items-center justify-center bg-[#0a0a0a] backdrop-blur-md shadow-2xl overflow-visible">
              <div className="absolute -top-3 bg-[#141414] px-3 py-1 rounded-full text-xs border border-[#d4af37]/40 text-[#fcf6ba] shadow-xl flex items-center space-x-1.5 z-40"><i className="fa-brands fa-react text-cyan-400"></i> <span>React.js</span></div>
              <div className="absolute -left-4 sm:-left-6 top-1/3 bg-[#141414] px-3 py-1 rounded-full text-xs border border-[#d4af37]/40 text-[#fcf6ba] shadow-xl flex items-center space-x-1.5 z-40"><i className="fa-brands fa-node-js text-green-500"></i> <span>Node.js</span></div>
              <div className="absolute -right-4 sm:-right-6 top-1/3 bg-[#141414] px-3 py-1 rounded-full text-xs border border-[#d4af37]/40 text-[#fcf6ba] shadow-xl flex items-center space-x-1.5 z-40"><i className="fa-solid fa-database text-emerald-400"></i> <span>MongoDB</span></div>
              <div className="absolute -bottom-3 bg-[#141414] px-3 py-1 rounded-full text-xs border border-[#d4af37]/40 text-[#fcf6ba] shadow-xl flex items-center space-x-1.5 z-40"><i className="fa-solid fa-code text-blue-400"></i> <span>TypeScript</span></div>
              
              <img src="/profile.jpeg" alt="Fariha Mansoor" className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full grayscale hover:grayscale-0 transition duration-500 shadow-2xl border border-[#d4af37]/40 relative z-30" />
            </div>
          </div>

          <div className="absolute -bottom-1 sm:-bottom-2 inset-x-0 flex justify-center pointer-events-none select-none z-30">
            <h2 className="shining-text text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              UI/UX DESIGNER
            </h2>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero