
"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import GalleryDetailSkeleton from './GallerDetailsSkeleton'


const GalleryDetailComponent = () => {
  const { id } = useParams()
  const router = useRouter()
  const [image, setImage] = useState(null)
  const [relatedImages, setRelatedImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pendingId, setPendingId] = useState(null)

  // Custom navigation handler to avoid white blink
  const handleImageClick = (newId) => {
    if (newId === id) return
    setPendingId(newId)
    router.push(`/gallery/${newId}`)
  }

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('/api/gallery')
        if (!res.ok) throw new Error('Failed to fetch gallery')
        const data = await res.json()
        const found = data.find(img => (img._id || String(data.indexOf(img))) === id)
        if (isMounted) {
          setImage(found)
          setRelatedImages(data.filter(img => (img._id || String(data.indexOf(img))) !== id))
        }
      } catch (err) {
        if (isMounted) setError(err.message)
      } finally {
        if (isMounted) setLoading(false)
        setPendingId(null)
      }
    }
    fetchData()
    return () => { isMounted = false }
  }, [id])

  // If no image ever loaded, show loading/error/empty
  if (!image && loading) return <GalleryDetailSkeleton />
  if (!image && error) return <div className="text-center text-red-500 py-20">{error}</div>
  if (!image) return <div className="text-center text-white py-20">Image not found</div>

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-12 container mx-auto">
      <button className="mb-8 text-[#D8FC00] hover:underline" onClick={() => router.push('/gallery')}>&larr; Back to Gallery</button>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Selected Image */}
        <div className="lg:w-2/5 w-full flex flex-col items-center lg:sticky lg:top-24 self-start relative">
          <Image
            src={image.image}
            alt={image.title || 'gallery image'}
            width={800}
            height={800}
            className="rounded-lg shadow-lg max-h-[70vh] object-contain w-full"
            priority
          />
          {/* Loading overlay */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10 rounded-lg">
              <div className="w-12 h-12 border-4 border-[#D8FC00] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <h2 className="text-3xl font-bold mt-6 mb-2 text-center w-full">{image.title}</h2>
          {image.description && <p className="text-lg text-white/80 mb-8 text-center w-full">{image.description}</p>}
        </div>
        {/* Right: Pinterest Grid of Other Images */}
        <div className="lg:w-3/5 w-full">
          <h3 className="text-2xl font-semibold mb-6">Other Images</h3>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6">
            {relatedImages.map((img, idx) => (
              <div
                key={img._id || idx}
                className="break-inside-avoid mb-4 md:mb-6 cursor-pointer group"
                onClick={() => handleImageClick(img._id || idx)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800">
                  <Image
                    src={img.image}
                    alt={img.title || 'gallery image'}
                    width={400}
                    height={400}
                    className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-2">{img.title}</h3>
                      <p className="text-white/80 text-sm">Click to view</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryDetailComponent 