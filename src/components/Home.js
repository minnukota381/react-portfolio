import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import Minnu from "./Assets/minnukota381.JPG";
import Type from "./Typed";

const Home = () => {
  return (
    <div className="home">
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
    </div>
  );
};

export default Home;
