"use client"
import React from 'react'
import bubPlanet from "../../assets/bubblePlanet.svg";
import curvPath from "../../assets/headCurvPath.png";
import tailPlanet from "../../assets/navbar_planet.png";
import "../../components/About/About.css";
import "../../components/Services/Services.css";
import Image from "next/image";
import StarBlinkingPortal from "../../components/Shared/StarBlinkingPortal.jsx";


function Banner({title,className}) {
  return (
    <StarBlinkingPortal>
      <div style={{ width: "100%", overflowX: "hidden" }}>

    <div className='md:h-[60vh] h-[50vh] overflow-y-visible'>
         <div className="header">
             <div className="logoSection">
             </div>
           </div>

           <div className="aboutMain ">
             <div className="about-planetsWrap !w-[60%] py-20 sm:py-0 !md:w-[45%] lg:!w-[40%] " >
               {/* <h2 className='text-[#19FB56] md:text-6xl text-2xl !font-semibold md:pl-2  pl-0 whitespace-nowrap about-title'>{title}</h2> */}
               <Image
                  className={`aboutHeading mx-auto ${className} `}
                  src={title}
                  alt=""
                />
               <Image className="planet-Path" src={curvPath} alt="curvPath" />
               <Image className="bubble-Planet" src={bubPlanet} alt="bubPlanet" />
               <Image className="tail-Planet" src={tailPlanet} alt="tailPlanet" />
             </div>   
        </div>
        </div>
      
    </div>
    </StarBlinkingPortal>
  )
}

export default Banner
