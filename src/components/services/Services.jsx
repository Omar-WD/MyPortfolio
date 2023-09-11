import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaCode,FaMoneyCheck,FaDatabase} from 'react-icons/fa';
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { AiFillGithub } from 'react-icons/ai';
import { TbApi} from 'react-icons/tb';
import { MdLanguage } from 'react-icons/md';
import "./Services.css"

const services = [
    {
      icon: FaMoneyCheck,
      title: "FrontEnd Development",
      description:
        "Implementing responsive and user-friendly web designs using HTML5, CSS3, and Bootstrap. Creating interactive and dynamic web applications with JavaScript and React.js."
    },
    {
      icon: HiMiniWrenchScrewdriver,
      title: "Backend Development",
      description:
        "Building server-side applications and APIs using Node.js and Express for authorization and authentication."
    },
    {
      icon: FaDatabase,
      title: "Database Management",
      description:
        "Managing SQL and NoSQL databases, including ElephantSQL and MongoDB."
    },
    {
      icon: AiFillGithub,
      title: "Version Control Systems (Git & GitHub)",
      description:
        "Proficient in using Git and GitHub for version control and collaborative software development."
    },
    {
      icon: TbApi,
      title: "Restful APIs",
      description:
        "Designing, implementing, and consuming RESTful APIs for seamless data exchange between applications."
    },
    {
      icon: MdLanguage,
      title: "DevOps (Hosting, Deployment, Monitoring)",
      description:
        "Experience in the deployment, hosting, and monitoring of web applications to ensure optimal performance and availability."
    }
  ];
  
  

function ServiceCarousel() {
  return (
    <Container className="serviceDiv" id='service'>
      <h1 className="myServiceTitle">My Services</h1> 
        {services.map((item, index) => (
        
            <Row key={index}>
                  <Card className="serviceCard">
                    <Card.Body className="cardBody">
                      <Card.Title className='cardIcon'><item.icon size={64} /></Card.Title>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text className="cardParagraph">
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
            </Row>
        ))}
    </Container>
  );
}





export default ServiceCarousel