import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skillsDiv" id="skills">
        <h1 className="careerTitle">Aquired Skills</h1>
      <div className="skillsProgress">
      <div>
          <h6 style={{ color: "white" }}>HTML5,CSS3,BOOTSTRAP</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </div>
        <div>
          <h6 style={{ color: "white" }}>JavaScript (React)</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "83%" }}>
              83%
            </div>
          </div>
        </div>
        <div>
          <h6 style={{ color: "white" }}>Node.js (Express)</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "80%" }}>
              80%
            </div>
          </div>
        </div>
        <div>
          <h6 style={{ color: "white" }}>Git & GitHub (Express)</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </div>
        <div>
          <h6 style={{ color: "white" }}>Non-SQL(mongoDB) (Express)</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "90%" }}>
              90%
            </div>
          </div>
        </div>
        <div>
          <h6 style={{ color: "white" }}>SQL(ElephantSql) (Express)</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "80%" }}>
              80%
            </div>
          </div>
        </div>
        <div>
          <h6 style={{ color: "white" }}>Restful APIs</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </div>
        <div>
          <h6 style={{ color: "white" }}>DevOps (Hosting, Deployment, Monitoring)</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "75%" }}>
              75%
            </div>
          </div>
        </div>
        <div>
          <h6 style={{ color: "white" }}>Software Testing (TDD)</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "50%" }}>
              50%
            </div>
          </div>
        </div>
        <div>
          <h6 style={{ color: "white" }}>Agile Tools and Methodologies</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "50%"}}>
              50%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
