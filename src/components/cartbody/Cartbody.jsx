import React from "react";
import { Container } from "react-bootstrap";
import "./cartbody.css";
const Cartbody = () => {
  return (
    <section id="cardbody">
      <Container>
        <div className="circleWishlist text-center">4</div>
        <div className="circlecart text-center">2</div>
      </Container>
    </section>
  );
};

export default Cartbody;
