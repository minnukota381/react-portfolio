import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';
import './GitHub.css';

const GitHub = () => {
  return (
    <Container fluid className="github-container">
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h3 className="github-title">My GitHub Contributions</h3>
          <div className="github-calendar-wrapper">
            <GitHubCalendar username="minnukota381" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GitHub;