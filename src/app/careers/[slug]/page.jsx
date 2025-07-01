import CareerDetailContent from '@/components/Career/CareerDetailContent'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

const CareerDetails = () => {
  return (
    <div className='bg-black'>
        <MobileNavbar />
        <NavBar />
        <CareerDetailContent />
        <Footer />
    </div>
  )
}

export default CareerDetails