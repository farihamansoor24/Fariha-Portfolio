const About = () => {
  return (
     <section id="about" className="px-6 lg:px-16 py-20 bg-[#0c0c0c] border-t border-b border-bronze-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#fcf6ba] uppercase">
              <span className="w-6 h-[2px]" style={{ background: 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 50%, #b38728 100%)' }}></span>
              <span>ABOUT ME</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text leading-tight" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
              Building Digital Solutions<br />That Make a Difference
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              I'm a passionate Full-Stack Developer with 3+ years of experience creating web applications that are fast, scalable, and user-friendly. I specialize in JavaScript technologies across the MERN stack and love solving complex problems with elegant solutions.
            </p>

            <div id="stats-counter" className="grid grid-cols-4 gap-4 pt-6 text-center border-t border-bronze-subtle">
              <div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text counter" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }} data-target="3" data-suffix="+">0+</div>
                <div className="text-[11px] font-semibold text-gray-400 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text counter" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }} data-target="25" data-suffix="+">0+</div>
                <div className="text-[11px] font-semibold text-gray-400 mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text counter" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }} data-target="25" data-suffix="+">0+</div>
                <div className="text-[11px] font-semibold text-gray-400 mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text counter" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }} data-target="100" data-suffix="%">0%</div>
                <div className="text-[11px] font-semibold text-gray-400 mt-1">Client Satisfaction</div>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact" className="px-7 py-3 rounded-full border border-[#d4af37]/60 bg-[#0a0a0a] text-[#fcf6ba] text-xs font-bold hover:bg-gold-metallic hover:text-black transition inline-flex items-center space-x-2 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <span>DOWNLOAD RESUME</span>
                <i className="fa-solid fa-download"></i>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-bronze-subtle shadow-xl space-y-4 text-xs">
              <div className="flex items-center space-x-3 pb-3 border-b border-bronze-subtle">
                <i className="fa-regular fa-user text-[#ffd700] w-5"></i>
                <span className="text-gray-400 font-medium">Name:</span>
                <span className="text-[#fcf6ba] font-bold">Fariha Mansoor</span>
              </div>
              <div className="flex items-center space-x-3 pb-3 border-b border-bronze-subtle">
                <i className="fa-regular fa-envelope text-[#ffd700] w-5"></i>
                <span className="text-gray-400 font-medium">Email:</span>
                <span className="text-[#fcf6ba] font-bold">fariha.mansoor24@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 pb-3 border-b border-bronze-subtle">
                <i className="fa-solid fa-location-dot text-[#ffd700] w-5"></i>
                <span className="text-gray-400 font-medium">Location:</span>
                <span className="text-[#fcf6ba] font-bold">Karachi, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-clock text-[#ffd700] w-5"></i>
                <span className="text-gray-400 font-medium">Availability:</span>
                <span className="text-[#fcf6ba] font-bold">Available for Freelance and Remote Job</span>
              </div>
            </div>

            <div className="text-right pr-4">
              <span className="signature-text text-5xl text-transparent bg-clip-text select-none" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>Fariha Mansoor</span>
            </div>
          </div>

        </div>
      </section>
  )
}

export default About