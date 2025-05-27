"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const router = useRouter();

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-square relative w-full overflow-hidden">
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
          <p className="text-lg font-light leading-relaxed text-black mb-8">
            A tailored composition in motion. Cut from structured wool with a
            sculpted shoulder and softened hem, this piece captures presence
            without force. Worn here in the stillness of a city in motion.
          </p>

          <div className="flex flex-wrap gap-4 mb-8 w-full md:justify-between justify-center items-center">
            <div className="relative overflow-hidden group w-60 h-80 rounded-md">
              <Image
                src="/fifthImage.jpg"
                alt="Product detail 1"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden group w-60 h-80 rounded-md ">
              <Image
                src="/sixthImage.jpg"
                alt="Product detail 2"
                fill
                priority
                className="object-cover "
              />
            </div>

            <div className="relative overflow-hidden group w-60 h-80 rounded-md">
              <Image
                src="/seventhImage.jpg"
                alt="Product detail 3"
                fill
                priority
                className="object-cover "
              />
            </div>
          </div>

          <div className="bg-white text-black p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="mb-8">
              <div className="text-4xl font-light tracking-tight">₹7,999</div>
              <div className="text-sm text-gray-500 mt-2">
                MHP incl. of all taxes
              </div>
            </div>

            <div className="mb-8">
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

            <div className="flex gap-4">
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
