import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./checkoutbody.css";
import { HiSlash } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Cartgamepad from "../../assets/cartgamepad.png";
import Cartmonitor from "../../assets/cartmonitor.png";
import Bkash from "../../assets/bkash.png";
import Nagad from "../../assets/nagad.png";
import Visa from "../../assets/visa.png";
import MasterCard from "../../assets/mastercard.png";
const CheckoutBody = () => {
  return (
    <section id="checkoutbody">
      <Container>
        <div className="head">
          <Row>
            <Col lg={5}>
              <Link to={"/userloginhome"}>Account</Link> <HiSlash />
              <Link to={"/useraccount"}>My Account</Link> <HiSlash />
              <Link to={"/products"}>Product</Link> <HiSlash />
              <Link to={"/cart"}>View Cart</Link> <HiSlash />
              <Link to={"/checkout"} className="active">
                CheckOut
              </Link>
            </Col>
          </Row>
        </div>

        <div className="billing">
          <Row className="align-items-center justify-content-between">
            <Col lg={5}>
              <h2>Billing Details</h2>
              <div className="form">
                <label htmlFor="">
                  First Name<span>*</span>
                </label>
                <input type="text" placeholder="" />
                <label htmlFor="">Company Name</label>
                <input type="text" placeholder="" />
                <label htmlFor="">
                  Street Address<span>*</span>
                </label>
                <input type="text" placeholder="" />
                <label htmlFor="">Apartment, floor, etc. (optional)</label>
                <input type="text" placeholder="" />
                <label htmlFor="">
                  Town/City<span>*</span>
                </label>
                <input type="text" placeholder="" />
                <label htmlFor="">
                  Phone Number<span>*</span>
                </label>
                <input type="tel" placeholder="" />
                <label htmlFor="">
                  Email Address<span>*</span>
                </label>
                <input type="email" placeholder="" />

                <div className="checkpoint d-flex  gap-3 align-items-center">
                  <input className="check" type="checkbox" />
                  <p>Save this information for faster check-out next time</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={11}>
                  <div className="items d-flex justify-content-between align-items-center">
                    <div className="itemname d-flex gap-4 align-items-center">
                      <img src={Cartgamepad} alt="" />
                      <p>LCD Monitor</p>
                    </div>
                    <div className="price">
                      <p>$650</p>
                    </div>
                  </div>
                  <div className="items d-flex justify-content-between align-items-center">
                    <div className="itemname d-flex gap-4 align-items-center">
                      <img src={Cartmonitor} alt="" />
                      <p>H1 Gamepad</p>
                    </div>
                    <div className="price">
                      <p>$1100</p>
                    </div>
                  </div>
                  <div className="subtotal d-flex justify-content-between align-items-center">
                    <h6>Subtotal:</h6>
                    <p>$1750</p>
                  </div>
                  <div className="shipping d-flex justify-content-between align-items-center">
                    <h6>Shipping:</h6>
                    <p>Free</p>
                  </div>
                  <div className="total d-flex justify-content-between align-items-center">
                    <h6>Total:</h6>
                    <p>$1750</p>
                  </div>

                  <div className="bank d-flex justify-content-between align-items-center">
                    <div className="option d-flex gap-3 align-items-center">
                      <input type="radio" name="Bank" id="" />
                      <label htmlFor="">Bank</label>
                    </div>
                    <div className="payoption d-flex gap-3 align-items-center">
                      <img src={Bkash} className="w-100" alt="" />
                      <img src={Visa} className="w-100" alt="" />
                      <img src={MasterCard} className="w-100" alt="" />
                      <img src={Nagad} className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="cashondelivery d-flex justify-content-between align-items-center">
                    <div className="option d-flex gap-3 align-items-center">
                      <input type="radio" name="Bank" id="" />
                      <label htmlFor="">Cash on delivery</label>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="coupon">
                <Row className="align-items-center">
                  <Col lg={8}>
                    <input type="text" placeholder="Coupon Code" />
                  </Col>
                  <Col lg={4}>
                    <button>Apply Coupon</button>
                  </Col>
                </Row>
              </div>
              <div className="placeorder">
                <Link to={"/404"}>Place Order</Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CheckoutBody;
