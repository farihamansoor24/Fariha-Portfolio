import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import CustomCursor from './components/CustomCursor';
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // 1. Typing Effect Logic
    const words = [
      "FULL STACK DEVELOPER |", 
      "DESIGN THAT INSPIRES. |", 
      "CODE THAT PERFORMS. |", 
      "BUILDING SCALABLE APPS. |"
    ];
    let i = 0;
    let timer;

    const typingEffect = () => {
      let word = words[i].split("");
      const loopTyping = () => {
        if (word.length > 0) {
          const typedElem = document.getElementById('typed-text');
          if (typedElem) typedElem.innerHTML += word.shift();
        } else {
          timer = setTimeout(deletingEffect, 2000);
          return;
        }
        timer = setTimeout(loopTyping, 100);
      };
      loopTyping();
    };

    const deletingEffect = () => {
      let word = words[i].split("");
      const loopDeleting = () => {
        if (word.length > 0) {
          word.pop();
          const typedElem = document.getElementById('typed-text');
          if (typedElem) typedElem.innerHTML = word.join("");
        } else {
          i = (i + 1 < words.length) ? i + 1 : 0;
          timer = setTimeout(typingEffect, 500);
          return;
        }
        timer = setTimeout(loopDeleting, 50);
      };
      loopDeleting();
    };

    typingEffect();

    // 2. Navbar Stagger & Hero Timeline GSAP Animations
    gsap.to(".nav-item", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2
    });

    const heroTL = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTL
      .to(".hero-tagline", { opacity: 1, y: 0, duration: 0.6, delay: 0.2 })
      .to(".hero-title", { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
      .to(".hero-sub", { opacity: 1, duration: 0.6 }, "-=0.4")
      .to(".hero-desc", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to(".hero-btns", { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
      .to(".hero-meta", { opacity: 1, duration: 0.6 }, "-=0.3")
      .to(".hero-social", { opacity: 1, duration: 0.6 }, "-=0.3")
      .to(".hero-visual", { opacity: 1, scale: 1, duration: 1 }, "-=0.8");

    // 3. Section Headings Scroll Animation
    gsap.utils.toArray(".scroll-anim").forEach((elem) => {
      gsap.to(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 95%",
          toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      });
    });

    // 4. Staggered Cards Animation
    gsap.utils.toArray(".scroll-section").forEach((section) => {
      const cards = section.querySelectorAll(".stagger-card");
      if (cards.length > 0) {
        gsap.to(cards, {
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out"
        });
      }
    });

    // 5. Counters Animation
    gsap.utils.toArray('.counter').forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      
      gsap.fromTo(counter, 
        { innerText: 0 }, 
        { 
          innerText: target, 
          duration: 2, 
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            toggleActions: "play none play reverse"
          },
          onUpdate: function() {
            counter.innerText = Math.ceil(counter.innerText) + suffix;
          }
        }
      );
    });

    // 6. Skill Bars Animation
    ScrollTrigger.batch(".skill-bar", {
      start: "top 85%",
      onEnter: (batch) => {
        batch.forEach(bar => {
          const targetWidth = bar.getAttribute("data-width");
          bar.style.width = targetWidth;
        });
      },
      once: true
    });

    ScrollTrigger.refresh();

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="bg-[#0b0b0b] text-[#e5e5e5] overflow-x-hidden">
      <CustomCursor />
      {/* Header Section */}
     <Header />

      {/* Hero Section */}
       <Hero /> 

      {/* About Section */}
     <About />

      {/* Services Section */}
     <Services />

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
     <Skills />

      {/* Projects Section */}
     <Projects />

      {/* Contact Section */}
     <Contact />

      {/* Footer */}
      <Footer />

    </div>
  );
}