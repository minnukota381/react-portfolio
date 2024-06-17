import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';
import ProfileImage from './Assets/minnu_logo.png';
import ResumePDF from './Assets/Resume.pdf';
import GitHub from './GitHub'; // Import the GitHub component

const About = () => {
  return (
    <Container fluid className="about-container">
      <Row className="justify-content-center align-items-center">
        <Col md={5} className="d-flex justify-content-center">
          <Image src={ProfileImage} alt="Profile" fluid className="profile-image" />
        </Col>
        <Col md={7} className="text-md-start">
          <div className="right">
            <div className="title text-center">
              <span className="about-title">About Me</span>
            </div>
            <div className="topic about-topic">Professional Profile</div>
            <p className="about-p">
              I'm Minnu, and I'm excited to share my journey in the tech world with you. Beginning with foundational languages like C, C++, Java, and Python, I've built a strong base in software development.
            </p>
            <p className="about-p">
              Exploring data structures and algorithms honed my problem-solving skills. Transitioning to front-end development, I've mastered HTML, CSS, and JavaScript to craft engaging user interfaces.
            </p>
            <p className="about-p">
              In backend development, I've worked with Flask, integrating databases like SQLite, MySQL, MongoDB, and PostgreSQL. Embracing Node.js and PHP, I've developed scalable web applications.
            </p>
            <div className="resume-buttons">
              <Button variant="outline-light" href={ResumePDF} target="_blank" rel="noopener noreferrer">View my resume</Button>
              <Button variant="outline-light" href={ResumePDF} target="_blank" rel="noopener noreferrer">Download my resume</Button>
            </div>
          </div>
        </Col>
      </Row>
    <GitHub />
    </Container>
  );
};

export default About;
