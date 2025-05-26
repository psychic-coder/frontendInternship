"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const router = useRouter();
  const productRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for video section
    gsap.from(videoRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Animation for details section
    gsap.from(detailsRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: detailsRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Animation for product images
    imageRefs.current.forEach((image, index) => {
      if (image) {
        gsap.from(image, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: image,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        });
      }
    });

    // Animation for CTA section
    gsap.from(ctaRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Hover effect for size buttons
    sizes.forEach((_, index) => {
      gsap.to(`.size-btn-${index}`, {
        scale: 1.05,
        duration: 0.2,
        paused: true,
        ease: "power1.out"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full bg-white" ref={productRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Media - Left Column */}
        <div 
          className="aspect-square relative w-full overflow-hidden"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
          >
            <source src="/thirdVideo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Product Details - Right Column */}
        <div 
          className="flex flex-col w-full px-6 py-10 mx-auto"
          ref={detailsRef}
        >
          {/* Product Description */}
          <p className="text-lg font-light leading-relaxed text-black mb-8 transition-all duration-300 hover:text-gray-700">
            A tailored composition in motion. Cut from structured wool with a
            sculpted shoulder and softened hem, this piece captures presence
            without force. Worn here in the stillness of a city in motion.
          </p>

          {/* Small Images Row */}
          <div className="flex flex-wrap gap-4 mb-8 w-full justify-between">
            {["/fifthImage.jpg", "/sixthImage.jpg", "/seventhImage.jpg"].map(
              (src, i) => (
                <div 
                  key={i} 
                  className="w-60 h-82 relative overflow-hidden group"
                  ref={el => { imageRefs.current[i] = el }}
                >
                  <Image
                    src={src}
                    alt={`Product detail ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                </div>
              )
            )}
          </div>

          {/* Add to Cart Section */}
          <div 
            className="bg-white text-black p-8 rounded-lg shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
            ref={ctaRef}
          >
            {/* Price */}
            <div className="mb-8">
              <div className="text-4xl font-light tracking-tight">₹7,999</div>
              <div className="text-sm text-gray-500 mt-2">
                MHP incl. of all taxes
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium">Please select a size</span>
                <button className="text-sm underline hover:text-gray-600 transition-colors">
                  Size chart
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size, index) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-btn-${index} w-16 h-12 border-2 flex items-center justify-center text-sm font-medium transition-all duration-200 ${
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

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button 
                className="flex-1 py-4 border-2 border-black text-black text-sm font-medium hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => {
                  gsap.to(".add-to-cart-btn", {
                    scale: 0.95,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1
                  });
                }}
              >
                Add to Cart
              </button>
              <button 
                className="flex-1 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => {
                  router.push("/cart");
                  gsap.to(".buy-now-btn", {
                    scale: 0.95,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1
                  });
                }}
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