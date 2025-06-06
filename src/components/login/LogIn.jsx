import React from "react";
import { Button, Col, Container, InputGroup, Row } from "react-bootstrap";
import "./login.css";
import SignUpBanImg from "../../assets/signupban.png";
import Form from "react-bootstrap/Form";

const LogIn = () => {
  return (
    <section id="login">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={7} className="banimg">
            <img src={SignUpBanImg} className="w-100" alt="" />
          </Col>
          <Col lg={4} className="create">
            <h2>Log in to Exclusive</h2>
            <p>Enter your details below</p>

            <InputGroup className="mb-4">
              <Form.Control
                type="email"
                aria-label="Email"
                placeholder="Email or Phone Number"
              />
            </InputGroup>
            <InputGroup>
              <Form.Control
                type="password"
                aria-label="Password"
                placeholder="Password"
              />
            </InputGroup>
            <div className=" access d-flex justify-content-between align-items-center">
              <Button>Log In</Button>
              <a href="">Forget Password?</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogIn;
