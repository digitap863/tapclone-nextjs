"use client"
import React, { useState } from 'react'; 
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import StarBlinkingPortal from "../../components/Shared/StarBlinkingPortal.jsx"
import grids from "../../assets/service/grids.svg";
import grids2 from "../../assets/service/grids2.png";
import { Autoplay,  Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

function FeatureBlock({section}) {
  // State to manage the number of visible features
  const [visibleItems, setVisibleItems] = useState(6);
  
  const features = section.section4?.features || [];
  const totalFeatures = features.length ;

  // Function to show all features
  const showMoreItems = () => {
    console.log(totalFeatures)
    setVisibleItems(totalFeatures);
  };

  return (
     <StarBlinkingPortal>
     <section className=" text-white antialiased font-poppins">
     <div className="mx-auto max-w-7xl px-4 py-0 sm:px-6 lg:pt-20 lg:px-8 ">

      {/* section 1 */}
    <motion.div 
      className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2 lg:gap-x-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="flex flex-col justify-center relative" variants={fadeInLeft} >
        <Image src={grids} alt="grids" className = "absolute -top-10 left-0 object-contain w-[97%] h-auto -z-10 md:hidden block  "    />
      <motion.h1 className="  md:pl-0 pl-6 text-2xl font-bold tracking-tight lg:text-5xl text-[#59FF79]">
      {section?.section1?.title1?.map((line, index) => (
            <motion.span key={index} className={`block uppercase`} variants={staggerItem}>
              {line}
            </motion.span>
          ))}
      </motion.h1>
           <motion.p className="mt-6  md:pl-0 pl-6  md:text-lg text-base uppercase tracking-wider text-gray-300  pr-6" variants={fadeInUp}>
            {section.section1?.subtitle1}
           </motion.p>
     
      </motion.div>

      <motion.div className="flex items-center justify-center" variants={fadeInRight}>
        
      <Image
          src={section.section1?.image1?.src}
          alt={section.section1?.image1?.alt}
          className="object-contain h-auto w-full moving-effect"
      />    
      </motion.div>

    </motion.div>

    {/*  section 2 - Spacer between section */}
    {section?.section2 && (
      <>
    <div className="my-16 lg:my-24"></div>
    <motion.div 
      className="grid grid-cols-1 flex-col-reverse items-center gap-y-16 gap-x-8 lg:grid-cols-2 lg:gap-x-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="order-2 lg:order-1 flex items-center justify-center" variants={fadeInLeft}>
      <Image
          src={section.section2.image2?.src}
          alt="Google My Business location on a map"
          className="object-contain h-auto w-full moving-effect"
      />
      </motion.div>

      <motion.div className="order-1 lg:order-2 flex flex-col justify-center relative " variants={fadeInRight}>
        <Image src={grids} alt="grids" className = "absolute -top-5 -left-1 object-contain w-[100%] h-auto -z-10 md:hidden block" />
      <motion.h2 className=" font-bold tracking-tight text-2xl sm:text-4xl lg:text-5xl text-[#FA8957] relative  md:pl-0 pl-2">
      {section?.section2?.title2?.map((line, index) => (
            <motion.span key={index} className={`block uppercase`} variants={staggerItem}>
              {line}
            </motion.span>
          ))}
      </motion.h2>

      <motion.p className="md:mt-6 mt-4 text-base leading-relaxed text-gray-300 md:space-y-3  space-y-10 md:pl-0 pl-2 " variants={fadeInUp}>
      {section?.section2?.paragraphs2?.map((line, index) => (
            <motion.span key={index} className={`block`} variants={staggerItem}>
              {line}
            </motion.span>
          ))}
      </motion.p> 
        <Image src={grids2} alt="grids2" className = "absolute -bottom-6 left-0 object-contain w-[97%] h-auto -z-10 md:hidden block  "    />

      
      </motion.div>

    </motion.div>
    </>
    )}

    {/* section 3 */}
    <motion.div 
      className=" py-16  px-1 md:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto md:text-center text-left">
        {/* Main Title */}
        <motion.h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight  text-[#7E59CE] font-poppins pr-6 uppercase" variants={fadeInUp}>
          {section.section3.title }
        </motion.h1>

        {/* Paragraphs */}
        <motion.div className="mt-8 sm:mt-10 space-y-6 text-base sm:text-lg leading-relaxed text-gray-300" variants={staggerContainer}>
          {section.section3.paragraphs && section.section3.paragraphs.map((paragraph, index) => (
            <motion.p key={index} className='text-base leading-relaxed text-gray-300' variants={staggerItem}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Image */}
        <motion.div className="mt-12 sm:mt-8 flex justify-center relative" variants={scaleIn}>
        <Image src={grids} alt="grids" className = "absolute -top-2 left-0 object-contain w-[99%] h-auto -z-10 md:hidden block  "    />

          {section.section3.image && (
              <Image
                src={section.section3?.image?.src}
                alt={section.section3.image.alt || 'Feature image'}
                className="object-contain h-auto md:w-auto w-[90%]"
              />
          )}
        </motion.div>
      </div>
    </motion.div>

    {/* section 4 */}
    <motion.div
      className="py-16 md:py-20 md:px-6 lg:px-8 font-poppins"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="md:text-center text-left" variants={fadeInUp}>
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-[#35F55B] tracking-wider" variants={staggerItem}>
            {section.section4?.title}
          </motion.h2>
          <motion.p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300" variants={staggerItem}>
            {section.section4?.subtitle}
          </motion.p>
        </motion.div>

        {/* Swiper for Mobile View (visible below 'md' breakpoint) */}
        <div className="mt-16 block md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop ={true}
            pagination={{ clickable: true }}
            className="pagination-white" // Added padding-bottom to show pagination dots
          >
            {section.section4?.features.map((feature) => (
              <SwiperSlide key={feature.number} className="h-96 pb-10">
                <div className="bg-gradient-to-b from-[#02060b]/40 via-[#1b2b3e]/40 to-[#283F5C]/20 backdrop-blur-md backdrop-saturate-150 shadow-lg border border-[#35F55B]/50 p-8 rounded-2xl flex flex-col items-center text-center h-full">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-b from-[#35F55B] to-[#237CF9] text-white font-bold text-xl mb-6">
                    {feature.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white font-light text-sm leading-relaxed">{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Desktop View (hidden below 'md' breakpoint) */}
        <motion.div className={`md:mt-16 hidden md:grid gap-8 md:grid-cols-${section.section4?.count} ${section.section4?.count == 2 ? 'px-32' : 'px-0'}`} variants={staggerContainer}>
          <AnimatePresence>
          {section.section4?.features.slice(0, visibleItems).map((feature) => (
            <motion.div
              key={feature.number}
              className="bg-gradient-to-b from-[#02060b]/40 via-[#1b2b3e]/40 to-[#283F5C]/20 backdrop-blur-md backdrop-saturate-150 shadow-lg border border-[#35F55B]/50 p-8 rounded-2xl flex flex-col items-center text-center"
               variants={staggerItem}
        initial="hidden"  // Animate from this state
        animate="visible" // Animate to this state
        exit="hidden"     // Animate to this state on removal
        layout // This helps animate layout changes smoothly
        
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-b from-[#35F55B] to-[#237CF9] text-white font-bold text-xl mb-6">
                {feature.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white font-light text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

         {totalFeatures > 6 && visibleItems < totalFeatures && (
                <div className="hidden md:flex justify-center mt-12">
                  <motion.button
                    onClick={showMoreItems}
                    className="bg-gradient-to-r from-[#35F55B] to-[#237CF9] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Load More
                  </motion.button>
                </div>
              )}

      </div>
    </motion.div>

    {/* section 5 */}
    {section.section5 && (
    <motion.div 
      className="py-10 md:py-24 px-0 md:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <motion.div 
        className="max-w-7xl mx-auto md:text-center text-left bg-gradient-to-b from-[#02060b]/40 via-[#1b2b3e]/40 to-[#283F5C]/20 backdrop-blur-md backdrop-saturate-150 shadow-lg border border-[#DF248A]/50 rounded-3xl p-4 md:p-12"
        variants={scaleIn}
      >
        {/* Header */}
        <motion.h2 className="text-2xl md:text-4xl font-bold text-pink-500 tracking-wide" variants={fadeInUp}>
          {section.section5?.title}
        </motion.h2>
        <motion.p className="mt-4 text-lg text-gray-300 tracking-wider" variants={fadeInUp}>
          {section.section5?.subtitle}
        </motion.p>

        {/* Main Paragraphs */}
        <motion.div className="mt-8 space-y-5 text-gray-300 text-left text-base leading-relaxed" variants={staggerContainer}>
          {section.section5?.mainParagraphs && section.section5?.mainParagraphs.map((p, i) => 
            <motion.p key={i} variants={staggerItem}>{p}</motion.p>
          )}
        </motion.div>
        
        {/* Features Grid */}
        <motion.div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 text-left" variants={staggerContainer}>
          {section.section5?.features && section.section5?.features.map((feature, i) => (
            <motion.div key={i} className="flex items-start space-x-4" variants={staggerItem}>
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                <CheckmarkIcon />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-gray-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Concluding Paragraphs */}
        <motion.div className="mt-12 space-y-5 text-gray-300 text-left text-base leading-relaxed" variants={staggerContainer}>
          {section.section5?.concludingParagraphs && section.section5?.concludingParagraphs.map((p, i) => 
            <motion.p key={i} variants={staggerItem}>{p}</motion.p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
    )}

    {/* section 6 */}
    {section.section6 && (
    <motion.div 
      className="py-12 sm:py-24 px-0 md:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-5xl mx-auto">

         <motion.h2 className="text-2xl md:text-4xl font-bold md:text-center text-[#FCF06A] tracking-wide pb-4" variants={fadeInUp}>
          {section.section6?.title}
        </motion.h2>

        <motion.h2 className="text-lg md:text-2xl font-base md:text-center text-gray-200 tracking-wider" variants={fadeInUp}>
          {section.section6?.subtitle}
        </motion.h2>

        <div className="mt-16 md:space-y-20 space-y-10">
          {section.section6 && section.section6?.sections.map((sectionItem, index) => (
            <motion.div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-6"
              variants={staggerItem}
            >
              <motion.div 
                className={`  text-gray-300 leading-relaxed ${index % 2 !== 0 ? 'order-last' : 'md:order-first order-last '}`}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <p>{sectionItem.paragraph}</p>
              </motion.div>

              <motion.div 
                className="flex justify-center lg:order-1 order-1 "
                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
              >
                <Image
                  src={sectionItem.image.src}
                  alt={sectionItem.image.alt}
                  className={`object-contain h-auto w-full  ${index % 2 === 0 ? 'moving-effect' : 'moving-effect2'}`}
                /> 
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
      )}

    {/* section 7 */}
     {section.section7 && (
    <motion.div 
      className="bg-black text-white font-sans antialiased py-16 sm:py-24 px-0 md:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Text Content */}
        <motion.div className="space-y-8" variants={fadeInLeft}>
          <motion.h2 className="text-2xl md:text-5xl font-semibold text-[#35F55B] font-poppins" variants={fadeInUp}>
            {section.section7?.titleLines && section.section7?.titleLines.map((line, i) => 
              <motion.span key={i} className="block" variants={staggerItem}>{line}</motion.span>
            )}
          </motion.h2>
           <motion.div className="flex justify-center items-center md:hidden " variants={scaleIn}>
            <Image src={section.section7?.imageUrl} alt={section.section7?.imageAlt} className="w-auto h-52 object-contain moving-effect" />
          </motion.div>
          <motion.div className="space-y-6 text-gray-300 leading-relaxed" variants={staggerContainer}>
            {section.section7?.paragraphs && section.section7?.paragraphs.map((p, i) => 
              <motion.p key={i} variants={staggerItem} className='capitalize'>{p}</motion.p>
            )}
          </motion.div>
        </motion.div>

        <motion.div className="space-y-8" variants={fadeInRight}>
          <motion.div className="md:flex justify-center items-center hidden " variants={scaleIn}>
            <Image src={section.section7?.imageUrl} alt={section.section7?.imageAlt} className="w-auto h-52 object-contain moving-effect2" />
          </motion.div>
          <motion.div 
            className="md:p-8 p-6  border border-[#35F55B]/50 rounded-2xl bg-gradient-to-b from-[#02060b]/40 via-[#1b2b3e]/40 to-[#283F5C]/20 backdrop-blur-md backdrop-saturate-150 shadow-lg"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-white mb-6">{section.section7?.services.title}</h3>
            <motion.ul className="space-y-4" variants={staggerContainer}>
              {section.section7?.services.list && section.section7?.services.list.map((item, i) => (
                <motion.li key={i} className="flex items-start" variants={staggerItem}>
                  <span className="text-[#35F55B] mr-3 mt-1">&#8226;</span>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
      )}

    {/* section 8 */}
     {section.section8 && (
    <motion.div 
      className="py-4 md:py-10 px-0 md:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <motion.div 
        className="max-w-7xl mx-auto md:text-center text-left bg-gradient-to-b from-[#02060b]/40 via-[#1b2b3e]/40 to-[#283F5C]/20 backdrop-blur-md backdrop-saturate-150 shadow-lg border border-[#DF248A]/50 rounded-3xl p-4 md:p-12"
        variants={scaleIn}
      >
        {/* Header */}
        <motion.h2 className="text-2xl sm:text-4xl font-bold text-[#68F555] tracking-wide md:w-full w-[60%]" variants={fadeInUp}>
          {section.section8?.title}
        </motion.h2>
        <motion.p className="mt-4 text-lg text-gray-300 tracking-wider" variants={fadeInUp}>
          {section.section8?.subtitle}
        </motion.p>

        {/* Main Paragraphs */}
        <motion.div className="mt-8 space-y-5 text-gray-300 text-left text-base leading-relaxed" variants={staggerContainer}>
          {section.section8?.mainParagraphs }
        </motion.div>
        
        {/* Features Grid */}
        <motion.div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 text-left" variants={staggerContainer}>
          {section.section8?.features && section.section8?.features.map((feature, i) => (
            <motion.div key={i} className="flex items-start space-x-4" variants={staggerItem}>
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                <CheckmarkIcon />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-gray-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Concluding Paragraphs */}
        <motion.div className="mt-12 space-y-5 text-gray-300 text-left text-base leading-relaxed" variants={staggerContainer}>
          {section.section8?.concludingParagraphs && section.section8?.concludingParagraphs.map((p, i) => 
            <motion.p key={i} variants={staggerItem}>{p}</motion.p>
          )}
        </motion.div>

        <motion.div className="mt-12 text-center" variants={fadeInUp}>
          <Link href="/contact">
          <motion.button  
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:font-bold font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.section8?.buttonText}
          </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
     )}

    </div>
  </section>
  </StarBlinkingPortal>
  )
}

const CheckmarkIcon = () => (
  <svg className="w-6 h-6 text-white" fill="white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3z"></path>
  </svg>
);

export default FeatureBlock