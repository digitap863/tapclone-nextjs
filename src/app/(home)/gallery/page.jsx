import Footer from '@/components/Footer/Footer'
import GalleryContent from '@/components/Gallery/GalleryContent'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

export const metadata = {
  title: "Tapclone Gallery | Our Work Speaks for Us",
  description: "Explore our portfolio of web development, content creation, and digital marketing projects. We deliver tailored solutions that drive real results.",
};

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