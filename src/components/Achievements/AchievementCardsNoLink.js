import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function AchievementCardsNoLink(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      {/* <Card.Img variant="top" style={{height: 200, width: 400 }} src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description1}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default AchievementCardsNoLink;
