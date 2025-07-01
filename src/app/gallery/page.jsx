import Footer from '@/components/Footer/Footer'
import GalleryContent from '@/components/Gallery/GalleryContent'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

const GalleryPage = () => {
  return (
    <div className='bg-black'>
      <MobileNavbar />
      <NavBar />
      <GalleryContent />
      <Footer />
    </div>
  )
}

export default GalleryPage