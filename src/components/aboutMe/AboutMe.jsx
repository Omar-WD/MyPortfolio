import React from "react";
import "./AboutMe.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Container className="aboutMeDiv" id="about">
      <Row>
        <h1 className="aboutMeTitle">About Me</h1>
      </Row>
      <Row className="aboutMeContent">
        <Col className="myImageDev">
          <Image fluid
            className="myImage"
            src="./omar.jpg"
            alt="Profile-Pic"
          />
        </Col>
        <Col className="aboutMeText">
          <h2 style={{ color: "white" }}>
            I am <span style={{ color: "#FFC209" }}>Omar</span>
          </h2>
          <h6 style={{ color: "#BDBBB8", marginBottom: "20px",fontFamily: 'fangsong' }}>
            FULL STACK WEB DEVELOPER
          </h6>
          <p>
            Highly motivated and skilled Fullstack Web Developer with hands-on
            experience in HTML5, CSS, JavaScript, Bootstrap, SQL, and React.
          </p>
          <p>
            Proficient in translating client requirements into visually
            appealing and user-friendly web applications.
          </p>
          <p>
            Seeking to contribute expertise and creativity to a dynamic
            organization and deliver high-quality solutions.
          </p>
          <div className="buttonsDiv">
          <a href="https://me-qr.com/mobile/pdf/16919202" target="_blank" rel="noopener noreferrer" >
            <button className="fillButton">
              <span>Display my Certificate</span>
            </button>
          </a>
          <a
            href="./https://drive.google.com/uc?export=download&id=1YVe0shBborJ79Q2MEuXO9_l2kd-q5Emd"
            download="Omar_Al Zoubi_Resume.pdf"
          >
            <button className="fillButton">
              <span>Download my cv</span>
            </button>
          </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
