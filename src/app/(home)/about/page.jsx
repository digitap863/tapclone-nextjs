import AboutMain from '@/components/About/AboutMain'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

export const metadata = {
  title: "About Tapclone | Web, Content & Marketing Experts from Kerala",
  description: "Get to know Tapclone – a creative agency from Kerala delivering top-notch web development, content creation, and digital marketing that drives real results.",
};

const About = () => {
  return (
    <div className="homeMin overflow-hidden" style={{ backgroundColor: "black" }}>
    <MobileNavbar />
    <NavBar />
    <AboutMain />
    <Footer />
  </div>
  )
}

export default About