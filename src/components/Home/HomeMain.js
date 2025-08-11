"use client"
import { React, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SwipeButton from "./SwipeButton";
import Footer from "../Footer/Footer";
import NavBar from "./NavBar";
import ProjectSection from "./ProjectSection";
import "./Home.css";
import "./Animation.css";
import layer from "../../assets/Layer 3.png";
import ASTRO42 from "../../assets/svg/ASTRO42.svg";
import ufo from "../../assets/svg/ufo.svg";
import ufoPlanet from "../../assets/Asset 4@3002 28.png";
import rocket from "../../assets/svg/rocket.svg";
import blueplanet from "../../assets/bluePlanet.png";
import { Plus, Minus } from 'lucide-react';
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ufo2 from "../../assets/svg/Layer 4.svg";
import ufoLight from "../../assets/svg/light.svg";
// import Slider from "react-slick";
import logo_1 from "../../assets/home/logo_1.png";
import logo_2 from "../../assets/home/logo_2.png";
import logo_3 from "../../assets/home/logo_3.png";
import logo_4 from "../../assets/home/logo_4.png";
import logo_6 from "../../assets/home/logo_6.png";
import logo_7 from "../../assets/home/logo_7.png";
import logo_8 from "../../assets/home/logo_8.png";
import logo_9 from "../../assets/home/logo_9.png";
import logo_10 from "../../assets/home/logo_10.png";
import logo_11 from "../../assets/home/logo_11.png";
import logo_12 from "../../assets/home/logo_12.png";
import logo_13 from "../../assets/home/logo_13.png";
import logo_14 from "../../assets/home/logo_14.png";
import logo_15 from "../../assets/home/logo_16.png";
import logo_16 from "../../assets/home/logo_16.png";
import logo_17 from "../../assets/home/logo_17.png";
import logo_18 from "../../assets/home/logo_18.png";
import logo_19 from "../../assets/home/logo_19.png";
import logo_20 from "../../assets/home/logo_20.png";
import logo_21 from "../../assets/home/logo_21.png";
import logo_22 from "../../assets/home/logo_22.png";
import planet1 from "../../assets/svg/globe 2.svg";
import { createPortal } from "react-dom";
import worldMap from "../../assets/worldMap.svg";
import useMediaQuery from "../../hook/useMediaQuery";
import MobileNavbar from "./MobileNavbar";
import HeroCircle from "./HeroCircle";
import ServicesHome from "./ServicesHome";
import planetPre from "../../assets/Shared/planetPre.svg";
import shipPre from "../../assets/Shared/shipPre.svg";
import logo1 from "../../assets/Shared/favicon.png";
import logoText from "../../assets/Shared/logoName.png";
import Ourportfolio from "./Ourportfolio";
import Image from "next/image";
import StarBlinkingPortal from "../Shared/StarBlinkingPortal";

function HomeMain() {
  const router = useRouter();
  const [imageIndex, setImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState([]);
  const [activeMapButton, setActiveMapButton] = useState(1);
  const imgRef = useRef(null);
  const astroRef = useRef(null);
  const ufoRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const mapArr = [
    {
      country: "INDIA",
      mapIndex: 1,
    },
    {
      country: "SHARJA",
      mapIndex: 2,
    },
    {
      country: "AUSTRALIA",
      mapIndex: 3,
    },
    {
      country: "NETHERLANDS",
      mapIndex: 4,
    },
    {
      country: "NEW ZEALAND",
      mapIndex: 5,
    },
    {
      country: "SINGAPORE",
      mapIndex: 6,
    },
  ];

  const handleMapButtonHover = (index) => {
    setActiveMapButton(index);
  };

  const images = [
    logo_1,
    logo_2,
    logo_3,
    logo_4,
    // logo_5,
    logo_6,
    logo_7,
    logo_8,
    logo_9,
    logo_10,
    logo_11,
    logo_12,
    logo_13,
    logo_14,
    logo_15,
    logo_16,
    logo_17,
    logo_18,
    logo_19,
    logo_20,
    logo_21,
    logo_22,
  ];
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    arrows: false,
    centerMode: true,
    beforeChange: (current, next) => setImageIndex(next),
  };

  gsap.registerPlugin(MotionPathPlugin);

  // path1
  const motion = (rocket, path) => {
    gsap
      .timeline()
      .fromTo(rocket, { opacity: 0 }, { opacity: 1, delay: 3, duration: 1 })
      .fromTo(path, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        path,
        { strokeDashoffset: 1200 },
        { strokeDashoffset: 0, duration: 135 }
      )
      .to(
        rocket,
        {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          duration: 20,
          repeat: 0,
          ease: "none",
        },
        3
      )
      .to(rocket, { opacity: 0, duration: 1 }, 28);
  };



  useEffect(() => {
    if (window.innerWidth >= 768) {
      gsap.to(imgRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        // repeatDelay: 3,
        // yoyo: true,
        ease: "power1.inOut",
        motionPath: {
          path: "#rockPath",
          align: "#rockPath",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: 1,
          end: 0,
        },
      });
    } else {
      gsap.to(imgRef.current, {
        rotation: 360,
        duration: 15,
        repeat: -1,
        // repeatDelay: 3,
        // yoyo: true,
        ease: "power1.inOut",
        motionPath: {
          path: "#rockPath",
          align: "#rockPath",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: 1,
          end: 0,
        },
      });
    }

    gsap.to(astroRef.current, {
      x: "-=40",
      y: "-=80",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

  }, []);

  const [loaded, setLoaded] = useState(false);
  const myRef = useRef();
  const ufoStartRef = useRef(null);
   const [openIndex, setOpenIndex] = useState(null);
  // const [ufoVisible, setUfoVisible] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          document.querySelector(".puzzlePop").style.opacity = "1";
          document.querySelector(".Contents").classList.add("contentPop");
          document.querySelector(".shadow").style.top = "13px";

          observer.unobserve(myRef.current);
        }
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(myRef.current);
  }, [loaded]);

  useEffect(() => {
    const ufoThing = ufoRef.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && window.innerWidth >= 768) {
        gsap
          .timeline()
          .fromTo(ufoThing, { opacity: 0 }, { opacity: 1 })
          .to(ufoThing, {
            duration: 4,
            repeat: false,
            ease: "power1.inOut",
            motionPath: {
              path: "#ufoPath",
              align: "#ufoPath",
              // autoRotate: true,
              alignOrigin: [0.5, 0.5],
              start: 0,
              end: 1,
            },
          })
          .then(() => {
            setIsVisible(true);
            observer.unobserve(ufoStartRef.current);
          });
      }
    });
    // observer.observe(ufoStartRef.current);
  }, []);


  const [splash, setSplash] = useState(true);
  const [logoanim, setlogoanim] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setlogoanim(true);
    }, 1000);
    setTimeout(() => {
      setSplash(false);
      document.body.style.overflow = "auto";
    }, 3000);
  }, []);
  const [starsLoader, setstarsLoader] = useState([]);
  const [state, setState] = useState(true);
  const [line1Style, setLine1Style] = useState({
    width: "2px",
    height: "35px",
    backgroundColor: "white",
  });

  const [line2Style, setLine2Style] = useState({
    width: "2px",
    height: "35px",
    backgroundColor: "white",
  });
  const handleButtonClick = () => {
    setState(!state);
    if (state) {
      setLine1Style({
        ...line1Style,
        transform: "",
      });
      setLine2Style({
        ...line2Style,
        transform: "",
      });
    } else {
      setLine1Style({
        ...line1Style,
        transform: "translate(1.5px,-2px) rotate(225deg)",
        transition: "0.3s ease-in",
      });
      setLine2Style({
        ...line2Style,
        transform: "translate(-8.5px,-0.5px) rotate(-225deg)",
        transition: "0.3s ease-in",
      });
    }
  };
  useEffect(() => {
    if (state) {
      const newStars = [];
      for (let i = 0; i < 80; i++) {
        let leftDir = Math.floor(Math.random() * 100);
        let topDir = Math.floor(Math.random() * 100);
        let starSize =
          Math.random() > 0.2
            ? Math.random() * 1 + 0.5
            : Math.random() * 1 + 1.2;
        let animationDuration = Math.floor(Math.random() * (7 - 3 + 1) + 3);
        let animationDir = Math.random() > 0.5 ? "alternate" : "reverse";
        const newStar = {
          size: starSize,
          left: leftDir + "%",
          top: topDir + "%",
          animationDir,
          animationDuration: animationDuration + "s",
        };
        newStars.push(newStar);
      }
      setstarsLoader(newStars);
    } else {
      setstarsLoader([]);
    }
  }, [state]);

  const faqData = [
    {
      question: "What services does Tapclone offer?",
      answer: "We are here to offer all the services you need, including SEO, social media marketing, Google Ads, branding, UI/UX design, website development, content marketing and more."
    },
    {
      question: "Do you offer complete digital marketing packages?",
      answer: "Yes, we can tailor packages based on your business goals, industry and budget."
    },
    {
      question: "Does Tapclone provide website design and development?",
      answer: "Definitely! We build responsive, user-friendly websites that are designed to convert visitors into customers."
    },
    {
      question: "Do you offer social media marketing services?",
      answer: "Yes, we can manage marketing campaigns on Instagram, Facebook, LinkedIn and YouTube, while including content and ad management."
    },
    {
      question: "Can you help with branding and logo design?",
      answer: "Sure, Tapclone also does branding, logo creation and visual identity."
    },
    {
      question: "Do you provide local SEO services in Kochi?",
      answer: "Yes, we provide local SEO strategies to enhance visibility on Google for local searches."
    },
    {
      question: "How long does it take to see results with Tapclone’s digital marketing services?",
      answer: "It all depends on the service. Some services like social media marketing and online ads may see results instantly, while SEO can take between 3–6 months depending on your website and competition. At Tapclone we focus on providing meaningful, data-fueled results in the fastest way possible."
    },
    {
      question: "Why partner with Tapclone over other digital marketing companies in Kerala?",
      answer: "Tapclone offers smart, tailored marketing solutions to help your business grow online. We care about results and clients, use the latest strategies, and provide personalized support to every client, which is why we are your trusted partner in Kerala."
    },
    {
      question: "Why is local SEO important when hiring the best SEO company near me?",
      answer: "Local SEO helps your business appear for searches in your local area so you can be found quicker by your customers. TapClone's local SEO service emphasizes optimizing your Google Business Profile, local keywords and local directory listings so you can be best placed locally."
    }
  ];

  return (
    <StarBlinkingPortal>
      <div
        className={`h-screen bg-black  z-50 absolute duration-500 flex justify-center items-center overflow-hidden ${splash ? "translate-y-0" : "-translate-y-full"
          } w-full`}
      >
        <Image
          src={planetPre}
          alt="planet"
          className="absolute rotate-[-20deg] right-[10%] top-[20%]"
        />
        <Image
          src={shipPre}
          alt="planet"
          className="absolute left-[10%] top-[60%]"
        />
        <div className="h-20 w-[70%] lg:w-[30%] flex justify-center items-center bg-transparent">
          <Image
            src={logo1}
            alt="logo"
            className="animate-fade-in w-[10%] lg:w-[20%]"
          />
          <div className="w-[70%] lg:w-full h-full overflow-hidden relative">
            <Image
              src={logoText}
              alt="logotext"
              className={`absolute w-[90%] lg:w-full top-[30%] lg:top-[15%] left-3 duration-[1200ms] ease-in ${logoanim ? "translate-x-0" : "-translate-x-[110%]"
                }`}
            />
          </div>
        </div>
        {starsLoader.map((star, index) => (
          <div
            key={index}
            className="star-nav"
            style={{
              "--size": `${star.size}vmin`,
              left: star.left,
              top: star.top,
              animation: `GFG ${star.animationDuration} infinite linear ${star.animationDir}`,
            }}
          />
        ))}
      </div>
      <div
        className={`homeMain ${splash ? "" : ""}`}
        onLoad={() => setLoaded(true)}
      >
        <MobileNavbar />
        <NavBar />

        <div className="header">
          <div className="logoSection">
            {/* <h1 style={{ color: "white", margin: "0" }}>LOGO</h1> */}
            {/* <img src={logoText} /> */}
          </div>
          {/* <div className='dateSection'>
          <p style={{ margin: '0' }}> Mon 22.07</p>
        </div> */}
        </div>

        <section className="section1 ">
          {isMobile ? (
            <>
              <Image className="rocket" src={rocket} alt="" ref={imgRef} />
              <svg
                width="1020"
                className="rocketPath"
                height="1875"
                viewBox="0 0 1020 1875"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="rockPath"
                  d="M 1 950 A 950 943 0 0 1 1888 931 A 943 943 0 0 1 1 931 Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="39 39"
                />
              </svg>
            </>
          ) : (
            <>
              <Image className="rocket" src={rocket} alt="" ref={imgRef} />
              <svg
                width="1020"
                className="rocketPath"
                height="1875"
                viewBox="0 0 1020 1875"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="rockPath"
                  d="M 1 931 A 943 943 0 0 1 1888 931 A 943 943 0 0 1 1 931 Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="19 19"
                />
              </svg>
            </>
          )}
          {/* 
          <svg
            className="rocketPath "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 300"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
          >
            <path
              id="pathWhite"
              d="M75,0 A75,75 0 0 0 75,150"
              fill="none"
              stroke-width="0.4"
            />
            <path
              id="pathBlack"
              d="M75,0 A75,75 0 0 0 75,150"
              fill="none"
              stroke="black"
              stroke-width="1"
            />
          </svg> */}

          {/* <svg className='rocketPath'  viewBox="0 0 754 899" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id='pathWhite' d="M898 1L753 1" stroke="white"  />
          
        </svg> */}

          <div className="heroText ">
            <p>
              A
              {/* <TypeAnimation
                sequence={[
                  " GOOD",
                  1000,
                  " GOOD START",
                  1000,
                  () => setStartText2(true),
                ]}
                // repeat={Infinity}
                style={{
                  color: "#47ff05",
                }}
                cursor={false}
                speed={50}
              /> */}
              <span
                style={{
                  color: "#47ff05",
                }}
              >
                &nbsp;GOOD START
              </span>
              <br />
              {/* {text2 && (
                // "IS THE BEST"
                <TypeAnimation
                  sequence={[
                    " IS",
                    1000,
                    " IS THE",
                    1000,
                    " IS THE BEST",
                    1000,
                    () => setStartText3(true),
                  ]}
                  // repeat={Infinity}
                  // style={{ color: "#47ff05" }}
                  cursor={false}
                  speed={65}
                />
              )} */}
              <span>IS THE BEST</span>
              <br />
              {/* {text3 && (
                <TypeAnimation
                  sequence={[
                    " RECIPE",
                    1000,
                    " RECIPE FOR",
                    1000,
                    () => setStartText4(true),
                  ]}
                  style={{ color: "#8e64e9" }}
                  // repeat={Infinity}
                  // style={{ color: "#47ff05" }}
                  cursor={false}
                  speed={75}
                />
              )} */}
              <span style={{ color: "#8e64e9" }}> RECIPE FOR </span>
              <br />
              SUCCESS.
              {/* {text4 && (
                <TypeAnimation
                  sequence={[" SUCCESS.", 1000, () => setStartText4(true)]}
                  // style={{ color: "#8e64e9" }}
                  // repeat={Infinity}
                  // style={{ color: "#47ff05" }}
                  cursor={false}
                  speed={85}
                />
              )} */}
            </p>

            {/* <button className="swipe-btn">SWIPE DOWN</button> */}
            <SwipeButton />
            <div className="quoteBtn ">
              <svg
                width="120"
                height="50"
                viewBox="0 0 120 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path1"
                  d="M2 2L25 25L2 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path2"
                  d="M25 2L48 25L25 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path3"
                  d="M48 2L71 25L48 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path4"
                  d="M71 2L94 25L71 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path5"
                  d="M94 2L117 25L94 48"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>

          {!isMobile && (
            <div className="quoteBtn">
              <svg
                width="120"
                height="50"
                viewBox="0 0 120 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path1"
                  d="M2 2L25 25L2 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path2"
                  d="M25 2L48 25L25 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path3"
                  d="M48 2L71 25L48 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path4"
                  d="M71 2L94 25L71 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path5"
                  d="M94 2L117 25L94 48"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </div>
          )}

          <HeroCircle />
          <br />
          {!isMobile && <Image className="layer" src={layer} alt="" />}
        </section>

        <section className="section2" ref={myRef}>
          {!isMobile && (
            <div className="puzzlePop">
              <Image className="puzzle " ref={astroRef} src={ASTRO42} alt="" />
            </div>
          )}
          <div className="Contents">
            <h1 style={{ margin: "0", zIndex: "2" }} >
              Straight <br /> talk <br />
              <span style={{ color: "#aeef24" }}>
                {" "}
                Direct <br /> results.
              </span>
            </h1>
            <h1 className="shadow" style={{ margin: "0", zIndex: "1" }}>
              Straight <br /> talk <br />
              <span>
                {" "}
                Direct <br /> results.
              </span>
            </h1>
            <p className="mt-5 max-w-md mx-auto sm:mx-0 text-center sm:text-left !text-lg sm:text-xl text-gray-300 sm:leading-8 !font-light">
              it is tough to make things simple. We aren&apos;t different just for
              the sake of being different. We are here to make a difference to
              brands.
            </p>
          </div>
        </section>
        {isMobile && (
          <div className="puzzlePop">
            <Image className="puzzle " ref={astroRef} src={ASTRO42} alt="" />
          </div>
        )}

        <section className="section3 " style={{ position: "relative" }}>
          <div className="">
            <Image
              src={ufo}
              alt=""
              className="absolute right-[10%] top-[50%]  floating"
            />

            <Image
              src={blueplanet}
              className="absolute right-[40%] top-[60%] rotate hidden md:block"
              alt=""
            />
          </div>
          <div className="ufoPlanet  ">
            <Image src={ufoPlanet} alt="" className=" hidden md:block " />
          </div>
        </section>
        <ServicesHome />
        <Ourportfolio />
        <ProjectSection />
        <section
          className="packagesSection"
          style={{
            marginLeft: "6%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image className="planet1" src={planet1} alt="" />
        </section>

        <section
          className="countriesServe "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            <br />
            Countries
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: " 1px rgb(255 255 255 / 100%)",
              }}
            >
              We Serve
            </span>
          </h1>

          <div className="map-button-container ">
            <div className="map-row">
              {mapArr.slice(0, 3).map(({ country, mapIndex }) => (
                <button
                  key={mapIndex}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => handleMapButtonHover(mapIndex)}
                  className={
                    activeMapButton === mapIndex ? "active-map-btn" : ""
                  }
                >
                  {country}
                </button>
              ))}
            </div>
            <div className="map-row">
              {mapArr.slice(3).map(({ country, mapIndex }) => (
                <button
                  key={mapIndex}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => handleMapButtonHover(mapIndex)}
                  className={
                    activeMapButton === mapIndex ? "active-map-btn" : ""
                  }
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              justifyContent: "center",
            }}
            className="map-img-wrap "
          >
            <Image
              style={{ width: "100%" }}
              className="world-map "
              src={worldMap}
              alt="world map"
            />
            {mapArr.map(({ country, mapIndex }) => (
              <div
                key={mapIndex}
                className={`map-dot ${country} ${activeMapButton === mapIndex ? "map-dot-active" : ""
                  }`}
              >
                {activeMapButton === mapIndex ? (
                  <>
                    <div className="ripple-1"></div>
                    <div className="ripple-2"></div>
                    <div className="ripple-3"></div>
                    <div className="ripple-4"></div>
                    <div className="ripple-5"></div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section
          className="contactSection"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "#70ff00",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: " 2px rgb(255 255 255 / 100%)",
              }}
            >
              we always seek for <br />
              new adventures.
            </span>{" "}
            <br />
            Lets&apos;s Do Business
          </h1>

          <h1 className="!text-4xl !mb-2 capitalize font-semibold  pt-10">Digital marketing company kochi,Kerala</h1>
          <p className='max-w-4xl text-lg text-gray-300 md:text-xl font-poppins font-thin mt-4 text-center lg:text-center'>Delivering successful digital marketing solutions to companies in Kochi and beyond is our area of expertise at Tapclone. One of the top digital marketing company in Kochi,Kerala, we combine strategy, data, and creativity to help your company grow internationally and stand out in the local market.</p>

          <div className="max-w-4xl mx-auto text-white pt-14  pb-10">
              <div className="text-center mb-12">
                <h2 className="!text-4xl !mb-2 capitalize font-semibold  pt-10">Frequently Asked Questions</h2>
                <p className="text-gray-400">Can't find the answer you're looking for? Reach out to our team.</p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                    {/* Question / Toggle Button */}
                    <button
                      onClick={() => handleToggle(index)}
                      className="w-full flex justify-between items-center text-left p-5 focus:outline-none bg-transparent  transition-colors"
                    >
                      <span className="text-lg font-medium">{faq.question}</span>
                      <span>
                        {openIndex === index ? (
                          <Minus className="w-6 h-6 text-green-400" />
                        ) : (
                          <Plus className="w-6 h-6 text-gray-400" />
                        )}
                      </span>
                    </button>

                    {/* Answer Panel */}
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="p-5 bg-black text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>

        </section>

          {/* --- NEW FAQ Section --- */}
          {/* <section
          
           className="   px-4">
            <div className="max-w-4xl mx-auto text-white pt-10 pb-10">
              <div className="text-center mb-12">
                <h1 className="!text-4xl !mb-2 capitalize font-semibold  pt-10">Frequently Asked Questions</h1>
                <p className="text-gray-400">Can't find the answer you're looking for? Reach out to our team.</p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                   
                    <button
                      onClick={() => handleToggle(index)}
                      className="w-full flex justify-between items-center text-left p-5 focus:outline-none bg-transparent  transition-colors"
                    >
                      <span className="text-lg font-medium">{faq.question}</span>
                      <span>
                        {openIndex === index ? (
                          <Minus className="w-6 h-6 text-green-400" />
                        ) : (
                          <Plus className="w-6 h-6 text-gray-400" />
                        )}
                      </span>
                    </button>

                 
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="p-5 bg-black text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </section> */}

        {/* <div className="knowMoreLayer "></div> */}

        <Footer />
      </div>

    </StarBlinkingPortal>
  );
}

export default HomeMain;
