"use client"
import React, { useState, useEffect } from 'react'
import StarPortal from '../Shared/StarBlinkingPortal'
import Image from 'next/image'
import Knowmore from '../Shared/Knowmore'
import { useRouter } from 'next/navigation'

const GalleryContent = () => {
  const router = useRouter()
  const [galleryImages, setGalleryImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/gallery')
        if (!res.ok) throw new Error('Failed to fetch gallery')
        const data = await res.json()
        setGalleryImages(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchGallery()
  }, [])

  // Add some variety to image heights for masonry effect
  const getRandomHeight = () => {
    const heights = ['h-64', 'h-80', 'h-96', 'h-72', 'h-88']
    return heights[Math.floor(Math.random() * heights.length)]
  }

  // Skeleton loader for Pinterest-style grid
  const SkeletonGrid = () => {
    // Number of skeleton items to show (adjust as needed)
    const skeletonCount = 15
    // Predefined heights for deterministic rendering (avoids hydration error)
    const heights = ['h-64', 'h-80', 'h-96', 'h-72', 'h-88']
    return (
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 md:gap-6 pb-20">
        {Array.from({ length: skeletonCount }).map((_, idx) => (
          <div
            key={idx}
            className={`break-inside-avoid mb-4 md:mb-6 animate-pulse`}
          >
            <div
              className={`rounded-lg bg-gray-700/60 w-full ${heights[idx % heights.length]} shadow-lg`}
            ></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <StarPortal>
      <div className="w-full relative min-h-screen bg-black">
        <div className="container mx-auto p-4 md:p-8 lg:p-20">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center min-h-[30vh] relative">
            <h2 className="text-[#D8FC00] text-6xl md:text-8xl lg:text-9xl font-poppins font-extrabold leading-[1.1] animate-[textStroke_0.5s_ease-out_2.5s_forwards] inline-block mb-8 text-center">
              Gallery
            </h2>
            <p className="text-white/70 text-lg md:text-xl text-center max-w-2xl mb-12">
              Explore our creative portfolio showcasing innovative designs and stunning visuals
            </p>
          </div>

          {/* Loading/Error State */}
          {loading && <SkeletonGrid />}
          {error && (
            <div className="text-center text-red-500 py-20">{error}</div>
          )}

          {/* Pinterest-style Grid */}
          {!loading && !error && (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 md:gap-6 pb-20">
              {galleryImages.map((item, index) => (
                <div 
                  key={item._id || index}
                  className={`break-inside-avoid mb-4 md:mb-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 relative`}
                  onClick={() => router.push(`/gallery/${item._id || index}`)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800">
                    <Image 
                      src={item.image} 
                      alt={item.title || 'gallery image'}
                      className={`w-full object-cover ${getRandomHeight()} transition-transform duration-500 group-hover:scale-110`}
                      loading="lazy"
                      width={400}
                      height={400}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-white/80 text-sm">Click to view</p>
                      </div>
                    </div>
                    {/* Hover effect border */}
                    <div className="absolute inset-0 border-2 border-[#D8FC00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal for full-size image view */}
        {/* Removed modal code */}
        <Knowmore />
      </div>
    </StarPortal>
  )
}

export default GalleryContent