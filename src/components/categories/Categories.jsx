import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./categories.css";
import CategoriesReuseable from "../reuseable/CategoriesReuseable";
import Slider from "react-slick";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { GiSmartphone } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { PiHeadphonesThin } from "react-icons/pi";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

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

const Categories = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section id="categories">
      <Container>
        <div className="borderbtm">
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

          <div className="categoriesBrowse">
            <Slider {...settings}>
              <CategoriesReuseable
                itemIcon={<GiSmartphone />}
                itemName="Phones"
              />
              <CategoriesReuseable
                itemIcon={<HiOutlineComputerDesktop />}
                itemName="Computers"
              />
              <CategoriesReuseable
                itemIcon={<BsSmartwatch />}
                itemName="SmartWatch"
              />
              <CategoriesReuseable itemIcon={<CiCamera />} itemName="Camera" />
              <CategoriesReuseable
                itemIcon={<PiHeadphonesThin />}
                itemName="HeadPhones"
              />
              <CategoriesReuseable
                itemIcon={<MdOutlineVideogameAsset />}
                itemName="Gaming"
              />
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
