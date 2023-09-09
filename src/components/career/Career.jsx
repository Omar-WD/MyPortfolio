import React from "react";
import "./Career.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Career() {
  const education = [
    {
      name: "Full-Stack Web Development",
      year1: "2023",
      year2: "2023",
      description: `
      Project based, team-oriented, hybrid training, agile methods
      • HTML5, CSS3, Bootstrap, and Responsive Web Design
      • Frontend Programming with JavaScript-React
      • Backend Programming with Node.js (Express)
      • Version Control Systems (Git & GitHub)
      • Databases (SQL, NoSQL) & DBMS
      • Restful APIs
      • DevOps (Hosting, Deployment, Monitoring)
      • Software Testing (TDD)
      • Agile Tools and Methodologies
    `,
    },
    {
      name: "MBA in Marketing",
      year1: "2020",
      year2: "2022",
      description: `
      Advanced business courses including: 
      Financial Management, Consumer Behavior, Strategic Decision Making, Research Methods, Marketing Principles.
      •Thesis Project: E-Commerce, the Bright Side of COVID
       19 in Lebanon
      •Graduation GPA: 3.35 / 4
      •Number of Credits: 39 credits (5 semesters)
      `,
    },
    {
      name: "BBA in Management Information System",
      year1: "2009",
      year2: "2013",
      description: `
      Important Courses: Management Information
      Systems, Knowledge Management, Operations
      Management, Introduction to Programming, Business
      Intelligence Systems, E-Business, System Analysis and
      Design, Quantitative Methods of Business Decisions,
      Data Management, Business Telecommunications
      •Graduation GPA: 2.42 / 4
      •Number of Credits: 99 credits (8 semesters)
      `,
    },
  ];
  const work = [
    {
      name: "Sales & Marketing Manager",
      year1: "2018",
      year2: "2022",
      description: `
      •Successfully participated in tenders and secured
      contracts, resulting in increased business
      opportunities and revenue for the supermarket.
      •Implemented strategic initiatives to attract new
      customers, resulting in a significant increase in
      customer base and overall sales.
      •Developed and implemented effective loyalty
      programs to enhance customer satisfaction, foster
      customer loyalty, and drive repeat business.
      •Played a key role in pricing tasks, ensuring accurate
      and competitive pricing of products in the system to
      maximize profitability while remaining attractive to
      customers.
      •Collaborated with cross-functional teams to develop
      and execute marketing campaigns and promotional
      activities, driving customer engagement and boosting
      sales.`,
    },
    {
      name: "Data Entry & Stock Manager",
      year1: "2012",
      year2: "2017",
      description: `•Accurately inputted and organized data through
      efficient data entry techniques, ensuring data
      integrity.
      •Effectively managed stock inventory, conducting
      regular stock checks to optimize product availability.
      •Implemented strategic stock management methods,
      including forecasting and monitoring stock levels to
      minimize shortages and excesses.
      •Collaborated with cross-functional teams to
      streamline data entry and stock management
      procedures, improving overall operational efficiency.
      •Utilized data analysis techniques to identify trends
      and optimize stock ordering processes for cost-effective inventory management.
      `,
    },
  ];
  return (
    <Container className="careerDev" id="resume">
      <h1 className="careerTitle">Work & Education</h1>
      <Row className="workEduDiv">
        <Col className="eduDiv" xs={10}  md={5} xl={4}>
          <h4>Education: </h4>
          {education.map((item, index) => (
            <div className="eduSingleDiv" key={index}>
              <h5>{item.name}</h5>
              <h6>
                {item.year1}-{item.year2}
              </h6>
              <p>{item.description}</p>
            </div>
          ))}
        </Col>

        <Col className="workDiv" xs={10}  md={5} xl={4}>
        <h4>Work: </h4>
          {work.map((item, index) => (
            <div className="workSingleDiv" key={index}>
              <h5>{item.name}</h5>
              <h6>
                {item.year1}-{item.year2}
              </h6>
              <p>{item.description}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
