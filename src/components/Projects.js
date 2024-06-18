import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';
import CUTMRP from './Assets/CUTMRP.png'
import YTDL from './Assets/ytdl.png'
import Todo from './Assets/todo.png'
import SMDashboard from './Assets/smd.png'
import FitnessTracker from './Assets/fitness.png'

const projects = [
  {
    id: 1,
    title: 'CUTM Result Portal',
    description: 'The CUTM Result Portal is a web application designed to help students and administrators view and manage academic results efficiently. This repository contains the codebase for the portal, including frontend templates, backend logic, and database configurations.',
    imageUrl: CUTMRP,
    link: 'https://cutm-result-portal.onrender.com/'
  },
  {
    id: 2,
    title: 'Youtube Video Downloader',
    description: 'A simple web application built with Node.js and Express to search for YouTube videos and download them in different qualities.',
    imageUrl: YTDL ,
    link: 'https://ytvdl.onrender.com/'
  },
  {
    id: 3,
    title: 'Smart Pond Monitoring IoT',
    description: 'Description for project three.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Description for project four.The Social Media Dashboard is a responsive web application built with React that provides users with an interface to manage their social media activities. The dashboard includes features like dark mode toggling, a responsive navbar, and various sections such as Dashboard, Followers, Posts, and Settings.',
    imageUrl: SMDashboard,
    link: 'https://social-media-dashboard-nep.vercel.app/'
  },
  {
    id: 5,
    title: 'Todo List Website',
    description: 'Nep-Tasks is a user-friendly web-based Todo List application designed to help you manage your tasks efficiently. The application is built with HTML, CSS, JavaScript, and utilizes Bootstrap for styling and FontAwesome for icons.',
    imageUrl: Todo,
    link: 'https://to-do-list-nep.vercel.app/'
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'The Fitness Tracker Application is a React-based web application designed to help users monitor their fitness activities. It features an overview of their progress, activity cards, friends list, and more, making it easy to keep track of fitness goals and stay motivated.',
    imageUrl: FitnessTracker,
    link: 'https://fitness-tracking-app.vercel.app/'
  }
];

const Projects = () => {
  return (
    <Container className="projects-container">
      <Row>
        <Col className="text-center mb-4">
          <h2 className="projects-title">My Projects</h2>
        </Col>
      </Row>
      <Row>
        {projects.slice(0, 3).map((project) => (
          <Col md={4} key={project.id} className="d-flex align-items-stretch mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="outline-light" href={project.link} target="_blank">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {projects.slice(3, 6).map((project) => (
          <Col md={4} key={project.id} className="d-flex align-items-stretch mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="outline-light" href={project.link} target="_blank">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
