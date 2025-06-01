import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./commitment.css";
import Delivery from "../../assets/delivery.png";
import Customer from "../../assets/customer.png";
import Guarantee from "../../assets/guarantee.png";
const Commitment = () => {
  return (
    <section id="commitment">
      <Container>
        <div className="body">
          <Row>
            <Col lg={10} className="mx-auto text-center">
              <Row>
                <Col lg={4}>
                  <img src={Delivery} alt="" />
                  <h3>FREE AND FAST DELIVERY</h3>
                  <p>Free delivery for all orders over $140</p>
                </Col>
                <Col lg={4}>
                  <img src={Customer} alt="" />
                  <h3>24/7 CUSTOMER SERVICE</h3>
                  <p>Friendly 24/7 customer support</p>
                </Col>
                <Col lg={4}>
                  <img src={Guarantee} alt="" />
                  <h3>MONEY BACK GUARANTEE</h3>
                  <p>We reurn money within 30 days</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Commitment;
