import BlogDetailContent from '@/components/Blog/BlogDetailContent'
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import React from 'react'

export const metadata = {
  title: "Tapclone Blog | Insights, Tips & Trends",
  description: "Stay ahead with our latest blog posts on web development, content creation, and digital marketing. We share expert insights and trends to help you grow your business.",
};

const BlogDetails = async ({ params }) => {

  return (
    <div className='bg-black'>
      <MobileNavbar/>
      <NavBar/>
      <BlogDetailContent params={params}/>
      <Footer/>
    </div>
  )
}

export default BlogDetails