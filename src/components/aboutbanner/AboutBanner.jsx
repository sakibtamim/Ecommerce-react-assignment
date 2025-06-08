import React from "react";
import "./aboutbanner.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiSlash } from "react-icons/hi2";
import AboutBan from "../../assets/aboutban.png";
import { CiShop } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";

import { PiCurrencyCircleDollarLight } from "react-icons/pi";

import AboutBannerReuseable from "../reuseable/AboutBannerReuseable";
const AboutBanner = () => {
  return (
    <section id="aboutbanner">
      <Container>
        <Row>
          <Col lg={2} className="subMenu">
            <Link to={"/"}>Home</Link>
            <HiSlash />
            <Link className="active" to={"/about"}>
              About
            </Link>
          </Col>
        </Row>
        <div className="banner">
          <Row className="justify-content-between align-items-center">
            <Col lg={5}>
              <h2>Our Story</h2>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </Col>
            <Col lg={6}>
              <img src={AboutBan} className="w-100" alt="" />
            </Col>
          </Row>
        </div>
        <div className="infos">
          <Row>
            <AboutBannerReuseable
              titleicon={<CiShop />}
              titlerating="10.5k "
              titleinfo="Sallers active our site"
            />
            <AboutBannerReuseable
              titleicon={<PiCurrencyCircleDollarLight />}
              titlerating="33k"
              titleinfo="Mopnthly Produduct Sale"
            />
            <AboutBannerReuseable
              titleicon={<HiOutlineShoppingBag />}
              titlerating="45.5k "
              titleinfo="Customer active in our site"
            />
            <AboutBannerReuseable
              titleicon={<HiOutlineDocumentCurrencyDollar />}
              titlerating="25k"
              titleinfo="Anual gross sale in our site"
            />
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutBanner;
