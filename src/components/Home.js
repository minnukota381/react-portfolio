import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import Type from './Typed';
import Minnu from './Assets/minnukota381.JPG';
import Particle from './Particle';

const Home = () => {
  return (
    <section className="home" id="home">
      <Container fluid className="home-content text-center">
        <Particle />

        <Row className="align-items-center">
          <Col xs={12} className="text-center">
            <div className="home-circle">
              <img src={Minnu} alt="Minnu" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <Row className="text">
          <Col xs={12} className="text-center">
            <div className="text-one">Hello there,</div>
            <div className="text-two">I'm Minnu</div>
            <div className="text-three">
              <Type />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
