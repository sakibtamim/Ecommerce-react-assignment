import React from "react";
import { Card, Col } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SaleReuseable = ({
  onClick,
  titleImg,
  titledisper,
  titleName,
  titleRegular,
  titlediscount,
  titleRating,
  titleRatingBlank,
}) => {
  return (
    // <Col lg={3}>
    //   <Card>
    //     <div className="cardImg">
    //       <Card.Img variant="top" src={titleImg} />
    //       <div className="discountper text-center">{titledisper}</div>
    //       <div className="wishlist text-center">
    //         <FaRegHeart />
    //       </div>
    //       <div className="eye text-center">
    //         <FiEye />
    //       </div>
    //       <div className="addcart text-center">Add To Cart</div>
    //     </div>

    //     <Card.Body>
    //       <Card.Title>{titleName}</Card.Title>
    //       <div className="discountPrice">
    //         <span>{titlediscount}</span>{" "}
    //         <span className="regularPrice">{titleRegular}</span>
    //       </div>
    //       <div className="rating d-flex gap-2">
    //         <FaStar />
    //         <FaStar />
    //         <FaStar />
    //         <FaStar />
    //         <FaStar />
    //         <p>({titleRating})</p>
    //       </div>
    //     </Card.Body>
    //   </Card>
    // </Col>

    <div className="saleItem" onClick={onClick}>
      <div className="saleItemImg">
        <img src={titleImg} className="w-100" alt="" />
        <div className="discountper text-center">{titledisper}</div>
        <div className="wishlist text-center">
          <FaRegHeart />
        </div>
        <div className="eye text-center">
          <FiEye />
        </div>
        <div className="addcart text-center">
          <Link to={"/cart"}>Add To Cart</Link>
        </div>
      </div>
      <div className="saleItemBody">
        <h5>{titleName}</h5>
        <div className="discountPrice">
          <span>{titlediscount}</span>
          <span className="regularPrice">{titleRegular}</span>
        </div>
        <div className="rating d-flex gap-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar style={{ color: titleRatingBlank }} />
          <p>({titleRating})</p>
        </div>
      </div>
    </div>
  );
};

export default SaleReuseable;
