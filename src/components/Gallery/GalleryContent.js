"use client"
import React, { useState, useEffect } from 'react'
import StarPortal from '../Shared/StarBlinkingPortal'
import Image from 'next/image'
import Knowmore from '../Shared/Knowmore'
import { useRouter } from 'next/navigation'

const GalleryContent = () => {
  const router = useRouter()
  const [galleryImages, setGalleryImages] = useState([])
  const [galleryVideos, setGalleryVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('images')

  const dummyVideos = [
    {
      _id: '1',
      title: 'ZohaLand',
      videoId: 'D_LVSUT6cQI',
      video: 'https://youtube.com/shorts/D_LVSUT6cQI?si=TjV6sSR7n4p3PuO5'
    },
    {
      _id: '2',
      title: 'ZohaLand ',
      videoId: 'gDIApzkmso0',
      video: 'https://youtube.com/shorts/D_LVSUT6cQI?si=TjV6sSR7n4p3PuO5'
    },
    {
      _id: '3',
      title: 'ZohaLand ',
      videoId: 'D_LVSUT6cQI',
      video: 'https://youtube.com/shorts/D_LVSUT6cQI?si=TjV6sSR7n4p3PuO5'
    },
    {
      _id: '4',
      title: 'ZohaLand ',
      videoId: 'gDIApzkmso0I',
      video: 'https://youtube.com/shorts/D_LVSUT6cQI?si=TjV6sSR7n4p3PuO5'
    },
    {
      _id: '5',
      title: 'ZohaLand ',
      videoId: 'D_LVSUT6cQI',
      video: 'https://youtube.com/shorts/D_LVSUT6cQI?si=TjV6sSR7n4p3PuO5'
    },
    {
      _id: '6',
      title: 'ZohaLand ',
      videoId: 'D_LVSUT6cQI',
      video: 'https://youtube.com/shorts/D_LVSUT6cQI?si=TjV6sSR7n4p3PuO5'
    }
  ]

useEffect(() => {
  const fetchGallery = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/gallery')

      if (!res.ok) throw new Error('Failed to fetch gallery')

      const data = await res.json()
      console.log('Fetched gallery data:', data)

      // Separate data based on field presence
      const images = data.filter(item => item.image)
      const videos = data.filter(item => item.video)

      setGalleryImages(images)
      setGalleryVideos(videos)
    } catch (err) {
      setError(err.message)
      // fallback dummy videos if fetch fails
      setGalleryVideos(dummyVideos)
    } finally {
      setLoading(false)
    }
  }

  fetchGallery()
}, [])


  const getRandomHeight = () => {
    const heights = ['h-64', 'h-80', 'h-96', 'h-72', 'h-88']
    return heights[Math.floor(Math.random() * heights.length)]
  }

  const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`
  }

  const SkeletonGrid = () => {
    const skeletonCount = 15
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

  const currentData = activeTab === 'images' ? galleryImages : galleryVideos

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

            {/* Toggle Buttons */}
            <div className="flex items-center justify-center mb-8 md:absolute md:bottom-0 md:right-0">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-600/30">
                <button
                  onClick={() => setActiveTab('images')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === 'images'
                      ? 'bg-[#D8FC00] text-black shadow-lg shadow-[#D8FC00]/20'
                      : 'text-white/70 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  Images
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === 'videos'
                      ? 'bg-[#D8FC00] text-black shadow-lg shadow-[#D8FC00]/20'
                      : 'text-white/70 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  Videos
                </button>
              </div>
            </div>
          </div>

          {/* Loading/Error State */}
          {loading && <SkeletonGrid />}
          {error && activeTab === 'images' && (
            <div className="text-center text-red-500 py-20">{error}</div>
          )}

          {/* Pinterest-style Grid */}
          {!loading && (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 md:gap-6 pb-20">
              {currentData.map((item, index) => (
                <div
                  key={item._id || index}
                  className={`break-inside-avoid mb-4 md:mb-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 relative`}
                  onClick={() => {
                    if (activeTab === 'images') {
                      router.push(`/gallery/${item._id || index}`)
                    }
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800">
                    {activeTab === 'images' ? (
                      <Image
                        src={item.image}
                        alt={item.title || 'gallery image'}
                        className={`w-full object-cover ${getRandomHeight()} transition-transform duration-500 group-hover:scale-110`}
                        loading="lazy"
                        width={400}
                        height={400}
                      />
                    ) : (
                      <div onClick={() => window.open(item.video, '_blank')} className="relative cursor-pointer">
                        <iframe
                          src={getYouTubeEmbedUrl(item.videoId)}
                          className={`w-full ${getRandomHeight()} rounded-lg`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Overlay */}
                    <div onClick={() => window.open(item.video, '_blank')} className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:border-2 group-hover:border-[#D8FC00] transition-opacity duration-300 rounded-lg">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-white/80 text-sm">
                          {activeTab === 'images' ? 'Click to view' : 'Video content'}
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && currentData.length === 0 && (
            <div className="text-center text-gray-400 py-20">
              <div className="text-6xl mb-4">
                {activeTab === 'images' ? '🖼️' : '🎥'}
              </div>
              <p className="text-xl">No {activeTab} available</p>
            </div>
          )}
        </div>

        <Knowmore />
      </div>
    </StarPortal>
  )
}

export default GalleryContent
