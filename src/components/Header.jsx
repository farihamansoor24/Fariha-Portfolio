const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-5 border-b border-bronze-subtle navbar fixed top-0 w-full bg-[#050505]/90 backdrop-blur-md z-50">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-xl tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
          <i className="fa-solid fa-gem mr-1 text-[#ffd700]"></i> PORTFOLIO
        </span>
      </div>

      <nav className="hidden lg:flex space-x-8 text-xs tracking-wider font-medium overflow-hidden">
        {['home', 'about', 'services', 'experience', 'skills', 'projects', 'contact'].map((item, idx) => {
          // Check karein agar item 'home' hai toh use active styling dein
          const isHome = item === 'home';
          return (
            <a 
              key={idx} 
              href={`#${item}`} 
              className={`nav-item relative py-1 transition-all duration-300 group opacity-0 -translate-y-6 ${
                isHome ? 'text-[#fcf6ba] font-bold' : 'text-gray-300 hover:text-[#fcf6ba]'
              }`}
            >
              {item.toUpperCase()}
              {/* Home ke liye underline pehle se scale-x-100 hogi, baakiyo ke liye hover par aayegi */}
              <span 
                className={`absolute bottom-0 left-0 w-full h-[2px] transition-transform duration-300 origin-left ${
                  isHome ? 'transform scale-x-100' : 'transform scale-x-0 group-hover:scale-x-100'
                }`}
                style={{ background: 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 50%, #b38728 100%)' }}
              ></span>
            </a>
          );
        })}
      </nav>

      <div className="flex items-center space-x-5">
        <div className="hidden sm:flex space-x-3 text-gray-400 border-r border-bronze-subtle pr-5">
          <a href="https://www.linkedin.com/in/fariha-mansoor24/" target="_blank" rel="noreferrer" title="LinkedIn" className="hover:text-[#ffd700] transition"><i className="fa-brands fa-linkedin-in text-sm"></i></a>
          <a href="https://github.com/farihamansoor24" target="_blank" rel="noreferrer" title="GitHub" className="hover:text-[#ffd700] transition"><i className="fa-brands fa-github text-sm"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100015947070629" target="_blank" rel="noreferrer" title="Facebook" className="hover:text-[#ffd700] transition"><i className="fa-brands fa-facebook-f text-sm"></i></a>
          <a href="mailto:fariha.mansoor24@gmail.com" title="Email" className="hover:text-[#ffd700] transition"><i className="fa-regular fa-envelope text-sm"></i></a>
        </div>

        <a href="#contact" className="relative group p-[1.5px] rounded-full overflow-hidden inline-block transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          <span className="absolute inset-0 animate-rotate-shine opacity-90" style={{ background: 'conic-gradient(from 0deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #bf953f)' }}></span>
          <span className="relative flex items-center justify-center px-6 py-2 rounded-full bg-[#0a0a0a] text-[#fcf6ba] font-bold group-hover:bg-gold-metallic group-hover:text-black transition-all duration-300 text-xs tracking-wider uppercase">
            LET'S TALK <i className="fa-solid fa-arrow-right ml-1 transition-transform group-hover:translate-x-1 text-[#ffd700] group-hover:text-black"></i>
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header;