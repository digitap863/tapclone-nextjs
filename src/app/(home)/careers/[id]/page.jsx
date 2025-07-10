import CareerDetailContent from '@/components/Career/CareerDetailContent'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import { Blog } from '@/models/blog'
import Career from '@/models/career'
import React from 'react'

export const metadata = {
  title: "Tapclone Careers | Join Our Creative Team",
  description: "Explore career opportunities at Tapclone – a creative agency from Kerala delivering top-notch web development, content creation, and digital marketing that drives real results.",
};


const CareerDetails = async ({ params }) => {
  const { id } = await params;
  const job = await Career.findById(id);
  const plainJob = job ? JSON.parse(JSON.stringify(job)) : null;
  
  return (
    <div className='bg-black'>
        <MobileNavbar />
        <NavBar />
        <CareerDetailContent job={plainJob} />
        <Footer />
    </div>
  )
}

export default CareerDetails