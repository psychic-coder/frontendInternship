"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Product from "./Product";
import Footer from "./Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProductPage = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for info sections
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      }
    });

    // Animation for testimonial
    if (testimonialRef.current) {
      gsap.from(testimonialRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Animate the testimonial image separately
      gsap.from(testimonialRef.current.querySelector("img"), {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Product Title with animation */}
      <h1 className="text-4xl md:text-5xl font-light mb-12 px-4 pt-12 text-center">
        Silhouette No. 1 – Vermilion
      </h1>

      {/* Full width Product */}
      <Product />

      {/* Remaining sections constrained to max-w-6xl */}
      <div className="max-w-6xl mx-auto px-4 mt-24">
        {/* Enhanced Product Info Sections */}
        <div className="space-y-12 mb-28 px-2">
          <div 
            ref={el => sectionRefs.current[0] = el}
            className="border-b border-gray-800 pb-6 group"
          >
            <button className="w-full flex justify-between items-center">
              <h2 className="text-2xl font-light group-hover:text-gray-300 transition-colors">
                Size & Fit
              </h2>
              <span className="text-2xl transform group-hover:rotate-90 transition-transform">
                +
              </span>
            </button>
          </div>
          
          <div 
            ref={el => sectionRefs.current[1] = el}
            className="border-b border-gray-800 pb-6 group"
          >
            <button className="w-full flex justify-between items-center">
              <h2 className="text-2xl font-light group-hover:text-gray-300 transition-colors">
                Delivery & Returns
              </h2>
              <span className="text-2xl transform group-hover:rotate-90 transition-transform">
                +
              </span>
            </button>
          </div>
          
          <div 
            ref={el => sectionRefs.current[2] = el}
            className="border-b border-gray-800 pb-6 group"
          >
            <button className="w-full flex justify-between items-center">
              <h2 className="text-2xl font-light group-hover:text-gray-300 transition-colors">
                How This Was Made
              </h2>
              <span className="text-2xl transform group-hover:rotate-90 transition-transform">
                +
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Testimonial with animation */}
        <div 
          ref={testimonialRef}
          className="mb-32 px-2 bg-gradient-to-r from-transparent via-gray-900 to-transparent p-8 rounded-xl"
        >
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-8">
            OUR CUSTOMERS
          </div>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <blockquote className="text-2xl font-light mb-8 text-gray-300 leading-relaxed">
                "Understated, but unforgettable. It likes it was made for me"
              </blockquote>
              <div className="text-lg">Random Woman</div>
              <div className="text-sm text-gray-500 mt-2">NY, USA</div>
            </div>
            <div className="w-24 h-24 rounded-full overflow-hidden relative border-2 border-gray-600">
              <Image
                src="/eigthImage.jpg"
                alt="Customer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;