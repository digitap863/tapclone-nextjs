"use client"
import React from "react";
import "./MobileNavbar.css";
import ShortDate from "./ShortDate";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <nav className="mobile-nav ">
        <input id="nav-toggle" type="checkbox" />
        <ShortDate />
        <div className="logo">
          <h2>TAPCLONE</h2>
        </div>

        <ul className="mobnav-links ">
          <li>
            <Link 
              href="/"
              style={{
                color: pathname === "/" ? "#aeef24" : "#fff",
              }}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link 
              href="/about"
              style={{
                color: pathname === "/about" ? "#aeef24" : "#fff",
              }}
            >
              ABOUT
            </Link>{" "}
          </li>
          <li>
            <Link 
              href="/services"
              style={{
                color: pathname === "/services" ? "#aeef24" : "#fff",
              }}
            >
              SERVICES
            </Link>{" "}
          </li>
          <li>
            <Link 
              href="/contact"
              style={{
                color: pathname === "/contact" ? "#aeef24" : "#fff",
              }}
            >
              CONTACT
            </Link>
          </li>
        </ul>

        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </div>
  );
};

export default MobileNavbar;
