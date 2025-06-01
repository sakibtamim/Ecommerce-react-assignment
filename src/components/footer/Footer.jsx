import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import { VscSend } from "react-icons/vsc";
import QR from "../../assets/qr.png";
import GooglePlay from "../../assets/googleplay.png";
import AppleStore from "../../assets/applestore.png";
import { PiCopyrightLight } from "react-icons/pi";

import {
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "react-icons/ri";
const Footer = () => {
  return (
    <section id="footer">
      <Container>
        <div className="main">
          <Row className="justify-content-between">
            <Col lg={3} className="body">
              <h2>Exclusive</h2>
              <h3>Subscribe</h3>
              <p>Get 10% off your first order</p>
              <div className="subscribe">
                <input type="email" placeholder="Enter Your Email" />
                <VscSend />
              </div>
            </Col>
            <Col lg={2} className="body">
              <h3>Support</h3>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </Col>
            <Col lg={2} className="body">
              <h3>Account</h3>
              <ul>
                <li>
                  <a href="">My Account</a>
                </li>
                <li>
                  <a href="">Login / Register</a>
                </li>
                <li>
                  <a href="">Cart</a>
                </li>
                <li>
                  <a href="">Wishlist</a>
                </li>
                <li>
                  <a href="">Shop</a>
                </li>
              </ul>
            </Col>
            <Col lg={2} className="body">
              <h3>Quick Link</h3>
              <ul>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms Of Use</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </Col>
            <Col lg={2} className="body">
              <h3>Download App</h3>
              <span>Save $3 with App New User Only</span>
              <div className="apps">
                <Row>
                  <Col lg={6}>
                    <img src={QR} className="w-100" alt="" />
                  </Col>
                  <Col lg={6}>
                    <div className="play d-flex gap-1">
                      <img src={GooglePlay} alt="" />
                      <div className="text">
                        <p>Get it on</p>
                        <h6>Google Play</h6>
                      </div>
                    </div>
                    <div className="applestore d-flex gap-1">
                      <img src={AppleStore} alt="" />
                      <div className="text">
                        <p>Download on the</p>
                        <h6>App Store</h6>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="socials d-flex justify-content-between">
                <RiFacebookLine />
                <RiTwitterLine />
                <RiInstagramLine />
                <RiLinkedinLine />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="footer text-center">
        <p>
          <PiCopyrightLight /> Copyright Sakib 2025. All right reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
