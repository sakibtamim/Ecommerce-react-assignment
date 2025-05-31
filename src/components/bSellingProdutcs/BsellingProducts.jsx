import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./bsellingProducts.css";
import NorthCloth from "../../assets/northcloth.png";
import GucciBag from "../../assets/guccibag.png";
import CpuCooler from "../../assets/cpucooler.png";
import BookSelf from "../../assets/bookself.png";
import BsellingProductsReuseable from "../reuseable/BsellingProductsReuseable";

const BsellingProducts = () => {
  return (
    <section id="bsellingproducts">
      <Container>
        <Row>
          <Col lg={2}>
            <div className="head d-flex align-items-center">
              <div className="box"></div>
              <p>This Month</p>
            </div>
          </Col>
        </Row>
        <Row className="productTxt align-items-center justify-content-between">
          <Col lg={4} className="browsetxt">
            <h2>Best Selling Products</h2>
          </Col>
          <Col lg={2} className="viewall text-end">
            <a href="">View all</a>
          </Col>
        </Row>
        <Row>
          <BsellingProductsReuseable
            titleImg={NorthCloth}
            titleName="The north coat"
            titleDiscount="$260"
            titleRegular="$360"
            titleRating="65"
          />
          <BsellingProductsReuseable
            titleImg={GucciBag}
            titleName="Gucci duffle bag"
            titleDiscount="$960"
            titleRegular="$1160"
            titleRating="90"
          />
          <BsellingProductsReuseable
            titleImg={CpuCooler}
            titleName="RGB liquid CPU Cooler"
            titleDiscount="$160"
            titleRegular="$170"
            titleRating="60"
          />
          <BsellingProductsReuseable
            titleImg={BookSelf}
            titleName="Small BookSelf"
            titleDiscount="$360"
            titleRegular=""
            titleRating="70"
          />
        </Row>
      </Container>
    </section>
  );
};

export default BsellingProducts;
