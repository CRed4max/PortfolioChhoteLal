import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chhote Lal Kumar </span>
            from <span className="purple"> Patna, India.</span>
            <br />I am a student pursuing BTech in Computer Science And
            Engineering in Malaviya National Institute Of Technology (MNIT),
            Jaipur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Web Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Music Listening
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that makes people life easier !!"{" "}
          </p>
          <footer className="blockquote-footer">Chhote Lal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
