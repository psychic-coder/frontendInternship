"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaSection from "./MediaSection";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const navRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Initial animations
    gsap.from(navRef.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(brandRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      delay: 0.3,
      ease: "back.out(1.2)"
    });

    gsap.from(videoRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 1.5,
      delay: 0.5,
      ease: "expo.out"
    });

    // Scroll-triggered animations
    gsap.from(headlineRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: headlineRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(ctaRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    // Video hover effect
    const video = videoRef.current;
    if (video) {
      video.addEventListener("mouseenter", () => {
        gsap.to(video, {
          scale: 1.02,
          duration: 1.2,
          ease: "expo.out"
        });
      });
      video.addEventListener("mouseleave", () => {
        gsap.to(video, {
          scale: 1,
          duration: 1.2,
          ease: "expo.out"
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
     
     

      {/* Hero Content */}
      <div className="px-8 mt-12">
        <div className="relative">
          {/* Animated Brand Name */}
          <div 
            ref={brandRef}
            className="mb-4"
          >
            <div className="px-4 py-2 inline-block ">
              <span className="text-white text-6xl font-light tracking-tighter">
                Eclypse
              </span>
              <span className="text-white text-xs align-super ml-1">®</span>
            </div>
          </div>
          
          {/* Video with Hover Effect */}
          <div className="w-full h-[600px] bg-gray-800 rounded-lg overflow-hidden relative group">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-1000 ease-out"
            >
              <source src="/firstVideo.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-4 right-4 text-xs text-gray-400 z-10">
              © 2025
            </div>
          </div>
        </div>
      </div>

      {/* Headline Section */}
      <div className="px-8 mt-16 mb-20">
        <div className="max-w-2xl">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-5xl font-light leading-tight mb-8 tracking-tight"
          >
            Rooted in a philosophy of quiet luxury, our garments are designed to
            speak softly in cut, in movement, in presence.
          </h1>

          <a
            ref={ctaRef}
            href="#"
            className="text-white hover:text-gray-300 transition-all duration-300 text-sm font-light inline-flex items-center group"
          >
            Learn more about Eclypse
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>
      </div>

      {/* Media Section */}
      <MediaSection />
    </div>
  );
};

export default HeroSection;