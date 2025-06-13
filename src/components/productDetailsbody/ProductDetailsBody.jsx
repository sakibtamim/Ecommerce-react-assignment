import React from "react";
import "react-inner-image-zoom/lib/styles.min.css";

import { Col, Container, Row } from "react-bootstrap";
import "./productdetailsbody.css";
import PScontrolle1 from "../../assets/pscontroller01.png";
import PScontrolle2 from "../../assets/pscontroller02.png";
import PScontrolle3 from "../../assets/pscontroller03.png";
import PScontrolle4 from "../../assets/pscontroller04.png";
import PScontrolle5 from "../../assets/pscontroller05.png";
import InnerImageZoom from "react-inner-image-zoom";

const ProductDetailsBody = () => {
  return (
    <section id="productdetailsbody">
      <Container>
        <Row className="justify-content-between">
          <Col lg={2}>
            <div className="productitemimg text-center">
              <img src={PScontrolle2} alt="" />
            </div>
            <div className="productitemimg text-center">
              <img src={PScontrolle3} alt="" />
            </div>
            <div className="productitemimg text-center">
              <img src={PScontrolle4} alt="" />
            </div>
            <div className="productitemimg text-center">
              <img src={PScontrolle5} alt="" />
            </div>
          </Col>
          <Col lg={5}>
            <div className="productmainimg">
              <InnerImageZoom
                src={PScontrolle1}
                zoomType="hover"
                zoomScale={1.5}
                alt="PlayStation Controller"
                fullscreenOnMobile={true}
              />
            </div>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetailsBody;
