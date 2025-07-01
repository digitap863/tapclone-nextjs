import BlogDetailContent from '@/components/Blog/BlogDetailContent'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

const BlogDetails = () => {
  return (
    <div className='bg-black'>
      <MobileNavbar/>
      <NavBar/>
      <BlogDetailContent/>
      <Footer/>
    </div>
  )
}

export default BlogDetails