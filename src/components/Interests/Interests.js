import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InterestCards from "./InterestCards";
import Particle from "../Particle";
import webd from "../../Assets/Projects/webd.jpg";
import coding from "../../Assets/Projects/coding.jpg";
import music from "../../Assets/Projects/music.jpg";

function Interests() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Interests </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I'm interested in ......
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <InterestCards
              imgPath={coding}
              isBlog={false}
              title="Coding"
              description1=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <InterestCards
              imgPath={webd}
              isBlog={false}
              title="Web Development"
              description1=""
            />
          </Col>

          <Col md={4} className="project-card">
            <InterestCards
              imgPath={music}
              isBlog={false}
              title="Music"
              description1=" "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Interests;
