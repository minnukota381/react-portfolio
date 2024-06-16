import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { particleOptions, initParticles } from "./Particle"; // Adjust path as necessary
import "./Home.css";
import Minnu from "./Assets/minnukota381.JPG";
import Type from "./Typed";

const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticles().then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  if (init) {
    return (
      <div className="home">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
        />
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
  }

  return <div>Loading particles...</div>;
};

export default Home;
