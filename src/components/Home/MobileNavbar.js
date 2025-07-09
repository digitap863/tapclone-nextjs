"use client"
import React, { useState } from "react";
import "./MobileNavbar.css";
import ShortDate from "./ShortDate";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <nav className="mobile-nav !z-20">
        <ShortDate />
        <div className="logo ">
          <h2>TAP<span className="font-light ">CLONE</span></h2>
        </div>

        <button 
          className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link 
                href="/"
                onClick={closeMenu}
                className={pathname === "/" ? "active" : ""}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                onClick={closeMenu}
                className={pathname === "/about" ? "active" : ""}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                href="/services"
                onClick={closeMenu}
                className={pathname === "/services" ? "active" : ""}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link 
                href="/careers"
                onClick={closeMenu}
                className={pathname === "/careers" ? "active" : ""}
              >
                CAREERS
              </Link>
            </li>
            <li>
              <Link 
                href="/blogs"
                onClick={closeMenu}
                className={pathname === "/blogs" ? "active" : ""}
              >
                BLOGS
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                onClick={closeMenu}
                className={pathname === "/contact" ? "active" : ""}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
