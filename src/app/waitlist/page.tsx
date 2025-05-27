'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Page = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const floatDotRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from(titleRef.current, {
      y: -40,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
    });

    gsap.from(subtitleRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: 'power3.out',
    });

    gsap.from(formRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: 'power2.out',
    });

    gsap.from(buttonRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: 'back.out(1.7)',
    });

    // Floating animation
    gsap.to(floatDotRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
    >
      <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-10 max-w-xl w-full">
        {/* Floating dot */}
        <div
          ref={floatDotRef}
          className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"
        ></div>

        <h1
          ref={titleRef}
          className="text-4xl font-semibold text-black text-center mb-4"
        >
          Join the Waitlist
        </h1>

        <p
          ref={subtitleRef}
          className="text-center text-gray-600 text-base mb-8"
        >
          Be the first to know when we launch. Get early access and updates!
        </p>

        <form ref={formRef} className="space-y-4">
          <input
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </form>

        <button
          ref={buttonRef}
          className="mt-6 w-full py-3 bg-black text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-all transform hover:scale-[1.02]"
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Page;
