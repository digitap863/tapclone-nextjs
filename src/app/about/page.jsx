import AboutMain from '@/components/About/AboutMain'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

const About = () => {
  return (
    <div className="homeMin" style={{ backgroundColor: "black" }}>
    <MobileNavbar />
    <NavBar />
    <AboutMain />
    <Footer />
  </div>
  )
}

export default About