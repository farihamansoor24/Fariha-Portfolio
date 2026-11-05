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
    <section id="projects" className="px-8 py-20 bg-[#111111]/60 border-t border-b border-bronze-subtle scroll-section">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12 scroll-anim">
          <div>
            <span className="text-custom-bronze text-xs tracking-widest uppercase font-semibold">— FEATURED PROJECTS</span>
            <h2 className="text-3xl font-bold mt-1 text-[#f3e3c3] tracking-wide">SELECTED WORK</h2>
          </div>
          <a href="#projects" className="border border-bronze-subtle px-5 py-2 rounded-full text-xs text-custom-bronze hover:border-custom-bronze transition hidden md:inline-block uppercase tracking-wider">
            VIEW ALL PROJECTS <i className="fa-solid fa-arrow-right text-[10px] ml-1"></i>
          </a>
        </div>

        {/* Swiper Slider Wrapper */}
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
                <div className="bg-[#141414] rounded-2xl border border-bronze-subtle overflow-hidden hover:border-custom-bronze transition group stagger-card h-full flex flex-col">
                  <div className="h-48 bg-[#1f1f1f] flex items-center justify-center text-custom-bronze/40 group-hover:text-custom-bronze transition overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6 flex-grow">
                    <span className="text-custom-bronze font-bold text-xs">{project.id}</span>
                    <h3 className="text-lg font-bold text-[#f3e3c3] mt-1">{project.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{project.category}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container - Cards ke bilkul neeche */}
          <div className="custom-swiper-pagination !relative !mt-8 flex justify-center items-center"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;