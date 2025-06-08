import React from "react";
import { Col } from "react-bootstrap";

const AboutBannerReuseable = ({ titleicon, titlerating, titleinfo }) => {
  return (
    <Col lg={3}>
      <div className="card text-center">
        <div className="circle1">
          <div className="circle2">{titleicon}</div>
        </div>
        <h5>{titlerating} </h5>
        <p>{titleinfo}</p>
      </div>
    </Col>
  );
};

export default AboutBannerReuseable;
