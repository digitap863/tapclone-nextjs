import CarrerContent from '@/components/Career/CarrerContent'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

export const metadata = {
  title: "Tapclone Careers | Join Our Creative Team",
  description: "Explore career opportunities at Tapclone – a creative agency from Kerala delivering top-notch web development, content creation, and digital marketing that drives real results.",
};

const Careers = () => {
  return (
    <div className='bg-black'>
      <MobileNavbar />
      <NavBar />
      <CarrerContent />
      <Footer />
    </div>
  )
}

export default Careers