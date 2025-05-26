"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollButtonRef = useRef<HTMLButtonElement>(null);

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 1.2,
      ease: "power2.inOut"
    });
  };

  useEffect(() => {
    // Animate footer in when it enters viewport
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });

    // Staggered column animations
    columnsRef.current.forEach((col, index) => {
      if (col) {
        gsap.from(col, {
          opacity: 0,
          x: index % 2 === 0 ? -30 : 30,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      }
    });

    // Scroll button animation
    if (scrollButtonRef.current) {
      gsap.from(scrollButtonRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.6,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

      // Hover effect
      gsap.to(scrollButtonRef.current, {
        scale: 1.1,
        duration: 0.3,
        paused: true,
        ease: "power2.out"
      });

      scrollButtonRef.current.addEventListener('mouseenter', () => {
        gsap.to(scrollButtonRef.current, { scale: 1.1 }).play();
      });
      scrollButtonRef.current.addEventListener('mouseleave', () => {
        gsap.to(scrollButtonRef.current, { scale: 1 }).play();
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="border-t border-gray-800 pt-12 pb-16 px-6 bg-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Brand Column */}
        <div ref={el => columnsRef.current[0] = el}>
          <h3 className="text-xl font-light mb-6 text-white">Eclipse</h3>
          <div className="text-xs text-gray-400 mt-8 opacity-0">© Eclipse 2023</div>
        </div>

        {/* Contact Column */}
        <div ref={el => columnsRef.current[1] = el}>
          <h4 className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Contact</h4>
          <p className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
            +91123-456-7890
          </p>
        </div>

        {/* Navigation Column */}
        <div ref={el => columnsRef.current[2] = el}>
          <h4 className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Navigation</h4>
          <div className="text-sm text-gray-300 space-y-3">
            {['Home', 'About', 'Buy', 'Our Customers', 'Contacts'].map((item) => (
              <div 
                key={item}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Email & Scroll Button Column */}
        <div 
          ref={el => columnsRef.current[3] = el}
          className="flex flex-col justify-between items-end"
        >
          <div>
            <h4 className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Email</h4>
            <p className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
              eclipse@gmail.com
            </p>
          </div>
          <button 
            ref={scrollButtonRef}
            onClick={scrollToTop}
            className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 hover:border-white transition-all duration-300 mt-6"
            aria-label="Scroll to top"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;