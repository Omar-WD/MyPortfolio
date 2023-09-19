import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import AboutMe from "./components/aboutMe/AboutMe";
import Services from "./components/services/Services";
import Career from "./components/career/Career";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contanct";
import "bootstrap/dist/css/bootstrap.min.css";


import { BiUpArrowCircle} from "react-icons/bi";

function App() {
  const [scrolled, setScrolled] = useState(false);
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
  },[]);
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <HeroSection />
        <AboutMe />
        <Services />
        <Project/>
        <Career />
        <Skills />
        <a className={`upArrow ${scrolled?"scrolledup":""}`} href="#home"><BiUpArrowCircle /></a>
        
        <Contact />
      </div>
    </>
  );
}

export default App;
