import React from "react";
import "./userexploreproducts.css";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import DogFood from "../../assets/dogfood.png";
import CurologySet from "../../assets/curologyset.png";
import AsusLaptop from "../../assets/asuslaptop.png";
import CanonDSLR from "../../assets/canondslr.png";
import Redcar from "../../assets/redcar.png";
import Shoes from "../../assets/shoes.png";
import Gamepad from "../../assets/gamepad.png";
import Jacket from "../../assets/jacket.png";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import UserExploreProductsReuseable from "../reuseable/UserExploreProductsReuseable";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="nextSaleBtn" onClick={onClick}>
      <FaCircleArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prevSaleBtn" onClick={onClick}>
      <FaCircleArrowLeft />
    </div>
  );
}

const UserExploreProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section id="userexploreproducts">
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
        <div className="exploreproductsItems">
          <Slider {...settings}>
            <UserExploreProductsReuseable
              titleImg={DogFood}
              titleName="Breed Dry Dog Food"
              titlePrice="$100"
              titleRating="88"
              title5thBlank="rgba(0, 0, 0, 0.251)"
            />
            <UserExploreProductsReuseable
              titlenew="new"
              titleBG="#00ff66"
              titleImg={Redcar}
              titleName="Kids Electric Car"
              titlePrice="$960"
              titleRating="65"
              titlecolor1="#FB1314"
              titlecolor2="#db4444"
              titlecolor1border="2px solid #000"
            />
            <UserExploreProductsReuseable
              titleImg={AsusLaptop}
              titleName="ASUS FHD Gaming Laptop"
              titlePrice="$700"
              titleRating="325"
            />
            <UserExploreProductsReuseable
              titleImg={Shoes}
              titleName="Jr. Zoom Soccer Cleats "
              titlePrice="$500"
              titleRating="145"
              titlecolor1="#EEFF61"
              titlecolor2="#db4444"
              titlecolor1border="2px solid #000"
            />
            <UserExploreProductsReuseable
              titleImg={CanonDSLR}
              titleName="CANON EOS DSLR Camera"
              titlePrice="$360"
              titleRating="95"
              title5thBlank="rgba(0, 0, 0, 0.251)"
              title4thBlank="rgba(0, 0, 0, 0.251)"
            />
            <UserExploreProductsReuseable
              titlenew="new"
              titleBG="#00ff66"
              titleImg={Gamepad}
              titleName="GP11 Shooter USB Gamepad"
              titlePrice="$660"
              titleRating="55"
              title5thBlank="rgba(0, 0, 0, 0.251)"
              titlecolor1="#000"
              titlecolor2="#db4444"
              titlecolor1border="2px solid #000"
            />
            <UserExploreProductsReuseable
              titleImg={CurologySet}
              titleName="Curology Product Set "
              titlePrice="$500"
              titleRating="145"
              title5thBlank="rgba(0, 0, 0, 0.251)"
            />
            <UserExploreProductsReuseable
              titleImg={Jacket}
              titleName="Quilted Satin Jacket"
              titlePrice="$100"
              titleRating="55"
              title5thBlank="rgba(0, 0, 0, 0.251)"
              titlecolor1="#000"
              titlecolor2="#db4444"
              titlecolor1border="2px solid #000"
            />
          </Slider>
        </div>
        <div className="viewallProducts text-center">
          <a href="">View all products</a>
        </div>
      </Container>
    </section>
  );
};

export default UserExploreProducts;
