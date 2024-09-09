import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaJava, FaPython, FaCss3, FaHtml5} from "react-icons/fa";
import { DiJavascript1, DiNodejsSmall, DiReact, DiTerminal, DiGit, DiGithubBadge, DiMongodb, DiMysql, DiPostgresql, DiVisualstudio, DiSass } from "react-icons/di";
import { SiBootstrap, SiPhp, SiFlask, SiSqlite, SiVercel, SiNetlify, SiRender, SiExpress, SiJquery, SiTypescript, SiSpringboot, SiGraphql, SiQiskit, SiPostman } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import "./Skills.css";
import { FaAngular, FaAws, FaC } from "react-icons/fa6";

const Skills = () => {
  return (
    <Container className="skills-container">
      <h2 className="skills-heading">Programming Languages</h2>
      <Row className="row PL">
        <Col className="col-skills">
          <FaC className="skill-icon c" />
          <span>C</span>
        </Col>
        <Col className="col-skills">
          <CgCPlusPlus className="skill-icon cpp" />
          <span>C++</span>
        </Col>
        <Col className="col-skills">
          <FaJava className="skill-icon java" />
          <span>Java</span>
        </Col>
        <Col className="col-skills">
          <FaPython className="skill-icon python" />
          <span>Python</span>
        </Col>
      </Row>

      <h2 className="skills-heading">Web Technologies</h2>
      <Row className="row WT">
        <Row>
          <Col className="col-skills">
            <FaHtml5 className="skill-icon html" />
            <span>HTML</span>
          </Col>
          <Col className="col-skills">
            <FaCss3 className="skill-icon css" />
            <span>CSS</span>
          </Col>
          <Col className="col-skills">
            <DiJavascript1 className="skill-icon js" />
            <span>JavaScript</span>
          </Col>
          <Col className="col-skills">
            <SiBootstrap className="skill-icon bootstrap" />
            <span>Bootstrap</span>
          </Col>
        </Row>
        <Row>
          <Col className="col-skills">
            <DiReact className="skill-icon react" />
            <span>React.js</span>
          </Col>
          <Col className="col-skills">
            <FaAngular className="skill-icon angular" />
            <span>Angular</span>
          </Col>
          <Col className="col-skills">
            <DiSass className="skill-icon sass" />
            <span>SASS</span>
          </Col>
          <Col className="col-skills">
            <SiTypescript className="skill-icon typescript" />
            <span>TypeScript</span>
          </Col>
        </Row>
        <Row>
          <Col className="col-skills">
            <SiJquery className="skill-icon jquery" />
            <span>jQuery</span>
          </Col>
          <Col className="col-skills">
            <SiFlask className="skill-icon flask" />
            <span>Flask</span>
          </Col>
          <Col className="col-skills">
            <DiNodejsSmall className="skill-icon nodejs" />
            <span>Node.js</span>
          </Col>
          <Col className="col-skills">
            <SiExpress className="skill-icon express" />
            <span>Express</span>
          </Col>
        </Row>
        <Row>
          <Col className="col-skills">
            <SiPhp className="skill-icon php" />
            <span>PHP</span>
          </Col>
          <Col className="col-skills">
            <SiSpringboot className="skill-icon springboot" />
            <span>Spring Boot</span>
          </Col>
          <Col className="col-skills">
            <SiPostman className="skill-icon postman" />
            <span>Postman</span>
          </Col>
          <Col className="col-skills">
            <FaAws className="skill-icon aws" />
            <span>AWS</span>
          </Col>
        </Row>
      </Row>

      <h2 className="skills-heading">Databases</h2>
      <Row className="row DB">
        <Col className="col-skills">
          <DiMysql className="skill-icon mysql" />
          <span>MySQL</span>
        </Col>
        <Col className="col-skills">
          <SiSqlite className="skill-icon sqlite" />
          <span>SQLite</span>
        </Col>
        <Col className="col-skills">
          <DiMongodb className="skill-icon mongodb" />
          <span>MongoDB</span>
        </Col>
        <Col className="col-skills">
          <DiPostgresql className="skill-icon postgresql" />
          <span>PostgreSQL</span>
        </Col>
      </Row>

      <h2 className="skills-heading">Tools and Platforms</h2>
      <Row className="row TP">
        <Row className="row">
          <Col className="col-skills">
            <DiGit className="skill-icon git" />
            <span>Git</span>
          </Col>
          <Col className="col-skills">
            <DiGithubBadge className="skill-icon github" />
            <span>GitHub</span>
          </Col>
          <Col className="col-skills">
            <DiTerminal className="skill-icon terminal" />
            <span>Terminal</span>
          </Col>
          <Col className="col-skills">
            <DiVisualstudio className="skill-icon vscode" />
            <span>VS Code</span>
          </Col>
        </Row>
        <Row>
        <Col className="col-skills">
          <SiQiskit className="skill-icon qiskit" />
          <span>Qiskit</span>
        </Col>
          <Col className="col-skills">
            <SiVercel className="skill-icon vercel" />
            <span>Vercel</span>
          </Col>
          <Col className="col-skills">
            <SiNetlify className="skill-icon netlify" />
            <span>Netlify</span>
          </Col>
          <Col className="col-skills">
            <SiRender className="skill-icon render" />
            <span>Render</span>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Skills;
