import React from "react";
import { Button, Col, Container, InputGroup, Row } from "react-bootstrap";
import "./contactForm.css";
import { Link } from "react-router-dom";
import { HiSlash } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import Form from "react-bootstrap/Form";
import { FaStarOfLife } from "react-icons/fa";

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

        <Row className="justify-content-between">
          <Col lg={3} className="contactinfo">
            <div className="callus d-flex gap-3 align-items-center mb-4">
              <div className="circle text-center">
                <FiPhone />
              </div>
              <h6>Call To Us</h6>
            </div>
            <div className="details">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className="write d-flex gap-3 align-items-center mb-4">
              <div className="circle text-center">
                <MdOutlineMailOutline />
              </div>
              <h6>Call To Us</h6>
            </div>
            <div className="mail">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </Col>
          <Col lg={8} className="conform text-end">
            <div className="input d-flex gap-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  aria-label="Your name"
                  placeholder="Your name"
                />
                <span>
                  <FaStarOfLife />
                </span>
              </InputGroup>
              <InputGroup>
                <Form.Control
                  type="email"
                  aria-label=" Your Email"
                  placeholder="Your Email "
                  required
                />
                <span>
                  <FaStarOfLife />
                </span>
              </InputGroup>
              <InputGroup>
                <Form.Control
                  type="tel"
                  aria-label="Your Phone"
                  placeholder="Your Phone "
                  required
                />
                <span>
                  <FaStarOfLife />
                </span>
              </InputGroup>
            </div>
            <InputGroup>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                placeholder="Your massage"
                required
              />
            </InputGroup>
            <Button>send massage</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
