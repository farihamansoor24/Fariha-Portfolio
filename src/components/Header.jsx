
const Header = () => {
  return (
     <header className="flex justify-between items-center px-8 py-5 border-b border-bronze-subtle navbar fixed top-0 w-full bg-[#0b0b0b]/90 backdrop-blur-md z-50">
        <div className="flex items-center space-x-2">
          <span className="text-custom-bronze font-bold text-xl tracking-widest uppercase">
            <i className="fa-solid fa-gem mr-1"></i> PORTFOLIO
          </span>
        </div>

        <nav className="hidden lg:flex space-x-8 text-xs tracking-wider text-gray-300 font-medium overflow-hidden">
          <a href="#home" className="nav-item relative py-1 text-[#c5a880] transition-all duration-300 hover:text-[#f3e3c3] group opacity-0 -translate-y-6">
            HOME
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a880] transform scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#about" className="nav-item relative py-1 text-gray-300 transition-all duration-300 hover:text-[#c5a880] group opacity-0 -translate-y-6">
            ABOUT
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a880] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="#services" className="nav-item relative py-1 text-gray-300 transition-all duration-300 hover:text-[#c5a880] group opacity-0 -translate-y-6">
            SERVICES
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a880] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="#experience" className="nav-item relative py-1 text-gray-300 transition-all duration-300 hover:text-[#c5a880] group opacity-0 -translate-y-6">
            EXPERIENCE
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a880] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="#skills" className="nav-item relative py-1 text-gray-300 transition-all duration-300 hover:text-[#c5a880] group opacity-0 -translate-y-6">
            SKILLS
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a880] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="#projects" className="nav-item relative py-1 text-gray-300 transition-all duration-300 hover:text-[#c5a880] group opacity-0 -translate-y-6">
            PROJECTS
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a880] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="#contact" className="nav-item relative py-1 text-gray-300 transition-all duration-300 hover:text-[#c5a880] group opacity-0 -translate-y-6">
            CONTACT
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a880] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </nav>

        <div className="flex items-center space-x-5">
          <div className="hidden sm:flex space-x-3 text-gray-400 border-r border-bronze-subtle pr-5">
            <a href="https://www.linkedin.com/in/fariha-mansoor24/" target="_blank" rel="noreferrer" title="LinkedIn" className="hover:text-custom-bronze transition"><i className="fa-brands fa-linkedin-in text-sm"></i></a>
            <a href="https://github.com/farihamansoor24" target="_blank" rel="noreferrer" title="GitHub" className="hover:text-custom-bronze transition"><i className="fa-brands fa-github text-sm"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100015947070629" target="_blank" rel="noreferrer" title="Facebook" className="hover:text-custom-bronze transition"><i className="fa-brands fa-facebook-f text-sm"></i></a>
            <a href="mailto:fariha.mansoor24@gmail.com" title="Email" className="hover:text-custom-bronze transition"><i className="fa-regular fa-envelope text-sm"></i></a>
          </div>

          <a href="#contact" className="relative group p-[1.5px] rounded-full overflow-hidden inline-block transition-all duration-300 hover:scale-105 shadow-xl">
            <span className="absolute inset-0 animate-rotate-shine opacity-80 group-hover:opacity-100 transition-opacity" style={{ background: 'conic-gradient(from 0deg, #c5a880, transparent 40%, #f3e3c3, transparent 80%, #c5a880)' }}></span>
            <span className="relative flex items-center justify-center px-6 py-2 rounded-full bg-[#141414] text-[#c5a880] font-semibold group-hover:bg-[#1c1813] group-hover:text-white transition-all duration-300 text-xs tracking-wider uppercase">
              LET'S TALK <i className="fa-solid fa-arrow-right ml-1 transition-transform group-hover:translate-x-1"></i>
            </span>
          </a>
        </div>
      </header>
  )
}

export default Header