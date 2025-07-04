"use client"
import { React, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import navOval from "../../assets/navbar_oval.png";
import navPlanet from "../../assets/navbar_planet.png";
import navOrbPlanet from "../../assets/navOrbit_planet.svg";
import logoIcon from '../../assets/Shared/favicon.png'
import logoTitle from '../../assets/Shared/logoName.png'
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState(false);
  const [stars, setStars] = useState([]);
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
      setStars(newStars);
    } else {
      setStars([]);
    }
  }, [state]);

  const getCurrentDay = () => {
    const today = new Date();
    return today.getDate();
  };
  const [titlevis, setTitleVis] = useState(false)

  return (
    <div className="relative z-50">
      <Image src={logoTitle} alt="logoText" className={` hidden sm:block absolute top-1 duration-500 ${titlevis ? 'translate-x-[6rem]' : 'translate-x-[-17rem]'}`} />
      <div className="navBar lg:!flex !hidden" style={{ width: state ? "100%" : "5%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Image src={logoIcon} alt="logicon" className="xl:w-9 xl:mt-3 cursor-pointer" onClick={() => router.push('/')} onMouseEnter={() => setTitleVis(!titlevis)} onMouseLeave={() => setTitleVis(!titlevis)} />
          {/* <h1>L</h1> */}
          <div className="navBtn" onClick={() => handleButtonClick()}>
            <div className="line1" style={line1Style}></div>
            <div className="line2" style={line2Style}></div>
          </div>
          <p style={{ fontSize: "1.5rem" }}></p>
        </div>

        <div className="navs flex flex-col  justify-center  ">
          <p>
            <Link
              href="/"
              style={{
                color: pathname === "/" ? "#aeef24" : "#fff",
              }}
            >
              HOME
            </Link>
          </p>
          <p>
            <Link
              href="/about"
              style={{
                color: pathname === "/about" ? "#aeef24" : "#fff",
              }}
            >
              ABOUT
            </Link>
          </p>
          <p>
            <Link
              href="/services"
              style={{
                color: pathname === "/services" ? "#aeef24" : "#fff",
              }}
            >
              SERVICES
            </Link>
          </p>
          <p>
            <Link
              href="/careers"
              style={{
                color: pathname === "/careers" ? "#aeef24" : "#fff",
              }}
            >
              CAREERS
            </Link>
          </p>
          <p>
            <Link
              href="/blogs"
              style={{
                color: pathname === "/blogs" ? "#aeef24" : "#fff",
              }}
            >
              BLOGS
            </Link>
          </p>
          <p>
            <Link
              href="/gallery"
              style={{
                color: pathname === "/gallery" ? "#aeef24" : "#fff",
              }}
            >
              GALLERY
            </Link>
          </p>
          <p>
            <Link
              href="/contact"
              style={{
                color: pathname === "/contact" ? "#aeef24" : "#fff",
              }}
            >
              CONTACT
            </Link>
          </p>
        </div>
        <div>
          <span className="menuTyping">MENU</span>
        </div>
        {state && (
          <div className="orbit-container ">
            <Image className="orbit" src={navOval} alt="" />
            <Image className="nav-planet" src={navPlanet} alt="" />
            <Image className="orbitngPlanet" src={navOrbPlanet} alt="" />
          </div>
        )}
        {stars.map((star, index) => (
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
    </div>
  );
}

export default NavBar;
