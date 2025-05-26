"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const router = useRouter();

  const videoRef = useRef(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const textRef = useRef(null);
  const priceRef = useRef(null);
  const sizeRef = useRef(null);
  const buttonGroupRef = useRef(null);

  useEffect(() => {
    gsap.from(videoRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(imageRefs.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.from([textRef.current, priceRef.current, sizeRef.current, buttonGroupRef.current], {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
      
        <div
          className="aspect-square relative w-full overflow-hidden"
          ref={videoRef}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
          >
            <source src="/thirdVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

    
        <div className="flex flex-col w-full px-6 py-10 mx-auto">

         
          <p
            ref={textRef}
            className="text-lg font-light leading-relaxed text-black mb-8 transition-all duration-300 hover:text-gray-700"
          >
            A tailored composition in motion. Cut from structured wool with a
            sculpted shoulder and softened hem, this piece captures presence
            without force. Worn here in the stillness of a city in motion.
          </p>

         
          <div className="flex flex-wrap gap-4 mb-8 w-full justify-between">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="relative overflow-hidden group w-60 h-80"
                ref={(el) => { imageRefs.current[index] = el! }}
              >
                <Image
                  src="/fifthImage.jpg"
                  alt={`Product detail ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 240px"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
            ))}
          </div>

        
          <div
            className="bg-white text-black p-8 rounded-lg shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
          >
            
            <div ref={priceRef} className="mb-8">
              <div className="text-4xl font-light tracking-tight">₹7,999</div>
              <div className="text-sm text-gray-500 mt-2">
                MHP incl. of all taxes
              </div>
            </div>

           
            <div ref={sizeRef} className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium">
                  Please select a size
                </span>
                <button className="text-sm underline hover:text-gray-600 transition-colors">
                  Size chart
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-16 h-12 border-2 flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

           
            <div ref={buttonGroupRef} className="flex gap-4">
              <button className="flex-1 py-4 border-2 border-black text-black text-sm font-medium hover:bg-gray-50 transition-all duration-300">
                Add to Cart
              </button>
              <button
                className="flex-1 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all duration-300"
                onClick={() => router.push("/cart")}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
