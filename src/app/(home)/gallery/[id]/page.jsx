import React from 'react'
import GalleryDetailComponent from './GalleryDetailComponent'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'

export const metadata = {
  title: "Tapclone Gallery | Our Work Speaks for Us",
  description: "Explore our portfolio of web development, content creation, and digital marketing projects. We deliver tailored solutions that drive real results.",
};

const GalleryDetailPage = () => {
  return (
    <div className='bg-black'>
        <MobileNavbar />
        <NavBar />
        <div className='min-h-screen'>
            <GalleryDetailComponent />
        </div>
        <Footer />
    </div>
  )
}

export default GalleryDetailPage