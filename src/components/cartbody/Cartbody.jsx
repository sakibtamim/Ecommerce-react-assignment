import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./cartbody.css";
import { Link } from "react-router-dom";
import { HiSlash } from "react-icons/hi2";
import CartMonitor from "../../assets/cartmonitor.png";
import Cartgamepad from "../../assets/cartgamepad.png";
const Cartbody = () => {
  return (
    <section id="cardbody">
      <Container>
        <div className="circleWishlist text-center">4</div>
        <div className="circlecart text-center">2</div>
        <div className="subMenu">
          <Row>
            <Col lg={2}>
              <Link to={"/"}>Home</Link>
              <HiSlash />
              <Link to={"/cart"} className="active">
                Cart
              </Link>
            </Col>
          </Row>
        </div>
        <div className="header">
          <Row className="justify-content-between">
            <Col lg={3}>
              <h6>Product</h6>
            </Col>
            <Col lg={1}>
              <h6>Price</h6>
            </Col>
            <Col lg={1}>
              <h6>Quantity</h6>
            </Col>
            <Col lg={2} className="text-end">
              <h6>Subtotal</h6>
            </Col>
          </Row>
        </div>
        <div className="cartItems">
          <Row className="justify-content-between align-items-center">
            <Col lg={3} className="d-flex align-items-center gap-3">
              <img src={CartMonitor} alt="" />
              <h6>LCD Monitor</h6>
            </Col>
            <Col lg={1}>
              <h6>$650</h6>
            </Col>
            <Col lg={1}>
              <input type="number" placeholder="01" />
            </Col>
            <Col lg={2} className="text-end">
              <h6>$650</h6>
            </Col>
          </Row>
        </div>
        <div className="cartItems">
          <Row className="justify-content-between align-items-center">
            <Col lg={3} className="d-flex align-items-center gap-3">
              <img src={Cartgamepad} alt="" />
              <h6>H1 Gamepad</h6>
            </Col>
            <Col lg={1}>
              <h6>$550</h6>
            </Col>
            <Col lg={1}>
              <input type="number" placeholder="02" />
            </Col>
            <Col lg={2} className="text-end">
              <h6>$1100</h6>
            </Col>
          </Row>
        </div>
        <div className="updatereturn">
          <Row className="justify-content-between">
            <Col lg={3}>
              <a href="">Return To Shop</a>
            </Col>
            <Col lg={3} className="text-end">
              <a href="">Update Cart</a>
            </Col>
          </Row>
        </div>
        <div className="totalcoupon">
          <Row className="justify-content-between">
            <Col lg={6}>
              <Row>
                <Col lg={6}>
                  <input type="text" placeholder="Coupon Code" />
                </Col>
                <Col lg={6}>
                  <button>Apply Coupon</button>
                </Col>
              </Row>
            </Col>
            <Col lg={5} className="total ">
              <h3>Cart Total</h3>
              <div className="subtotal">
                <Row className="justify-content-between">
                  <Col lg={6}>
                    <h6>Subtotal:</h6>
                  </Col>
                  <Col lg={6} className="text-end">
                    <h6>$1750</h6>
                  </Col>
                </Row>
              </div>
              <div className="shipping">
                <Row className="justify-content-between">
                  <Col lg={6}>
                    <h6>Shipping:</h6>
                  </Col>
                  <Col lg={6} className="text-end">
                    <h6>Free</h6>
                  </Col>
                </Row>
              </div>
              <div className="totalammount">
                <Row className="justify-content-between">
                  <Col lg={6}>
                    <h6>Total:</h6>
                  </Col>
                  <Col lg={6} className="text-end">
                    <h6>$1750</h6>
                  </Col>
                </Row>
              </div>
              <div className="checkout text-center">
                <Link to={"/checkout"}>Procees to checkout</Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Cartbody;
