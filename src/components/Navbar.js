import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { CgFileDocument } from "react-icons/cg";
import { FaDiagramProject } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import './Navbar.css'; // Your custom styles
import MinnuLogo from './Assets/minnu.png';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={MinnuLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Minnu"
          />{' '}
          Minnu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" onClick={toggleNavbar} />
        <Navbar.Collapse id="navbarNav" className={isOpen ? 'show' : ''}>
          <Nav className="ms-auto">
            <Nav.Link href="/">
              <AiOutlineHome className="nav-icon" /> Home
            </Nav.Link>
            <Nav.Link href="/about">
              <AiOutlineUser className="nav-icon" /> About
            </Nav.Link>
            <Nav.Link href="/skills">
              <GrTechnology className="nav-icon" /> Skills
            </Nav.Link>
            <Nav.Link href="/projects">
              <FaDiagramProject className="nav-icon" /> Projects
            </Nav.Link>
            <Nav.Link href="/resume">
              <CgFileDocument className="nav-icon" /> Resume
            </Nav.Link>
            <Nav.Link href="/contact">
              <RiContactsLine className="nav-icon" /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
