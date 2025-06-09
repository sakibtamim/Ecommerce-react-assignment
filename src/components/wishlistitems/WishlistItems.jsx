import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./wishlistitems.css";
import Guccibag from "../../assets/guccibag.png";
import CpuCooler from "../../assets/cpucooler.png";
import Gamepad from "../../assets/gamepad.png";
import Jacket from "../../assets/jacket.png";

import WishListItemsReuseable from "../reuseable/WishListItemsReuseable";
const WishlistItems = () => {
  return (
    <section id="wishlistitems">
      <Container>
        <div className="head">
          <Row className="justify-content-between">
            <Col lg={2}>
              <p>Wishlist (4)</p>
            </Col>
            <Col lg={3} className="text-end">
              <a href="">Move All To Bag</a>
            </Col>
          </Row>
        </div>
        <div className="wishitems">
          <Row>
            <WishListItemsReuseable
              titleimg={Guccibag}
              titlediscoutper="-30%"
              titlediscountbg="#db4444"
              titlename="Gucci duffle bag"
              titleregularprice="$1160"
              titlediscountprice="$960"
            />
            <WishListItemsReuseable
              titleimg={CpuCooler}
              titlename="RGB liquid CPU Cooler"
              titleregularprice=""
              titlediscountprice="$1960"
            />
            <WishListItemsReuseable
              titleimg={Gamepad}
              titlename="GP11 Shooter USB Gamepad"
              titleregularprice=""
              titlediscountprice="$550"
            />
            <WishListItemsReuseable
              titleimg={Jacket}
              titlename="Quilted Satin Jacket"
              titleregularprice=""
              titlediscountprice="$750"
            />
          </Row>
        </div>
        <div className="circleWishlist text-center">4</div>
      </Container>
    </section>
  );
};

export default WishlistItems;
