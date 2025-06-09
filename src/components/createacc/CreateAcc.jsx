import React from "react";
import { Button, Col, Container, InputGroup, Row } from "react-bootstrap";
import "./createacc.css";
import SignUpBanImg from "../../assets/signupban.png";
import Form from "react-bootstrap/Form";
import GoogleIcon from "../../assets/IconGoogle.png";
import { Link } from "react-router-dom";
const CreateAcc = () => {
  return (
    <section id="createacc">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={7} className="banimg">
            <img src={SignUpBanImg} className="w-100" alt="" />
          </Col>
          <Col lg={4} className="create">
            <h2>Create an account</h2>
            <p>Enter your details below</p>
            <InputGroup className="mb-4">
              <Form.Control type="text" aria-label="Name" placeholder="name" />
            </InputGroup>
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
            <Button>create account</Button>
            <div className="withgoogle d-flex justify-content-center text-center">
              <img src={GoogleIcon} alt="" />
              <p>Sign up with Google</p>
            </div>
            <div className="haveacc text-center">
              <p>
                Already have account? <Link to={"/login"}>Log in</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CreateAcc;
