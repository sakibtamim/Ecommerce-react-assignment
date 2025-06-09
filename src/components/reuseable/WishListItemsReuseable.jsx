import React from "react";
import { Card, Col } from "react-bootstrap";
import { IoTrashOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
const WishListItemsReuseable = ({
  titleimg,
  titlediscoutper,
  titlediscountbg,
  titlename,
  titleregularprice,
  titlediscountprice,
}) => {
  return (
    <Col lg={3}>
      <Card>
        <div className="itemImg">
          <Card.Img variant="top" src={titleimg} />
          <div
            className="discount"
            style={{ backgroundColor: titlediscountbg }}
          >
            {titlediscoutper}
          </div>
          <div className="circle">
            <IoTrashOutline />
          </div>
          <div className="addcart text-center">
            <a href="">
              <IoCartOutline />
              Add To Cart
            </a>
          </div>
        </div>

        <Card.Body>
          <Card.Title>{titlename}</Card.Title>
          <div className="prices d-flex gap-3">
            <div className="discountPrice">{titlediscountprice}</div>
            <div className="regularPrice">{titleregularprice}</div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WishListItemsReuseable;
