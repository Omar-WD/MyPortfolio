import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./HeroSection.css";

export default function HeroSection() {
  const [currentSpan, setCurrentSpan] = useState(0);
  const spanTexts = [
    "Front-end developer",
    "Back-end developer",
    "Full-stack developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpan((prevSpan) => (prevSpan + 1) % spanTexts.length);
    }, 4000); // Change span text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="heroDiv" id="home">
      <h3 className="heroWelcome">WELCOME TO MY WEBSITE</h3>
      <div className="heroText">
        <h1>
          I'm a <span>&nbsp;{spanTexts[currentSpan]}</span>
        </h1>
      </div>
      <div className="heroButtonsDiv">
        <Button variant="warning" className="heroButtons" href="#projects">
          View Work
        </Button>
        <Button variant="warning" className="heroButtons" href="#contact">
          Hire Me
        </Button>
      </div>
    </div>
  );
}
