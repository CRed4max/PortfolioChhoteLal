import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiFirebase,
} from "react-icons/si";

import { DiMysql } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux /> <h6>Linux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> <h6>Visual Studio Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h6>MySql</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /> <h6>Firebase</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku /> <h6>Heroku</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
