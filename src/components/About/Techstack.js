import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiBootstrap,
  DiCss3, 
  DiJava,
  DiJavascript1,
  DiMysql,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        < DiJava/> <h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> <h6>C++</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> <h6>React</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> <h6>NodeJs</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap /> <h6>Bootstrap</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> <h6>CSS</h6>
      </Col>
      
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h6>MySql</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h6>Firebase</h6>
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
