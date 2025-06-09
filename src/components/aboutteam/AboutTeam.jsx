import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./aboutteam.css";
import Member1 from "../../assets/member1.png";
import Member2 from "../../assets/member2.png";
import Member3 from "../../assets/member3.png";
import AboutTeamReuseable from "../reuseable/AboutTeamReuseable";

const AboutTeam = () => {
  return (
    <section id="aboutteam">
      <Container>
        <div className="teammenbers">
          <Row>
            <AboutTeamReuseable
              titleimg={Member1}
              titlename="Tom Cruise"
              titleposition="Founder & Chairman"
            />{" "}
            <AboutTeamReuseable
              titleimg={Member2}
              titlename="Emma Watson"
              titleposition="Managing Director"
            />{" "}
            <AboutTeamReuseable
              titleimg={Member3}
              titlename="Will Smith"
              titleposition="Product Designer"
            />
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutTeam;
