"use client"
import aboutHeading from "../../assets/about/About.png";
import bubPlanet from "../../assets/bubblePlanet.svg";
import curvPath from "../../assets/headCurvPath.png";
import tailPlanet from "../../assets/navbar_planet.png";
import "./About.css";
import Image from "next/image";
import StarBlinkingPortal from "../Shared/StarBlinkingPortal.jsx";
import Link from "next/link";
import AboutCard from "./AboutCard";
import "../Services/Services.css"
import Knowmore from "../Shared/Knowmore";

function AboutMain() {


  const phoneNumber = "+919037833933";


  return (
    <StarBlinkingPortal>
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <div className="header">
          <div className="logoSection">
            {/* <h1 style={{ color: "white", margin: "0" }}>LOGO</h1> */}
            {/* <img src={logoText} /> */}
          </div>
        </div>
        <div className="aboutMain ">
          <div className="about-planetsWrap " style={{ width: "45%" }}>
            <Image
              className="aboutHeading mx-auto"
              style={{ width: "70%" }}
              src={aboutHeading}
              alt=""
            />
            <Image className="planet-Path" src={curvPath} alt="curvPath" />
            <Image className="bubble-Planet" src={bubPlanet} alt="bubPlanet" />
            <Image className="tail-Planet" src={tailPlanet} alt="tailPlanet" />
          </div>
          <div className="aboutDetails ">
            <div className="about-title  ">
              <h1>
                We bring <br />
                <span style={{ color: "#70ff00" }}>the whole</span>
                <br />
                <span className="white-stroke">PACKAGE!</span>
              </h1>
            </div>
            <div className="video-play">
              {/* <img src={playBtn} alt="" /> */}
            </div>
            <AboutCard
              color="#70ff00"
              titleTop="Team of"
              titleMid="Teach &"
              titleBottom="Creativity"
              animation="lds-ellipsis2 10s linear 0.1s infinite"
              description="We have maintained our statement as a beacon since 2018. Here we foster a culture of creativity, while exploring and discovering our own story. a community committed to the dream of positive Digitalization"
            />
            <AboutCard
              color="#8E64E9"
              titleTop="Our fulfillment"
              titleMid="is found in"
              titleBottom="creativity."
              animation="lds-ellipsis2 10s linear 2.6s infinite"
              description="our essence is intertwined with the pulse of impactful creativity. We don't merely exist; we come alive through the rush of creating something truly remarkable. Every project is fresh canvas for new ideas"
            />
            <AboutCard
              color="#BCFF87"
              titleTop="Beginning"
              titleMid="relations in detail"
              titleBottom=""
              animation="lds-ellipsis2 8s linear 0.5s infinite"
              description="For us each connection is a bespoke experience. From the very first handshake we lay the foundation for lasting partnerships built on trust, transparency, and mutual success"
            />
            <AboutCard
              color="#A53954"
              titleTop="Our"
              titleMid="Future of dreams"
              titleBottom=""
              animation="lds-ellipsis2 8s linear 2s infinite"
              description="anchored in the pursuit of ambitious goals. We navigate through challenges and triumphs In every project, venture, and endeavor, we infuse the spirit of our dreams"
            />
          </div>
        </div>
        <Knowmore />
      </div>
<<<<<<< HEAD
    </StarBlinkingPortal>
=======
    </StarPortal>
>>>>>>> 81de2d7c8b7de620571f095c72f32473d0cfb6c2
  );
}

export default AboutMain;
