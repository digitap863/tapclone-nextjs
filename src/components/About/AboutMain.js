
import aboutHeading from "../../assets/about/About.png";
import bubPlanet from "../../assets/bubblePlanet.svg";
import curvPath from "../../assets/headCurvPath.png";
import tailPlanet from "../../assets/navbar_planet.png";
import "./About.css";
import Image from "next/image";
import StarPortal from "../Shared/StarPortal";
import Link from "next/link";

function AboutMain() {


  const phoneNumber = "+919037833933";
 

  return (
    <StarPortal>
      <div style={{ width: "100%", overflowX: "cli" }}>
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
            <div className="about-desc ">
              <div
                className="about-desc-content "
                style={{
                  transition: "1s ease-in-out",
                  animation: "lds-ellipsis2 10s linear 0.1s infinite",
                }}
              >
                <h1
                  style={{
                    color: "#70ff00",
                  }}
                >
                  <span>Team of</span>
                  <br />
                  Teach & <br /> Creativity
                </h1>
                <p className="mt-2">
                  We have maintained our statement as a beacon since 2018. Here
                  we foster a culture of creativity, while exploring and
                  discovering our own story. a community committed to the dream
                  of positive Digitalization
                </p>
              </div>
            </div>
            <div className="about-desc ">
              <div
                className="about-desc-content "
                style={{
                  transition: "1s ease-in-out",
                  animation: "lds-ellipsis2 10s linear 2.6s infinite",
                }}
              >
                <h1
                  style={{
                    color: "#8E64E9",
                  }}
                >
                  <span>Our fulfillment</span>
                  <br />
                  is found in
                  <br />
                  creativity.
                </h1>
                <p className="mt-2">
                  our essence is intertwined with the pulse of impactful
                  creativity. We don&apos;t merely exist; we come alive through the
                  rush of creating something truly remarkable. Every project is
                  fresh canvas for new ideas
                </p>
              </div>
            </div>
            <div className="about-desc ">
              <div
                className="about-desc-content "
                style={{
                  transition: "1s ease-in-out",
                  animation: "lds-ellipsis2 8s linear 0.5s infinite",
                }}
              >
                <h1
                  style={{
                    color: "#BCFF87",
                  }}
                >
                  <span>Beginning</span>
                  <br />
                  relations in detail

                </h1>
                <p className="mt-2">
                  For us each connection is a bespoke experience. From the very
                  first handshake we lay the foundation for lasting partnerships
                  built on trust, transparency, and mutual success
                </p>
              </div>
            </div>
            <div className="about-desc ">
              <div
                className="about-desc-content "
                style={{
                  transition: "1s ease-in-out",
                  animation: "lds-ellipsis2 8s linear 2s infinite",
                }}
              >
                <h1
                  style={{
                    color: "#A53954",
                  }}
                >
                  <span>Our</span>
                  <br />
                  Future of dreams
                </h1>
                <p className="mt-2">
                  anchored in the pursuit of ambitious goals. We navigate through challenges and triumphs In every project, venture, and endeavor, we infuse the spirit of our dreams
                </p>
              </div>{" "}
            </div>
          </div>
        </div>

        {/* <div className="service-team-btn ">
          <img src={Ellipse1} className="Ellipse1"></img>
          <img src={Ellipse2} className="Ellipse2"></img>
          <img src={Ellipse} className="Ellipse"></img>
          <div className="btns-container ">
            <div className="btn-bg ">
              <img
                src={services}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/services")}
              />
            </div>
            <div className="btn-bg ">
              <img
                src={ourTeam}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/team")}
              />
            </div>
          </div>
        </div> */}

        <div className="knowMoreServices " style={{ marginTop: "4rem" }}>
          <span className="knowMoreText">
            Need to <br /> Know More
          </span>
          <Link href={`tel:${phoneNumber}`} target="_blank" className="cursor-pointer">
            <div className="callBtn">
              <span>Call</span>
            </div>
          </Link>
        </div>
        <div className="knowMoreLayer"></div>
      </div>


    </StarPortal>
  );
}

export default AboutMain;
