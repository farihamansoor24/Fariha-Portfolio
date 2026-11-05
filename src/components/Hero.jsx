const Hero = () => {
  return (
      <section id="home" className="w-full relative px-6 md:px-12 pt-36 pb-20 min-h-screen flex items-center justify-center mx-auto overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'linear-gradient(135deg, rgba(18, 16, 14, 0.75), rgba(30, 24, 20, 0.95)), url(\'./photo-1709625862266-014ef072fd93.avif\')' }}>
        <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
          
          <div className="w-full lg:max-w-xl hero-text text-left">
            <span className="hero-tagline text-[#c5a880] text-s tracking-widest uppercase font-semibold opacity-0 -translate-y-4">—— HELLO, I'M</span>
            <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-bold mt-3 tracking-tight text-[#f3e3c3] opacity-0 translate-y-6">Fariha Mansoor</h1>
            <p className="hero-sub text-base md:text-lg text-[#c5a880] mt-3 font-medium h-8 opacity-0"><span id="typed-text"></span><span className="typing-cursor">&nbsp;</span></p>
            <p className="hero-desc text-gray-400 mt-4 leading-relaxed text-lg opacity-0 translate-y-6">
              I craft end-to-end web solutions, combining engaging frontend interfaces with powerful backend systems to build high-performance applications that elevate your brand.
            </p>
            
            <div className="hero-btns flex flex-wrap items-center gap-4 mt-8 opacity-0 translate-y-6">
              <a href="#contact" className="relative group p-[1.5px] rounded-full overflow-hidden inline-block transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-[#c5a880]/30">
                <span className="absolute inset-0 animate-rotate-shine opacity-80 group-hover:opacity-100 transition-opacity" style={{ background: 'conic-gradient(from 0deg, #c5a880, transparent 40%, #f3e3c3, transparent 80%, #c5a880)' }}></span>
                <span className="relative flex items-center justify-center px-7 py-3 rounded-full bg-[#141414] text-[#f3e3c3] font-semibold group-hover:bg-[#1c1813] group-hover:text-white transition-all duration-300 text-xs tracking-wider uppercase">
                  HIRE ME <i class="fa-solid fa-arrow-right ml-1 transition-transform group-hover:translate-x-1.5 text-[#c5a880]"></i>
                </span>
              </a>

              <a href="#projects" className="relative px-7 py-3 rounded-full border border-[#c5a880]/40 text-gray-300 bg-[#141414]/50 backdrop-blur-sm hover:text-black hover:bg-[#c5a880] hover:border-[#c5a880] transition-all duration-300 text-xs tracking-wider uppercase shadow-lg hover:scale-105 flex items-center">
                VIEW WORK <i class="fa-regular fa-folder-open ml-1"></i>
              </a>
            </div>

            <div className="hero-meta mt-6 text-xs tracking-wider text-green-400 flex items-center opacity-0">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block mr-2 animate-pulse"></span> AVAILABLE WORLDWIDE
            </div>
            
            <div className="hero-social flex space-x-3 mt-6 text-gray-400 opacity-0">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="border border-[#c5a880]/30 w-9 h-9 rounded-full flex items-center justify-center hover:text-[#c5a880] hover:border-[#c5a880] transition"><i class="fa-brands fa-linkedin-in text-xs"></i></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="border border-[#c5a880]/30 w-9 h-9 rounded-full flex items-center justify-center hover:text-[#c5a880] hover:border-[#c5a880] transition"><i class="fa-brands fa-github text-xs"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="border border-[#c5a880]/30 w-9 h-9 rounded-full flex items-center justify-center hover:text-[#c5a880] hover:border-[#c5a880] transition"><i class="fa-brands fa-facebook-f text-xs"></i></a>
              <a href="mailto:fariha.mansoor24@gmail.com" className="border border-[#c5a880]/30 w-9 h-9 rounded-full flex items-center justify-center hover:text-[#c5a880] hover:border-[#c5a880] transition"><i class="fa-regular fa-envelope text-xs"></i></a>
            </div>
          </div>

          <div className="hero-visual relative flex items-center justify-center w-full lg:w-auto py-12 opacity-0 scale-95">
            <div className="absolute -top-5 sm:-top-0 inset-x-0 flex justify-center pointer-events-none select-none z-30">
              <h2 className="text-3xl sm:text-5xl md:text-5xl font-black uppercase tracking-wider text-[#f3e3c3] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] whitespace-nowrap shining-text">
                WEB DESIGNER
              </h2>
            </div>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center z-20 my-4">
              <div className="absolute inset-0 rounded-full animate-rotate-shine opacity-75 blur-[1px]" style={{ background: 'conic-gradient(from 0deg, #c5a880, transparent 60%, #f3e3c3, transparent 90%, #c5a880)' }}></div>
              <div className="absolute inset-1 rounded-full border border-[#c5a880]/40 flex items-center justify-center bg-[#141414]/90 backdrop-blur-md shadow-2xl overflow-visible">
                <div className="absolute -top-3 bg-[#1a1a1a] px-3 py-1 rounded-full text-xs border border-[#c5a880]/30 text-[#c5a880] shadow-xl flex items-center space-x-1.5 z-40"><i class="fa-brands fa-react"></i> <span>React.js</span></div>
                <div className="absolute -left-4 sm:-left-6 top-1/3 bg-[#1a1a1a] px-3 py-1 rounded-full text-xs border border-[#c5a880]/30 text-[#c5a880] shadow-xl flex items-center space-x-1.5 z-40"><i class="fa-brands fa-node-js"></i> <span>Node.js</span></div>
                <div className="absolute -right-4 sm:-right-6 top-1/3 bg-[#1a1a1a] px-3 py-1 rounded-full text-xs border border-[#c5a880]/30 text-[#c5a880] shadow-xl flex items-center space-x-1.5 z-40"><i class="fa-solid fa-database"></i> <span>MongoDB</span></div>
                <div className="absolute -bottom-3 bg-[#1a1a1a] px-3 py-1 rounded-full text-xs border border-[#c5a880]/30 text-[#c5a880] shadow-xl flex items-center space-x-1.5 z-40"><i class="fa-solid fa-code"></i> <span>TypeScript</span></div>
                
                <img src="/profile.jpeg" alt="Fariha Mansoor" className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full grayscale hover:grayscale-0 transition duration-500 shadow-2xl border border-[#c5a880]/30 relative z-30" />
              </div>
            </div>

            <div className="absolute -bottom-1 sm:-bottom-0 inset-x-0 flex justify-center pointer-events-none select-none z-30">
              <h2 className="text-3xl sm:text-5xl md:text-5xl font-black uppercase tracking-wider text-[#f3e3c3] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] whitespace-nowrap shining-text">
                WEB DEVELOPER
              </h2>
            </div>
          </div>

        </div>
      </section>
  )
}

export default Hero