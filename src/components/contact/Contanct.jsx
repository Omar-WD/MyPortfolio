import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./Contact.css";
import "leaflet/dist/leaflet.css";

export default function Contact() {
  const position = [53.551086, 9.993682];

  return (
    <div className="getInTouch" id="contact">
      <h1 className="getInTouchTitle">Get In Touch</h1>
      <div className="contactMe">
        <h4>Hamburg, Germany</h4>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="map-container"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <div className="contact-form">
          <a href="mailto:omarzoubi.1@outlook.com" className="contact-link">
            <AiOutlineMail className="contactIcon" /> omarzoubi.1@outlook.com
          </a>

          <a
            href="https://www.linkedin.com/in/omar-zoubi/"
            className="contact-link"
          >
            <BsLinkedin className="contactIcon" /> omar-zoubi
          </a>
          <a href="tel:00491747292833" className="contact-link">
            <BiSolidPhoneCall className="contactIcon" />
            00491747292833
          </a>
        </div>
      </div>
      <p className="copyrights">Copyright © 2023 - All Right Reserved.</p>
      <p className="copyrights">Designed by Omar Al Zoubi</p>

    </div>
  );
}
