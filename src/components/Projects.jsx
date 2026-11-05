import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  const projectsData = [
    { id: "01", title: "BEXON", category: "Corporate Website | React", img: "./project-1.PNG" },
    { id: "02", title: "INTERIOR ELEGANCE", category: "SOFTLAND Landing Page | React", img: "./project-2.PNG" },
    { id: "03", title: "VOGUE VAULT", category: "Landing Page | React", img: "./project-3.PNG" },
    { id: "04", title: "GUILDWORK", category: "Service Provider | Web Application", img: "./project-4.PNG" },
    { id: "05", title: "LUXEVIBE", category: "Fashion Blog | Web Application", img: "./project-5.PNG" },
    { id: "06", title: "PROJECT 6", category: "To-Do App | Redux", img: "./project-6.PNG" },
  ];

  return (
    <section id="projects" className="px-8 py-20 bg-[#0c0c0c] border-t border-b border-bronze-subtle scroll-section">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12 scroll-anim">
          <div>
            <span className="text-[#fcf6ba] text-xs tracking-widest uppercase font-bold">— FEATURED PROJECTS</span>
            <h2 className="text-3xl font-extrabold mt-1 text-transparent bg-clip-text tracking-wide" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>SELECTED WORK</h2>
          </div>
          <a href="#projects" className="border border-bronze-subtle px-5 py-2 rounded-full text-xs text-[#fcf6ba] hover:border-[#ffd700] transition hidden md:inline-block uppercase tracking-wider font-semibold">
            VIEW ALL PROJECTS <i className="fa-solid fa-arrow-right text-[10px] ml-1"></i>
          </a>
        </div>

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
            className="w-full"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="bg-[#0a0a0a] rounded-2xl border border-bronze-subtle overflow-hidden hover:border-[#ffd700] transition group stagger-card h-full flex flex-col shadow-lg">
                  <div className="h-48 bg-[#121212] flex items-center justify-center text-[#d4af37]/50 group-hover:text-[#ffd700] transition overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6 flex-grow">
                    <span className="text-transparent bg-clip-text font-bold text-xs" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>{project.id}</span>
                    <h3 className="text-lg font-bold text-[#fcf6ba] mt-1">{project.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{project.category}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-pagination !relative !mt-8 flex justify-center items-center"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;