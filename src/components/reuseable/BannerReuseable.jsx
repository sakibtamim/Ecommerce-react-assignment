import React from "react";
import { Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
const BannerReuseable = ({
  titleLogo,
  titleSeries,
  titleVoucher,
  titleImg,
}) => {
  return (
    <div className="banBody">
      <Row className="justify-content-between align-items-center">
        <Col lg={5} className="banBodyTxt">
          <div className="series d-flex align-items-center">
            <img src={titleLogo} alt="" />
            <p>{titleSeries}</p>
          </div>
          <h2>{titleVoucher}</h2>

          <div className="shop">
            <a href="">Shop now</a>
            <GoArrowRight />
          </div>
        </Col>
        <Col lg={6}>
          <img src={titleImg} className="w-100" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default BannerReuseable;
