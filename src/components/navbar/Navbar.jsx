import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { FaBars, FaWindowClose } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbarDiv ${scrolled ? "scrolled" : ""}`} id="navBar">
      <div className={`logoDiv ${scrolled ? "scrolled" : ""}`}>
        <span className="firstPartOfTheLogo">O&Z</span>
        Wev Development
      </div>
      <ul
        className={`navbarItems ${scrolled ? "scrolled" : ""} ${
          showMenu ? "show" : ""
        }`}
      >
        <span className="closeIcon">
          <FaWindowClose
            onClick={() => setShowMenu(false)}
            className={`closeButton  ${showMenu ? "show" : ""}`}
          />
        </span>
        <li
          onClick={() => {
            setShowMenu(false);
            window.location.href = "#home";
          }}
        >
          <a href="#home">Home</a>
        </li>
        <li
          onClick={() => {
            setShowMenu(false);
            window.location.href = "#about";
          }}
        >
          <a href="#about">About</a>
        </li>
        <li
          onClick={() => {
            setShowMenu(false);
            window.location.href = "#service";
          }}
        >
          <a href="#service">Service</a>
        </li>
        <li
          onClick={() => {
            setShowMenu(false);
            window.location.href = "#projects";
          }}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          onClick={() => {
            setShowMenu(false);
            window.location.href = "#resume";
          }}
        >
          <a href="#resume">Resume</a>
        </li>
        <li
          onClick={() => {
            setShowMenu(false);
            window.location.href = "#skills";
          }}
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          onClick={() => {
            setShowMenu(false);
            window.location.href = "#contact";
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <FaBars className="barIcon" onClick={() => setShowMenu(!showMenu)} />
    </div>
  );
}
