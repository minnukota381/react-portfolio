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
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#2">
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
              <a className="nav-link active" aria-current="page" href="#2">
                <AiOutlineHome className="nav-icon" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
                <AiOutlineUser className="nav-icon" /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
                <GrTechnology className="nav-icon" /> Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
                <FaDiagramProject className="nav-icon" /> Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
                <CgFileDocument className="nav-icon" /> Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
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
