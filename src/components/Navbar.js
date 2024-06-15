import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import MinnuLogo from './Assets/minnu_logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#2">
          <img src={MinnuLogo} alt="Minnu" /> 
          Minnu
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#2">
                <FaHome className="nav-icon" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
                <FaUser className="nav-icon" /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
                <FaUser className="nav-icon" /> Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
                <FaBriefcase className="nav-icon" /> Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
                <FaEnvelope className="nav-icon" /> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
