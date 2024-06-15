import React from 'react';
import './Home.css';
import Type from './Typed'
import Minnu from './Assets/minnu.png';


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content text-center">
        <div className="text">
          <div className="home-circle">
            <img src={Minnu} alt="Minnu" className="img-fluid" />
          </div>
          <div className="text-one">Hello there,</div>
          <div className="text-two">I'm Minnu</div>
          <Type/>
        </div>
      </div>
    </section>
  );
};

export default Home;
