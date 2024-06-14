import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Navbar.css'; // Optional: You can create additional custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Minnu</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <FaHome className="nav-icon" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaUser className="nav-icon" /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaBriefcase className="nav-icon" /> Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
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
