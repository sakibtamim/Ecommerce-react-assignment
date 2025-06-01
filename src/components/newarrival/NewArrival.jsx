import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./newarrival.css";
import PlayStation5 from "../../assets/playstation5.png";
import WomenCollection from "../../assets/womencollection.png";
import Speakers from "../../assets/speaker.png";
import Perfume from "../../assets/perfume.png";
const NewArrival = () => {
  return (
    <section id="newarrival">
      <Container>
        <Row>
          <Col lg={2}>
            <div className="head d-flex align-items-center">
              <div className="box"></div>
              <p>Categories</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="browsetxt">
            <h2>Browse By Category</h2>
          </Col>
        </Row>
        <div className="newbody">
          <Row>
            <Col lg={6}>
              <div className="newbodyitem1 text-center">
                <img src={PlayStation5} alt="" />
                <div className="item1Text">
                  <h3>PlayStation 5</h3>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <a href="">Shop Now</a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Row className="justify-content-betweem">
                <Col lg={12}>
                  <div className="newbodyitem2 text-center">
                    <img src={WomenCollection} alt="" />
                    <div className="item1Text">
                      <h3>Women’s Collections</h3>
                      <p>
                        Featured woman collections that give you another vibe.
                      </p>
                      <a href="">Shop Now</a>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="newbodyitem3 text-center">
                    <img src={Speakers} alt="" />
                    <div className="item1Text">
                      <h3>Speakers</h3>
                      <p>Amazon wireless speakers</p>
                      <a href="">Shop Now</a>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="newbodyitem3 text-center">
                    <img src={Perfume} alt="" />
                    <div className="item1Text">
                      <h3>Perfume</h3>
                      <p>GUCCI INTENSE OUD EDP</p>
                      <a href="">Shop Now</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default NewArrival;
