import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import "./exploreproducts.css";
import DogFood from "../../assets/dogfood.png";
import CurologySet from "../../assets/curologyset.png";
import AsusLaptop from "../../assets/asuslaptop.png";
import CanonDSLR from "../../assets/canondslr.png";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import ExploreProductsReuseable from "../reuseable/ExploreProductsReuseable";

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

const ExploreProducts = () => {
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
    <section id="exploreproducts">
      <Container>
        <Row>
          <Col lg={2}>
            <div className="head d-flex align-items-center">
              <div className="box"></div>
              <p>Our Products</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="browsetxt">
            <h2>Explore Our Products</h2>
          </Col>
        </Row>
        <div className="exploreproductsItems">
          <Slider {...settings}>
            <ExploreProductsReuseable
              titleImg={DogFood}
              titleName="Breed Dry Dog Food"
              titlePrice="$100"
              titleRating="88"
              title5thBlank="rgba(0, 0, 0, 0.251)"
            />
            <ExploreProductsReuseable
              titleImg={CanonDSLR}
              titleName="CANON EOS DSLR Camera"
              titlePrice="$360"
              titleRating="95"
              title5thBlank="rgba(0, 0, 0, 0.251)"
              title4thBlank="rgba(0, 0, 0, 0.251)"
            />
            <ExploreProductsReuseable
              titleImg={AsusLaptop}
              titleName="ASUS FHD Gaming Laptop"
              titlePrice="$700"
              titleRating="325"
            />
            <ExploreProductsReuseable
              titleImg={CurologySet}
              titleName="Curology Product Set "
              titlePrice="$500"
              titleRating="145"
              title5thBlank="rgba(0, 0, 0, 0.251)"
            />
            <ExploreProductsReuseable
              titleImg={CanonDSLR}
              titleName="CANON EOS DSLR Camera"
              titlePrice="$360"
              titleRating="95"
              title5thBlank="rgba(0, 0, 0, 0.251)"
              title4thBlank="rgba(0, 0, 0, 0.251)"
            />
            <ExploreProductsReuseable
              titleImg={AsusLaptop}
              titleName="ASUS FHD Gaming Laptop"
              titlePrice="$700"
              titleRating="325"
            />
            <ExploreProductsReuseable
              titleImg={CurologySet}
              titleName="Curology Product Set "
              titlePrice="$500"
              titleRating="145"
              title5thBlank="rgba(0, 0, 0, 0.251)"
            />
            <ExploreProductsReuseable
              titleImg={DogFood}
              titleName="Breed Dry Dog Food"
              titlePrice="$100"
              titleRating="88"
              title5thBlank="rgba(0, 0, 0, 0.251)"
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

export default ExploreProducts;
