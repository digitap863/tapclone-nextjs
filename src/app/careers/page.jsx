import CarrerContent from '@/components/Career/CarrerContent'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

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