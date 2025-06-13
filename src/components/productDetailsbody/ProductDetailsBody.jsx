import React, { useState } from "react";
import "react-inner-image-zoom/lib/styles.min.css";

import { Col, Container, Row } from "react-bootstrap";
import "./productdetailsbody.css";
import PScontrolle1 from "../../assets/pscontroller01.png";
import PScontrolle2 from "../../assets/pscontroller02.png";
import PScontrolle3 from "../../assets/pscontroller03.png";
import PScontrolle4 from "../../assets/pscontroller04.png";
import PScontrolle5 from "../../assets/pscontroller05.png";
import InnerImageZoom from "react-inner-image-zoom";
import { FaStar } from "react-icons/fa";
import { GoDash, GoPlus } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
const ProductDetailsBody = () => {
  let [count, setCount] = useState(0);
  function CounterUp() {
    setCount(count + 1);
  }
  function CounterDown() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
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
          <Col lg={4}>
            <div className="productdetails">
              <h2>Havic HV G-92 Gamepad</h2>
              <div className="review">
                <span className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="blank" />
                </span>
                <span className="reviewcount">(150 Reviews)</span>
                <span className="gapping">|</span>
                <span className="stock">In Stock</span>
              </div>
              <h6>$192.00</h6>
              <p>
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
              <div className="colors d-flex align-items-center">
                <h5>Colours:</h5>
                <div className="blueoption">
                  <div className="active"></div>
                </div>
                <div className="orangeoption"></div>
              </div>
              <div className="sizes d-flex align-items-center">
                <h5>Size:</h5>
                <div className="picksizes d-flex gap-3">
                  <div className="picksize text-center"> xs</div>
                  <div className="picksize text-center"> s</div>
                  <div className="picksize text-center"> m</div>
                  <div className="picksize text-center"> l</div>
                  <div className="picksize text-center"> xl</div>
                </div>
              </div>
              <div className="buyoption">
                <Row className="justify-content-between">
                  <Col lg={5}>
                    <div className="count d-flex align-items-center">
                      <div className="down" onClick={CounterDown}>
                        <GoDash />
                      </div>
                      <p>{count}</p>
                      <div className="up" onClick={CounterUp}>
                        <GoPlus />
                      </div>
                    </div>
                  </Col>
                  <Col lg={5} className="text-center">
                    <a href="">Buy Now</a>
                  </Col>
                  <Col lg={2}>
                    <div className="wishlist text-center">
                      <IoIosHeartEmpty />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetailsBody;
