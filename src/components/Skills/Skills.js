import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaJava, FaPython, FaCss3, FaHtml5, FaCode } from "react-icons/fa";
import { DiJavascript1, DiNodejsSmall, DiReact, DiWindows, DiTerminal, DiGit, DiGithubBadge, DiMongodb, DiMysql, DiPostgresql, DiVisualstudio } from "react-icons/di";
import { SiBootstrap, SiPhp, SiFlask, SiSqlite, SiVercel, SiNetlify } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import "./Skills.css";

const Skills = () => {
  return (
    <Container className="skills-container">
      <h2 className="skills-heading">Programming Languages</h2>
      <Row className="row PL">
        <Col className="col">
          <FaJava className="skill-icon java" />
          <span>Java</span>
        </Col>
        <Col className="col">
          <CgCPlusPlus className="skill-icon cpp" />
          <span>C++</span>
        </Col>
        <Col className="col">
          <FaPython className="skill-icon python" />
          <span>Python</span>
        </Col>
        <Col className="col">
          <FaCode className="skill-icon c" />
          <span>C</span>
        </Col>
      </Row>

      <h2 className="skills-heading ">Web Technologies</h2>
      <Row className="row WT">  
      <Row>
        <Col className="col">
          <FaHtml5 className="skill-icon html" />
          <span>HTML</span>
        </Col>
        <Col className="col">
          <FaCss3 className="skill-icon css" />
          <span>CSS</span>
        </Col>
        <Col className="col">
          <DiJavascript1 className="skill-icon js" />
          <span>JavaScript</span>
        </Col>
        <Col className="col">
          <SiBootstrap className="skill-icon bootstrap" />
          <span>Bootstrap</span>
        </Col>
      </Row>
      <Row>
        <Col className="col">
          <DiReact className="skill-icon react" />
          <span>React.js</span>
        </Col>
        <Col className="col">
          <DiNodejsSmall className="skill-icon nodejs" />
          <span>Node.js</span>
        </Col>
        <Col className="col">
          <SiPhp className="skill-icon php" />
          <span>PHP</span>
        </Col>
        <Col className="col">
          <SiFlask className="skill-icon flask" />
          <span>Flask</span>
        </Col>
      </Row>
      </Row>
      
      <h2 className="skills-heading">Databases</h2>
      <Row className="row DB">
        <Col className="col">
          <DiMysql className="skill-icon mysql" />
          <span>MySQL</span>
        </Col>
        <Col className="col">
          <SiSqlite className="skill-icon sqlite" />
          <span>SQLite</span>
        </Col>
        <Col className="col">
          <DiMongodb className="skill-icon mongodb" />
          <span>MongoDB</span>
        </Col>
        <Col className="col">
          <DiPostgresql className="skill-icon postgresql" />
          <span>PostgreSQL</span>
        </Col>
      </Row>

      <h2 className="skills-heading">Tools and Platforms</h2>
      <Row className="row TP"> 
      <Row className="row">
        <Col className="col">
          <DiGit className="skill-icon git" />
          <span>Git</span>
        </Col>
        <Col className="col">
          <DiGithubBadge className="skill-icon github" />
          <span>GitHub</span>
        </Col>
        <Col className="col">
          <DiTerminal className="skill-icon terminal" />
          <span>Terminal</span>
        </Col>
        <Col className="col">
          <SiNetlify className="skill-icon netlify" />
          <span>Netlify</span>
        </Col>
      </Row>
      <Row className="row">
        <Col className="col">
          <SiVercel className="skill-icon vercel" />
          <span>Vercel</span>
        </Col>
        <Col className="col">
          <DiVisualstudio className="skill-icon vscode" />
          <span>VS Code</span>
        </Col>
        <Col className="col">
          <DiWindows className="skill-icon windows" />
          <span>Windows</span>
        </Col>
      </Row>
      </Row>

    </Container>
  );
};

export default Skills;
