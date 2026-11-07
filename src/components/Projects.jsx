import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  const projectsData = [
    { 
      id: "01", 
      title: "BEXON", 
      category: "Corporate Website | React", 
      img: "./project-1.PNG",
      liveLink: " https://bexon-landing-page-silk.vercel.app/",
      githubLink: "https://github.com/farihamansoor24/Bexon-LandingPage"
    },
    { 
      id: "02", 
      title: "SOFTLAND", 
      category: "SOFTLAND Landing Page | React", 
      img: "./project-2.PNG",
      liveLink: "https://softland-landing-page-murex.vercel.app/",
      githubLink: "https://github.com/farihamansoor24/softland_landing_page"
    },
    { 
      id: "03", 
      title: "VOGUE VAULT", 
      category: "Landing Page | React", 
      img: "./project-3.PNG",
      liveLink: "https://react-landing-page-2qsa.vercel.app/",
      githubLink: "https://github.com/farihamansoor24/ReactLandingPage"
    },
    { 
      id: "04", 
      title: "GUILDWORK", 
      category: "Service Provider | Web Application", 
      img: "./project-4.PNG",
      liveLink: "https://femhack-2026-two.vercel.app/",
      githubLink: "https://github.com/farihamansoor24/femhack-2026"
    },
    { 
      id: "05", 
      title: "LUXEVIBE", 
      category: "Fashion Blog | Web Application", 
      img: "./project-5.PNG",
      liveLink: "https://fashion-blog-kappa.vercel.app/",
      githubLink: "https://github.com/farihamansoor24/fashion_blog"
    },
    { 
      id: "06", 
      title: "PROJECT 6", 
      category: "To-Do App | Redux", 
      img: "./project-6.PNG",
      liveLink: "https://github.com/farihamansoor24/redux-todolist",
      githubLink: "https://github.com/farihamansoor24/redux-todolist"
    },
  ];

  return (
    <section id="projects" className="px-8 py-20 bg-[#0c0c0c] border-t border-b border-[#d4af37]/25 scroll-section">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12 scroll-anim">
          <div>
            <span className="text-[#fcf6ba] text-xs tracking-widest uppercase font-bold">— FEATURED PROJECTS</span>
            <h2 className="text-3xl font-extrabold mt-1 text-transparent bg-clip-text tracking-wide" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>
              SELECTED WORK
            </h2>
          </div>
          <a href="#projects" className="border border-[#d4af37]/40 px-5 py-2 rounded-full text-xs text-[#fcf6ba] hover:border-[#ffd700] hover:bg-[#d4af37]/10 transition hidden md:inline-block uppercase tracking-wider font-semibold">
            VIEW ALL PROJECTS <i className="fa-solid fa-arrow-right text-[10px] ml-1"></i>
          </a>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              el: '.custom-swiper-pagination',
              clickable: true,
            }}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full pb-6"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                
                {/* Project Card */}
                <div className="bg-[#0a0a0a] rounded-2xl border border-[#d4af37]/25 overflow-hidden hover:border-[#ffd700] transition-all duration-500 group stagger-card h-full flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:-translate-y-1.5">
                  
                  {/* Image Container with Hover Overlay Actions */}
                  <div className="relative h-52 bg-[#121212] overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
                    />
                    
                    {/* Dark Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      
                      {/* Live Demo Button */}
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noreferrer"
                        title="Live Demo"
                        className="w-10 h-10 rounded-full bg-[#d4af37] text-black flex items-center justify-center font-bold hover:scale-110 transition shadow-lg"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                      </a>

                      {/* GitHub Link Button */}
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noreferrer"
                        title="Source Code"
                        className="w-10 h-10 rounded-full bg-[#141414] border border-[#d4af37]/50 text-[#fcf6ba] flex items-center justify-center font-bold hover:scale-110 hover:border-[#ffd700] transition shadow-lg"
                      >
                        <i className="fa-brands fa-github text-sm"></i>
                      </a>

                    </div>
                    
                    {/* Project Number Badge */}
                    <span className="absolute top-3 left-3 bg-[#0a0a0a]/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#fcf6ba] border border-[#d4af37]/30">
                      {project.id}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#fcf6ba] group-hover:text-[#ffd700] transition">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">{project.category}</p>
                    </div>

                    {/* Bottom Links Row for Mobile / Direct Access */}
                    <div className="pt-3 border-t border-[#d4af37]/15 flex items-center justify-between text-xs">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[#fcf6ba] hover:text-[#ffd700] font-semibold flex items-center space-x-1.5 transition"
                      >
                        <span>Live Demo</span> <i className="fa-solid fa-external-link-alt text-[10px]"></i>
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-gray-400 hover:text-gray-200 transition"
                      >
                        <i className="fa-brands fa-github text-sm"></i> Code
                      </a>
                    </div>
                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-pagination !relative !mt-6 flex justify-center items-center"></div>
        </div>

      </div>
    </section>
  );
};

export default Projects;