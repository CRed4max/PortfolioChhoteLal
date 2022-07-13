import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import interview from "../../Assets/Projects/interview.jpg";
import vidhyakash from "../../Assets/Projects/vidhyakash.png";
import examsystem from "../../Assets/Projects/examsystem.jpg";
import university from "../../Assets/Projects/university.jpg";
import chatting from "../../Assets/Projects/chatting.png";
import portfolio from "../../Assets/Projects/portfolio.jpg";
import sensale from "../../Assets/Projects/sensale.png";
import linkedin from "../../Assets/Projects/linkedin.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on .......
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interview}
              isBlog={false}
              title="InterviewMate"
              description1="• A web application which provides complete environment to conduct technical interviews with audio-video interface and code editor
              and runner facility."
              description2="• Other features: Real-time whiteboard, chat box, add participants."
              description3="• Client Tech: React, Redux, SocketIO, JavaScript, WEBRTC."
              description4="• Server Tech: Node, Express, SocketIO, nodemailer."
              gitLink="https://github.com/CRed4max/InterviewMate"
              liveLink="https://github.com/CRed4max/PortfolioChhoteLal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vidhyakash}
              isBlog={false}
              title="VidhyaKaksh"
              description1="• VidhyaKaksh is an online schooling website where people can experience virtual classroom"
              description2="• Any number of classroom can be created. Teachers can post Assignments, Materials to study, maintain a grade-sheet of students for
              every assignments and post important announcements."
              description3="• Tech: HTML, CSS, React js, MySQL, Express-Node.js, Redux, Bootstrap"
              description4=""
              gitLink="https://github.com/CRed4max/VidhyaKaksh"
              liveLink="https://github.com/CRed4max/PortfolioChhoteLal"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sensale}
              isBlog={false}
              title="Sensale: The online shopping platform"
              description1="• The Sensale is an online shopping site with customer panel and admin panel. It contains all the features required for online shopping."
              description2="• Special features includes: Products, Cart, Payment, Admin Panel."
              description3="• Tech: MERN Full Stack, MongoDB, Express.js, React.js, Node.js, JavaScript, HTML, CSS, Bootstrap."
              description4=""
              gitLink="https://github.com/CRed4max/Sensale"
              liveLink="https://sensale.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={examsystem}
              isBlog={false}
              title="Online Examination System Project"
              description1="• A web-application project that is useful for conducting online examinations. An user can give the exam or he can conduct the exam."
              description2="• Special features includes: Create Exam, Add Question, Give Exam, Leaderboard."
              description3="• Tech: Node.js, React.js, firebase, JavaScript, HTML, CSS, Bootstrap."
              description4=""
              gitLink="https://github.com/CRed4max/OnlineExaminationSystem"
              liveLink="https://online-examination-system-cred.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkedin}
              isBlog={false}
              title="LinkedIn Clone"
              description1="• A web-application project that contains some features of LinkedIn application. An user can post their post and also can see others posts"
              description2="• Special features includes: Login, Create Post, See Others Post"
              description3="• Tech: Node.js, React.js, firebase, JavaScript, HTML, CSS, Bootstrap."
              description4=""
              gitLink="https://github.com/CRed4max/LinkedIn-Clone"
              liveLink="https://linkedin-cln.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="ChhoteLal | Portfolio"
              description1="• A web-application which is my portfolio where it's become easy for people to know about me."
              description2="• Important features includes: Home, About, Projects, Resume, Blogs"
              description3="• Tech: Node.js, React.js, JavaScript, HTML, CSS, Bootstrap."
              description4=""
              gitLink="https://github.com/CRed4max/PortfolioChhoteLal"
              liveLink="https://chhotelal-portfolio.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={university}
              isBlog={false}
              title="University Management Application"
              description1="• A desktop-application which is made with the aim of school management."
              description2="• Important features includes: Management of students info, teachers info, fees, attendance, contacts, utilities and updates regarding
              the university."
              description3="• Tech: Java, Swing, JFrame, JLabel, MySQL(connector used JDBC)."
              description4=""
              gitLink="https://github.com/CRed4max/universityManagement"
              liveLink="https://github.com/CRed4max/universityManagement"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatting}
              isBlog={false}
              title="Realtime Chat Application"
              description1="• A web-application which is made with the aim of online chatting."
              description2="• Important features includes: Login, Logout, Personal Chat, Group Chat"
              description3="• Tech: React.js, firebase, JavaScript, HTML, CSS."
              description4=""
              gitLink="https://github.com/CRed4max/"
              liveLink="https://github.com/CRed4max/PortfolioChhoteLal"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
