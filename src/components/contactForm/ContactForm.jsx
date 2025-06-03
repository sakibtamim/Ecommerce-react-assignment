import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./contactForm.css";
import { Link } from "react-router-dom";
import { HiSlash } from "react-icons/hi2";
const ContactForm = () => {
  return (
    <section id="contactForm">
      <Container>
        <Row>
          <Col lg={2} className="subMenu">
            <Link to={"/"}>Home</Link> <HiSlash />
            <Link to={"/contact"} className="active">
              Contact
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
