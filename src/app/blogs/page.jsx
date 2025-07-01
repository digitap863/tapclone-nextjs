import BlogListContent from '@/components/Blog/BlogListContent'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

const BlogsPage = () => {
  return (
    <div className='bg-black'>
        <MobileNavbar/>
        <NavBar/>
        <BlogListContent/>
        <Footer/>
    </div>
  )
}

export default BlogsPage