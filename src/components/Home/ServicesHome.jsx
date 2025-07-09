"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { servicesArr } from "../../assets/constants";
import leftarrow from "../../assets/services/arrowleft.png";
import rightarrow from "../../assets/services/arrowright.png";
import { useRouter } from "next/navigation";
import servicepath from "../../assets/home/servicepath.svg";
import planet from "../../assets/home/planet.svg";
import ufoPlanet from "../../assets/Asset 4@3002 28.png";
import Image from "next/image";

function ServicesHome() {
  const router = useRouter();
  return (
    <div className="lg:ml-20 flex flex-col lg:flex-row items-center lg:justify-end relative">
      <div className="lg:w-1/3 heroTextServiceHome flex flex-col items-center lg:items-start relative">
        <h1>
          Our <br /> <span className="text-[#AEEF24]">Services</span>
        </h1>
        <p className="w-[70%] lg:w-[59%] mb-5 text-lg text-gray-300 text-center sm:text-left ">
          We're brand builders at heart, creators by design, tech enthusiasts in
          practice, and integrated at our core.
        </p>

        <button className='border px-10 py-2 mt-5 rounded-full relative overflow-hidden group z-10' onClick={() => router.push("/services")}>
          <span className='absolute left-0 top-0 w-0 h-full bg-white transition-all duration-500 group-hover:w-full -z-10'></span>
          <span className='relative group-hover:text-black transition-colors duration-500'>OUR SERVICES</span>
        </button>
      </div>
      <div className="w-[90%] lg:w-1/2 relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          centeredSlides={true}
          autoplay
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
            clickable: true,
          }}
        >
          {servicesArr.map((elem, index) => (
            <SwiperSlide key={index} className="flex justify-center py-10">
              <div
                className={`flex h[14rem] relative justify-center items-center`}
              >
                <Image src={elem.img} alt="" className="w-[60%]" quality={100} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Image
          src={leftarrow}
          alt=""
          className="absolute z-10 top-[40%] left-[5%] cursor-pointer prev-button"
        />
        <Image
          src={rightarrow}
          alt=""
          className="absolute z-10 top-[40%] right-[5%] cursor-pointer next-button"
        />
      </div>
      <Image
        src={servicepath}
        alt="servicepath"
        className="absolute top-1/2 -translate-y-1/2 left-0 z-0"
      />
      {/* <img src={planet} alt="planet" className='absolute bottom-[-70%] -translate-y-1/2 left-[25%] z-10' /> */}
    </div>
  );
}

export default ServicesHome;
