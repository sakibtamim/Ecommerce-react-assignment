import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./body404.css";
import { Link } from "react-router-dom";
import { HiSlash } from "react-icons/hi2";
const Body404 = () => {
  return (
    <section id="body404">
      <Container>
        <div className="subMenu">
          <Row>
            <Col lg={2}>
              <Link to={"/"}>Home</Link> <HiSlash />
              <Link className="active" to={"/404"}>
                404 Error
              </Link>
            </Col>
          </Row>
        </div>
        <div className="main">
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2>404 Not Found</h2>
              <p>Your visited page not found. You may go home page.</p>
              <a href="">Back to home page</a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Body404;
