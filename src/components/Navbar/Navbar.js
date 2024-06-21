import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { RiContactsLine } from 'react-icons/ri';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { FaDiagramProject } from 'react-icons/fa6';
import { GrTechnology } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import './Navbar.css';
import MinnuLogo from '../Assets/minnu.png';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={MinnuLogo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Minnu"
          />{' '}
          Minnu
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNav"
          onClick={toggleNavbar}
          className={`${isOpen ? 'close-btn' : ''}`}
        >
          {isOpen ? (
            <Button variant="link" className="close-button">
              <IoMdClose className="close-icon" />
            </Button>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarNav" className={isOpen ? 'show' : ''}>
          <Nav className="ms-auto">
            <Nav.Link href="/" onClick={() => setIsOpen(false)} className="nav-link">
              <AiOutlineHome className="nav-icon" /> Home
            </Nav.Link>
            <Nav.Link href="/about" onClick={() => setIsOpen(false)} className="nav-link">
              <AiOutlineUser className="nav-icon" /> About
            </Nav.Link>
            <Nav.Link href="/skills" onClick={() => setIsOpen(false)} className="nav-link">
              <GrTechnology className="nav-icon" /> Skills
            </Nav.Link>
            <Nav.Link href="/projects" onClick={() => setIsOpen(false)} className="nav-link">
              <FaDiagramProject className="nav-icon" /> Projects
            </Nav.Link>
            <Nav.Link href="/resume" onClick={() => setIsOpen(false)} className="nav-link">
              <CgFileDocument className="nav-icon" /> Resume
            </Nav.Link>
            <Nav.Link href="/contact" onClick={() => setIsOpen(false)} className="nav-link">
              <RiContactsLine className="nav-icon" /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;