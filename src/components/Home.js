import React from "react";
import "./Home.css";
import Minnu from "./Assets/minnukota381.JPG";
import Type from "./Typed";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content text-center">
        <div className="text">
          <div className="home-circle">
            <img src={Minnu} alt="Minnu" className="img-fluid" />
          </div>
          <div className="text-one">Hello there,</div>
          <div className="text-two">I'm Minnu</div>
          <div className="text-three">
            <div>
              <Type />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
