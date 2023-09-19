import React from "react";
import "./Project.css";

export default function Project() {
  const videoSrc = [
    "1.mp4",
    "2.mp4",
    "3.mp4",
    "4.mp4",
    "5.mp4",
    "6.mp4",
    "7.mp4",
  ];
  return (
    <div className="myProjects">
      <h1 className="myServiceTitle">My Projects</h1>
      <div className="videoSection">
        {videoSrc.map((v, index) => (
          <video controls  key={index}>
            <source src={v} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
}
