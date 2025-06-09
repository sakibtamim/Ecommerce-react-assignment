import React from "react";
import { RiLinkedinLine } from "react-icons/ri";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { Card, Col } from "react-bootstrap";
const AboutTeamReuseable = ({ titleimg, titlename, titleposition }) => {
  return (
    <Col lg={4}>
      <Card>
        <div className="teamimg">
          <Card.Img variant="top" src={titleimg} className="w-100" />
        </div>
        <Card.Body>
          <Card.Title>{titlename}</Card.Title>
          <Card.Text>{titleposition}</Card.Text>
          <div className="socials">
            <FiTwitter />
            <FiInstagram />
            <RiLinkedinLine />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AboutTeamReuseable;
