import React, { useState } from 'react';
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { CgFileDocument } from "react-icons/cg";
import { FaDiagramProject } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import MinnuLogo from './Assets/minnu.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src={MinnuLogo} alt="Minnu" />
          Minnu
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">
                <AiOutlineHome className="nav-icon" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <AiOutlineUser className="nav-icon" /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                <GrTechnology className="nav-icon" /> Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                <FaDiagramProject className="nav-icon" /> Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                <CgFileDocument className="nav-icon" /> Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <RiContactsLine className="nav-icon" /> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
