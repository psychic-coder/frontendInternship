"use client"
import Image from "next/image";
import React from "react";
import MediaSection from "./MediaSection";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center">
          <div className="w-6 h-6 relative"> {/* Reduced size */}
            <Image
              src="/logo.jpg" 
              alt="Eclypse Logo"
              fill
              className="object-contain"
               sizes="36px" 
            />
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-sm font-light"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-sm font-light"
          >
            Waitlist
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-sm font-light"
          >
            Cart
          </a>
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            Buy
          </button>
        </div>
      </nav>

      <div className="px-8 mt-12">
        <div className="relative">
          {/* Brand name positioned above the video/image */}
          <div className="mb-4">
            <div className=" px-4 py-2 inline-block">
              <span className="text-white text-6xl font-light">Eclypse</span>
              <span className="text-white text-xs align-super ml-1">®</span>
            </div>
          </div>
          
          <div className="w-full h-[600px] bg-gray-800 rounded-lg overflow-hidden relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/firstVideo.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-4 right-4 text-xs text-gray-400 z-10">
              © 2025
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 mt-16 mb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Rooted in a philosophy of quiet luxury, our garments are designed to
            speak softly in cut, in movement, in presence.
          </h1>

          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-sm font-light inline-flex items-center"
          >
            Learn more about Eclypse
            <span className="ml-2">↗</span>
          </a>
        </div>
      </div>

    <MediaSection/>
    </div>
  );
};

export default HeroSection;