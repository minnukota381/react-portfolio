import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Home.css";
import Minnu from "../Assets/minnukota381.JPG";
import Type from "./Typed";

const Home = () => {
  return (
    <Container fluid className="home">
      <Row className="home-content text-center">
        <Col className="text">
          <div className="home-circle">
            <img src={Minnu} alt="Minnu" className="img-fluid" />
          </div>
          <div className="text-one">Hello there,</div>
          <div className="text-two">I'm Minnu</div>
          <div className="text-three">
            <Type />
          </div>
        </Col>
      </Row>
      <Row className="social-row">
        <Col className="social-col">
          <div className="social-links">
            <a href="https://linkedin.com/in/minnukota381" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/minnukota381" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://instagram.com/minnukota381" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
