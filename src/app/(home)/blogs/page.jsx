import BlogListContent from '@/components/Blog/BlogListContent'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

export const metadata = {
  title: "Tapclone Blogs | Insights, Tips & Trends",
  description: "Stay ahead with our latest blog posts on web development, content creation, and digital marketing. We share expert insights and trends to help you grow your business.",
  alternates: {
    canonical: "https://www.tapclone.in/blogs",
  },
};

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