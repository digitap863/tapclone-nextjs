"use client"
import React, { useState } from "react";
import "./Services.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heading from "../../assets/services/services.svg";
import service1 from "../../assets/services/Asset 11web development 1.svg";
import service2 from "../../assets/services/Asset 12UI ux.svg";
import service3 from "../../assets/services/Asset 16branding 1.svg";
import service4 from "../../assets/services/Asset 17SOCIAL MEDIA 1.svg";
import service5 from "../../assets/services/Asset 18SEO 1.svg";
import service6 from "../../assets/services/Asset 20GMP 1.svg";
import ufoPlanet1 from "../../assets/Asset 4@3002 28.png";
import ufoPlanet2 from "../../assets/Asset 5@30 1.png";
import bluePlanet from "../../assets/bluePlanet.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import NavBar from "../Home/NavBar";
import MobileNavbar from "../Home/MobileNavbar";
import grid from "../../assets/services/grid_behind_icons.svg";
import StarPortal from "../Shared/StarBlinkingPortal";
import Image from "next/image";
import Knowmore from "../Shared/Knowmore";


function ServicesMain() {
  const servicesArr = [
    {
      id: 1,
      title: "Web Development",
      img: service1,
      para: `The websites that We create can vary in complexity according to your requirement from a simple webpage to a complicated ecommerce or social networking site plus practically anything in between. <br/> <br/>

      From the Initial stage, our Ui/Ux design team and the development team work in tandem, ensuring that the website is both aesthetically pleasing and User-friendly. <br/> <br/>
      
      In the elaborated process of web development we keep it simple for you
      <br/>
      <br/>
      `,
      
    },
    {
      id: 2,
      title: "UI/UX Development",
      img: service2,
      para: `In the initial phase of the design process, our designers diligently gather comprehensive requirements and insights from your end. This meticulous data collection serves as the foundation for seamlessly incorporating your preferences and needs into the final product that we ultimately deliver to you. <br/> <br/>

      UI/UX design and web development are interconnected stages in the creation of a digital product. Effective collaboration between designers and developers is crucial to ensure a cohesive and successful end result that not only looks visually appealing but also provides a seamless and enjoyable user experience
      `,
      
    },
    {
      id: 3,
      title: "Branding",
      img: service3,
      para: `Founding the importance of branding goes beyond the act of Founding a business 

      It's about captivating hearts, stirring emotions, and crafting a mesmerizing narrative. Let's  step away from the stereotype of selling products and embrace the art of creating experiences. <br/><br/>

      With the right branding, you have the remarkable ability to shape the purchasing experience. Being able to control and shape the purchasing experience is the power of branding at work.

      
      How do we set you apart from your rivals? It's the enchanting story we help you weave, the identity that pulsates with uniqueness, by making you unmissable amidst a sea of competition. <br/><br/>

      Our goal? To carve out a clear space in the minds of your audience, where you are their cherished and unrivaled choice. Through our expertise, be known, loved, and preferred      
      `,
      
    },
    {
      id: 4,
      title: "Social Media Management",
      img: service4,
      para: `More than ever social media has become the anchoring environment for all businesses. And we, as market players, evolve with the trends of social media. <br/> <br/>

      As owners of businesses who are targeting to grow their consumer base should really have a strong digital base first. A business page is one thing to start with but utilizing it the right way is something every business seems to struggle with  <br/> <br/>
      
      So  instead of posting promotions for users without any thought. We make sure that the content you post satisfies connection and engages in communication while building community `,

    },

    {
      id: 5,
      title: "Organic SEO",
      img: service5,
      para: `Imagine your ideal customers - From the perfect restaurant to the most reliable B2B software providers, they rely on search engines to find whatever their hearts desire. And if you want to captivate their attention, you need to be on the preferred section of google, which is the first 10 results. For that you need to embrace the power of search engine optimization (SEO). <br/> <br/>

      Make no mistake - SEO is not just some passing trend or a bonus add-on. It's a crucial element of any marketing plan aimed at attracting qualified leads and boosting sales. By improving your site's search engine rankings, SEO can help your business reach new audiences.
      
      `,

    },
    {
      id: 6,
      title: "Google My Business",
      img: service6,
      para: `
      Did you know that 97% of people turn to the online realm when seeking information about a store location or a local business? <br/><br/>
      
      
      As a business owner, you understand the importance of being in the right place at the right time. And in the digital world, that place is none other than the screens of your potential customers. <br/><br/>
      
      
      Google My Business is one of Google’s free features that help you increase your company’s visibility by showcasing all the relevant information in search engines <br/><br/>
      
      
      Imagine your business being front and center when potential customers in and around your store location search for the services you offer. Imagine captivating their attention and drawing them in with all the relevant information
       `,

    },
  ];
  

  


  

  

  return (
    <StarPortal>
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <MobileNavbar />
        <NavBar />
        <div className="header">
          <div className="logoSection"></div>
        </div>
        <div className="serviceMain">
          <div className="service-head-wrap w-full py-20 sm:py-0 !md:w-[55%] " >
            <Image
              className="header-1 w-[60%] md:!w-[40%] mx-auto "
              src={heading}
              alt=""
            />
            <Image className="blue-planet" src={bluePlanet} alt="bluePlanet" />
          </div>
          <div className="md:hidden w-[100%] mt-16">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={20}
              touchRatio={1}
              touchAngle={45}
              grabCursor={true}
              resistance={true}
              resistanceRatio={0.85}
              breakpoints={{
                // Mobile devices (320px and up)
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // Small tablets (480px and up)
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 25,
                },
                // Tablets (768px and up)
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                },
                // Large tablets (1024px and up)
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                // Desktop (1200px and up)
                1200: {
                  slidesPerView: 2.25,
                  spaceBetween: 150,
                },
              }}
            >
              {servicesArr.map((elem,index) => (
                <SwiperSlide key={index}>
                  <div className="w-full flex justify-center flex-col items-center p-4 min-h-[200px]">
                    <div className="w-full flex justify-center">
                      <Image 
                        src={elem.img} 
                        alt="service" 
                        className="w-[70%] h-32 md:h-40 object-contain" 
                      />
                    </div>
                    <h5 className="text-xl md:text-2xl font-semibold mt-4 text-center">
                      {elem.title}
                    </h5>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="serviceDetails !hidden md:!grid">
            {servicesArr &&
              servicesArr.map((items) => (
        
                  <div
                    className=" serv-1 md:!flex !hidden  cursor-pointer  items-center justify-center mx-auto"
                    style={{
                      backgroundImage: `url('${grid}')`,
                      backgroundSize: "cover",
                    }}
                    key={items.id}
                  >
                    <Image src={items.img} alt="service" />
                    <h5 className="mb-10">{items.title}</h5>
                  </div>
                  // <div
                  //   className=" w-[80%]   bg-slate-700/30 backdrop-blur-md rounded-2xl border border-gray-600 cursor-pointer px-6 py-6  2xl:py-10"
                  //   onMouseLeave={() => handleClick(items.id)}
                  // >
                  //   <h4 className="">{items.title}</h4>
                  //   <p
                  //     className="text-[0.780rem]  2xl:text-[0.900rem] mt-3 2xl:mt-5"
                  //     dangerouslySetInnerHTML={{ __html: items.para }}
                  //   ></p>
                  // </div>
   
              ))}

            <Image
              className="planetImage1"
              style={{
                animation: "GFG-Planet 10s linear 1s infinite",
              }}
              src={ufoPlanet1}
              alt="ufoPlanet1"
            />
            <Image
              className="planetImage2"
              style={{
                animation: "GFG-Planet 10s linear 1s alternate infinite",
              }}
              src={ufoPlanet2}
              alt="ufoPlanet2"
            />
          </div>
     
          <Knowmore />
        </div>
      </div>

    </StarPortal>
  );
}

export default ServicesMain;
