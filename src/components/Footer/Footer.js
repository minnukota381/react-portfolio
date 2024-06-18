import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col xs={12} md={6} className="text-center text-md-left mb-3 mb-md-0">
            <div className="social-links">
              <a
                href="https://linkedin.com/in/minnukota381"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                href="https://github.com/minnukota381"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="social-icon" />
              </a>
              <a
                href="https://instagram.com/minnukota381"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-right">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Minnu. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
