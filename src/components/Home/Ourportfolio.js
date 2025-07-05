import React from 'react'
import digitalfolio from '../../assets/home/digitalfolio.png'
import grid from "../../assets/home/grid.png"
import portfolio from "../../assets/home/portfoliopath.svg"
import Image from 'next/image'


const Ourportfolio = () => {
    return (
        <section className='relative'>
            <div className="container mx-auto px-4 py-10 sm:py-16 md:p-20 mt-20 md:mt-60">
                <div className='flex flex-col-reverse md:flex-row justify-between items-center w-full gap-10 md:gap-0'>
                    <div className='w-full md:w-1/2 flex flex-col items-center justify-center relative mb-10 md:mb-0'>
                        <div className='relative self-end w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto'>
                            <Image src={digitalfolio} alt="digitalfolio" className='relative z-20 w-full h-auto' />
                            <p className='text-lg sm:text-xl md:text-2xl font-poppins font-bold absolute bottom-0 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap'>DIGITAL FOLIO</p>
                            <Image src={grid} alt="grid" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-3/4 sm:w-full' />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 text-right flex flex-col items-center lg:items-end justify-center heroTextServiceHome relative'>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Our <br className='hidden lg:block' /> <span className='text-[#AEEF24]'>Portfolio</span></h1>
<<<<<<< HEAD
                        <p className='max-w-sm text-lg text-gray-300 md:text-2xl font-poppins font-thin mt-4 text-center lg:text-right'>Explore our portfolio to see a showcase of our expertise, creativity, and successful projects across various industries.</p>
=======
                        <p className='max-w-sm text-base sm:text-lg md:text-2xl font-poppins font-thin mt-4 text-center lg:text-right'>Explore our portfolio to see a showcase of our expertise, creativity, and successful projects across various industries.</p>
>>>>>>> 81de2d7c8b7de620571f095c72f32473d0cfb6c2
                        <button className='border px-6 sm:px-8 md:px-10 py-2 mt-6 md:mt-10 rounded-full relative overflow-hidden group z-10 text-sm sm:text-base'>
                            <span className='absolute left-0 top-0 w-0 h-full bg-white transition-all duration-500 group-hover:w-full -z-10'></span>
                            <span className='relative group-hover:text-black transition-colors duration-500'>OUR PROJECTS</span>
                        </button>
                    </div>
                </div>
            </div>
            <Image src={portfolio} alt="portfolio" className='hidden md:block absolute top-1/2 -translate-y-1/2 right-0 ' />
        </section>
    )
}

export default Ourportfolio
