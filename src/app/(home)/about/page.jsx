import AboutMain from '@/components/About/AboutMain'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

export const metadata = {
  title: "Best digital marketing agency in kochi,Kerala",
  description: "TapClone, the best digital marketing agency in Kochi, Kerala, provides ROI-driven digital marketing, engaging content, and custom website development to grow brands.",
  keywords: "best seo company near me, social media marketing agency in kochi, website design company in kerala, best seo services, digital marketing agency kochi, ui ux design services in kochi, digital marketing company in cochin",
  alternates: {
    canonical: "https://www.tapclone.in/about",
  },
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