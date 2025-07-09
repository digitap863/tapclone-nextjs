
import StarPortal from "../Shared/StarBlinkingPortal";
import astro from "../../assets/home/astro2.svg";
import blog from "../../assets/home/blogimage.png";
import Image from "next/image";
import Link from "next/link";
import Knowmore from "../Shared/Knowmore";
import { connect } from "@/dbConfig/db.Config";
import { Blog } from "@/models/blog";

const BlogListContent = async () => {
  await connect();
  const blogs = await Blog.find();
  return (
    <StarPortal>
      <div className="w-full relative min-h-screen">
        <Image src={astro} alt="astro" className="absolute top-6 right-2 sm:top-12 sm:right-4 md:top-20 md:right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-auto md:h-auto " />
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 pt-20">
          <div className="flex flex-col items-center justify-center min-h-[30vh] sm:min-h-[40vh] relative">
            <h2 className="text-[#D8FC00] text-6xl md:text-8xl lg:text-9xl font-poppins font-extrabold leading-[1.1] animate-[textStroke_0.5s_ease-out_2.5s_forwards] inline-block mb-4 sm:mb-6 md:mb-8 text-center">
              Blogs
            </h2>
            <p className="text-white text-sm sm:text-lg md:text-xl font-poppins font-thin max-w-2xl text-center px-2">
              From Strategy to Success – Expert Digital Marketing Insights
            </p>
          </div>
          <div className="mt-8 sm:mt-10">
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-poppins font-thin max-w-2xl text-left px-2">
              Latest Blogs
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:mt-5">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
        <Knowmore />
      </div>
    </StarPortal>
  );
};

export default BlogListContent;
const BlogCard = ({ blog }) => {
  const createdAtISO = blog.createdAt ? new Date(blog.createdAt).toISOString() : '';
  let contentHtml = blog.content.slice(0, 350);
  if (blog.content.length > 350) {
    contentHtml += '<span class="text-[#D8FC00] ml-1">read more</span>';
  }
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="flex flex-col bg-[#18181b]/80 border border-[#2e2e38] shadow-lg rounded-xl overflow-hidden my-2 sm:my-4 backdrop-blur-md transform transition duration-300 hover:scale-95 hover:shadow-2xl hover:border-[#D8FC00] relative z-10">
        {/* Image Section */}
        <div className="w-full aspect-[16/9] bg-[#232323] overflow-hidden">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            width={400}
            height={225}
            className="w-full h-full object-cover transition duration-300 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        {/* Text Section */}
        <div className="w-full flex flex-col justify-center p-4 sm:p-6 transition duration-300">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2 text-white hover:text-[#D8FC00] transition duration-300">
            {blog.title}
          </h2>
          <p className="text-gray-300 mb-2 sm:mb-4 lineclamp-4 hover:text-white transition duration-300 text-xs sm:text-sm">
            <span dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </p>
          <div className="text-gray-500 text-xs sm:text-sm mt-auto group-hover:text-gray-400 transition duration-300" data-date={createdAtISO}>
            {createdAtISO && (
              <span suppressHydrationWarning>{new Date(createdAtISO).toLocaleDateString()}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
