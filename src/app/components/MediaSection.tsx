import Image from 'next/image'
import React from 'react'

const MediaSection = () => {
  return (
    <>
      <div className="px-8 pb-16">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-800 h-80 rounded-lg overflow-hidden">
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

          <div className="h-80 rounded-lg overflow-hidden relative">
            <Image
              src="/firstImage.jpg"
              alt="Red Fabric Detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="h-48 rounded-lg overflow-hidden relative">
            <Image
              src="/secondImage.jpg"
              alt="Red Garment Detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="h-48 rounded-lg overflow-hidden relative">
            <Image
              src="/thirdImage.jpg"
              alt="Lifestyle"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="h-48 rounded-lg relative bg-white">
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
    </>
  )
}

export default MediaSection