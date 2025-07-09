
import React from "react";
import StarPortal from "../Shared/StarBlinkingPortal";
import { IoArrowBackSharp } from "react-icons/io5";
import blog from "../../assets/home/blogimage.png";
import Image from "next/image";
import Link from "next/link";
import { connect } from "@/dbConfig/db.Config";
import { Blog } from "@/models/blog";

const BlogDetailContent = async ({ params }) => {
  await connect();
  const blog = await Blog.findOne({ slug: params.slug });
 
  const createdAt = blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : '';
  const content = typeof blog.content === 'string' ? blog.content : '';
  return (
    <StarPortal>
      <div className="min-h-screen flex flex-col items-center bg-black  pt-32 px-2">
        <div className="w-full max-w-screen-lg mx-auto bg[#18181b]  shadow-lg borde border-[#232323] overflow-hidden">
          {/* Featured Image */}
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            width={1200}
            height={500}
            className="w-full sm:h-[50vh] object-cover object-center rounded-lg relative z-10 "
          />
          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Back Button */}
            <Link href='/blogs'>
              <div className="mb-6 text-gray-400 hover:text-[#D8FC00] flex items-center gap-2 transition">
                <IoArrowBackSharp size={20} />
                <span className="text-sm">Back to Blogs</span>
              </div>
            </Link>
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              {blog.title}
            </h1>
            {/* Author & Date */}
            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-8">
              <span>by team tapclone</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full inline-block"></span>
              <span>{createdAt}</span>
            </div>
            {/* Blog Content */}
            <div className="prose prose-invert max-w-none text-[#F0ECEC] text-sm md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </StarPortal>
  );
};

export default BlogDetailContent;
