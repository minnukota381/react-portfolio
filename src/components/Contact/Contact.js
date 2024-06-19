import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';
import Developer from '../Assets/Developer.svg';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <Container fluid className="contact-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} md={4} className="text-center">
          <img src={Developer} alt="Contact" className="contact-svg" />
        </Col>
        <Col xs={12} md={6} className="contact-form">
          <h2>Contact Me</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control type="email" placeholder="Your Email" required />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control as="textarea" rows={5} placeholder="Your Message" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
