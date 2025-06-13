import React from "react";
import { Col, Card } from "react-bootstrap";
import { IoEyeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const RelatedItemsReuseable = ({
  titleImg,
  titlediscountper,
  titlediscountBG,
  titleName,
  titleregularprice,
  titlediscountprice,
}) => {
  return (
    <Col lg={3}>
      <Card>
        <div className="itemImg">
          <Card.Img variant="top" src={titleImg} />
          <div
            className="discount"
            style={{ backgroundColor: titlediscountBG }}
          >
            {titlediscountper}
          </div>
          <div className="circle">
            <IoEyeOutline />
          </div>
          <div className="addcart text-center ">
            <a href="">
              <IoCartOutline />
              Add To Cart
            </a>
          </div>
        </div>
        <Card.Body>
          <Card.Title>{titleName}</Card.Title>

          <div className="pricies d-flex gap-3">
            <div className="discoutprice">{titlediscountprice}</div>
            <div className="regularprice">{titleregularprice}</div>
          </div>
          <div className="ratings d-flex gap-1 align-items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>(65)</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RelatedItemsReuseable;
