import CareerDetailContent from '@/components/Career/CareerDetailContent'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

export const metadata = {
  title: "Tapclone Careers | Join Our Creative Team",
  description: "Explore career opportunities at Tapclone – a creative agency from Kerala delivering top-notch web development, content creation, and digital marketing that drives real results.",
};

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