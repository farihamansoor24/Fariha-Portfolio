const Contact = () => {
  return (
    <section id="contact" className="px-6 lg:px-16 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#fcf6ba] uppercase">GET IN TOUCH</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text mt-2" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
              Let's Build Something Amazing Together
            </h2>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life. I'm always excited to work on new challenges and innovative projects.
          </p>

          <div className="space-y-4 pt-4 text-xs">
            <div className="flex items-center space-x-3">
              <i className="fa-regular fa-envelope text-[#ffd700] w-4"></i>
              <div>
                <span className="text-gray-400 block text-[10px]">Email</span>
                <span className="text-[#fcf6ba] font-bold">fariha.mansoor24@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-phone text-[#ffd700] w-4"></i>
              <div>
                <span className="text-gray-400 block text-[10px]">Phone</span>
                <span className="text-[#fcf6ba] font-bold">+92 (340) 280-8680</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-location-dot text-[#ffd700] w-4"></i>
              <div>
                <span className="text-gray-400 block text-[10px]">Location</span>
                <span className="text-[#fcf6ba] font-bold">Karachi, Pakistan</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa-regular fa-clock text-[#ffd700] w-4"></i>
              <div>
                <span className="text-gray-400 block text-[10px]">Response Time</span>
                <span className="text-[#fcf6ba] font-bold">Within 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#0a0a0a] p-8 rounded-2xl border border-bronze-subtle shadow-xl">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full bg-[#121212] border border-bronze-subtle rounded-lg p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ffd700]" />
              <input type="email" placeholder="Your Email" className="w-full bg-[#121212] border border-bronze-subtle rounded-lg p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ffd700]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full bg-[#121212] border border-bronze-subtle rounded-lg p-3 text-xs text-gray-400 focus:outline-none focus:border-[#ffd700]">
                <option value="">Project Type</option>
                <option value="web">Web Development</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
              </select>
              <select className="w-full bg-[#121212] border border-bronze-subtle rounded-lg p-3 text-xs text-gray-400 focus:outline-none focus:border-[#ffd700]">
                <option value="">Budget Range</option>
                <option value="1">$1k - $5k</option>
                <option value="2">$5k - $10k</option>
                <option value="3">$10k+</option>
              </select>
            </div>

            <textarea rows="4" placeholder="Tell me about your project..." className="w-full bg-[#121212] border border-bronze-subtle rounded-lg p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ffd700]"></textarea>

            <button type="submit" className="w-full font-extrabold py-3.5 rounded-lg transition text-xs tracking-wider uppercase flex items-center justify-center space-x-2 shadow-lg hover:opacity-90 text-black" style={{ background: 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 25%, #b38728 50%, #fbf5b7 75%, #aa771c 100%)' }}>
              <span>SEND MESSAGE</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact