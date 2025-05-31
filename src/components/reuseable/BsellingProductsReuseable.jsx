import React from "react";
import { Card, Col } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const BsellingProductsReuseable = ({
  titleImg,
  titleName,
  titleDiscount,
  titleRegular,
  titleRating,
}) => {
  return (
    <Col lg={3} className="sellingProduct">
      <Card>
        <div className="productImg">
          <Card.Img variant="top" src={titleImg} />
          <div className="wishlist text-center">
            <FaRegHeart />
          </div>
          <div className="eye text-center">
            <FiEye />
          </div>
        </div>
        <Card.Body>
          <Card.Title>{titleName}</Card.Title>
          <div className="discountPrice">
            <span>{titleDiscount}</span>
            <span className="regularPrice">{titleRegular}</span>
          </div>
          <div className="rating d-flex gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>({titleRating})</p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BsellingProductsReuseable;
