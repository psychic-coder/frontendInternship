'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(containerRef.current, {
      opacity: 0,
      duration: 1,
    })
      .from(headingRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
      }, '-=0.7')
      .from(textRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
      }, '-=0.6')
      .from(highlightRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      }, '-=0.5');
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 bg-black text-gray-300"
    >
      <h2
        ref={headingRef}
        className="text-5xl md:text-6xl font-extrabold text-white mb-6"
      >
        About <span ref={highlightRef} className="text-red-600">Us</span>
      </h2>
      <p
        ref={textRef}
        className="max-w-3xl text-lg md:text-xl leading-relaxed text-gray-400"
      >
        We are passionate about creating cutting-edge web experiences with
        modern design and smooth interactions. Our focus is on clean,
        accessible, and performant applications built using the latest
        technologies. With a sleek black theme and subtle accent colors, we
        strive to deliver memorable user journeys that stand out.
      </p>
    </section>
  );
};

export default Page;
