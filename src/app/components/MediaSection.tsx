"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const MediaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      onComplete: () => {
     
        gsap.from(mediaItemsRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        });
      }
    });

  
    mediaItemsRef.current.forEach(item => {
      if (item) {
        const mediaContent = item.querySelector('video, img');
        const overlay = document.createElement('div');
        overlay.className = 'absolute inset-0 bg-black bg-opacity-0 transition-all duration-500';
        item.appendChild(overlay);

        gsap.to(mediaContent, {
          scale: 1.05,
          duration: 1,
          ease: "power2.out",
          paused: true
        });

        gsap.to(overlay, {
          backgroundColor: 'rgba(0,0,0,0.1)',
          duration: 0.5,
          paused: true
        });

        item.addEventListener('mouseenter', () => {
          gsap.to(mediaContent, { scale: 1.05, duration: 1 }).play();
          gsap.to(overlay, { backgroundColor: 'rgba(0,0,0,0.1)', duration: 0.5 }).play();
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(mediaContent, { scale: 1, duration: 1 }).play();
          gsap.to(overlay, { backgroundColor: 'rgba(0,0,0,0)', duration: 0.5 }).play();
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="px-8 pb-16" ref={sectionRef}>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div 
          className="bg-gray-800 h-80 rounded-lg overflow-hidden relative group"
          ref={el => { mediaItemsRef.current[0] = el }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/secondVideo.mp4" type="video/mp4" />
          </video>
        </div>

        <div 
          className="h-80 rounded-lg overflow-hidden relative group"
          ref={el => { mediaItemsRef.current[1] = el }}
        >
          <Image
            src="/firstImage.jpg"
            alt="Red Fabric Detail"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div 
          className="h-48 rounded-lg overflow-hidden relative group"
          ref={el => { mediaItemsRef.current[2] = el }}
        >
          <Image
            src="/secondImage.jpg"
            alt="Red Garment Detail"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div 
          className="h-48 rounded-lg overflow-hidden relative group"
          ref={el => { mediaItemsRef.current[3] = el }}
        >
          <Image
            src="/thirdImage.jpg"
            alt="Lifestyle"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div 
          className="h-48 rounded-lg relative bg-white group overflow-hidden"
          ref={el => { mediaItemsRef.current[4] = el }}
        >
          <Image
            src="/fourthImage.jpg"
            alt="Brand Logo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaSection;