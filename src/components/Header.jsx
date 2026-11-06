const Header = () => {


  return (
    <header className="flex justify-between items-center px-8 py-5 border-b border-bronze-subtle navbar fixed top-0 w-full bg-[#050505]/90 backdrop-blur-md z-50">
      {/* Brand Logo */}
      <div className="flex items-center space-x-2">
        <span className="font-bold text-xl tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
          <i className="fa-solid fa-gem mr-1 text-[#ffd700]"></i> PORTFOLIO
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:flex space-x-8 text-xs tracking-wider font-medium overflow-hidden">
        {['home', 'about', 'services', 'experience', 'skills', 'projects', 'contact'].map((item, idx) => {
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

      {/* Social Icons & Let's Talk Button */}
      <div className="flex items-center space-x-5">
        <div className="hidden sm:flex space-x-3 text-gray-400 border-r border-bronze-subtle pr-5">
          <a href="https://www.linkedin.com/in/fariha-mansoor24/" target="_blank" rel="noreferrer" title="LinkedIn" className="hover:text-[#ffd700] transition"><i className="fa-brands fa-linkedin-in text-sm"></i></a>
          <a href="https://github.com/farihamansoor24" target="_blank" rel="noreferrer" title="GitHub" className="hover:text-[#ffd700] transition"><i className="fa-brands fa-github text-sm"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100015947070629" target="_blank" rel="noreferrer" title="Facebook" className="hover:text-[#ffd700] transition"><i className="fa-brands fa-facebook-f text-sm"></i></a>
          <a href="mailto:fariha.mansoor24@gmail.com" title="Email" className="hover:text-[#ffd700] transition"><i className="fa-regular fa-envelope text-sm"></i></a>
        </div>

        {/* Let's Talk Button with Enhanced Hover Styling */}
        <a 
          href="#contact" 
          className="relative group p-[1.5px] rounded-full overflow-hidden inline-block transition-all duration-300 hover:scale-110 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(252,246,186,0.6)] cursor-pointer"
        >
          {/* Rotating gradient border effect */}
          <span className="absolute inset-0 animate-rotate-shine opacity-95 group-hover:opacity-100 transition-opacity" style={{ background: 'conic-gradient(from 0deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #bf953f)' }}></span>
          
          {/* Inner Button Body */}
          <span className="relative flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0a0a0a] text-[#fcf6ba] font-bold group-hover:bg-gradient-to-r group-hover:from-[#fcf6ba] group-hover:via-[#d4af37] group-hover:to-[#bf953f] group-hover:text-black transition-all duration-500 text-xs tracking-wider uppercase">
            LET'S TALK 
            <i className="fa-solid fa-arrow-right ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#ffd700] group-hover:text-black"></i>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;