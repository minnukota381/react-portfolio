import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Resume.css'; // Add your custom styles here if needed
import ResumePDF from './Assets/Resume.pdf'; // Ensure the path to your resume PDF is correct

const Resume = () => {
  return (
    <Container fluid className="resume-container">
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h2 className="resume-title">My Resume</h2>
          <iframe
            src={ResumePDF}
            className="resume-iframe"
            title="Resume"
          ></iframe>
          <div className="resume-buttons">
            <Button variant="outline-light" href={ResumePDF} target="_blank" rel="noopener noreferrer">
              Download my resume
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
