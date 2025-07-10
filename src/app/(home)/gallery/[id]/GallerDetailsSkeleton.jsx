// Skeleton Loader for Gallery Detail
const GalleryDetailSkeleton = () => (
    <div className="min-h-screen bg-black text-white p-4 md:p-12 container mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 animate-pulse">
        {/* Left: Main Image Skeleton */}
        <div className="lg:w-2/5 w-full flex flex-col items-center lg:sticky lg:top-24 self-start relative">
          <div className="rounded-lg bg-gray-700/60 w-full max-h-[70vh] aspect-square mb-6"></div>
          <div className="h-8 w-3/4 bg-gray-700/60 rounded mb-2"></div>
          <div className="h-5 w-1/2 bg-gray-700/60 rounded mb-8"></div>
        </div>
        {/* Right: Grid Skeleton */}
        <div className="lg:w-3/5 w-full">
          <div className="h-7 w-1/3 bg-gray-700/60 rounded mb-6"></div>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6">
            {Array.from({ length: 9 }).map((_, idx) => (
              <div key={idx} className="break-inside-avoid mb-4 md:mb-6">
                <div className="rounded-lg bg-gray-700/60 w-full h-64"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

export default GalleryDetailSkeleton