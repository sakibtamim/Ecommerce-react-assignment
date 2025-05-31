import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import "./banner.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import AppleLogo from "../../assets/appleLogo.png";
import Iphone from "../../assets/iphone.png";
import BannerReuseable from "../reuseable/BannerReuseable";
import PixelLogo from "../../assets/Google.png";
import SamsungLogo from "../../assets/samsungLogo.png";
import Pixel from "../../assets/pixel.png";
import Samsung from "../../assets/samsung.jpg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="nextBtn" onClick={onClick}>
      <IoIosArrowDroprightCircle />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prevBtn" onClick={onClick}>
      <IoIosArrowDropleftCircle />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section id="banner">
      <Container>
        <Row>
          <Col lg={2}>
            <div className="banMenu">
              <ul>
                <li>
                  <a href="#">
                    Woman’s Fashion <MdKeyboardArrowRight />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Men’s Fashion <MdKeyboardArrowRight />
                  </a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Home & Lifestyle</a>
                </li>
                <li>
                  <a href="#">Medicine</a>
                </li>
                <li>
                  <a href="#">Sports & Outdoor</a>
                </li>
                <li>
                  <a href="#">Baby’s & Toys</a>
                </li>
                <li>
                  <a href="#">Groceries & Pets</a>
                </li>
                <li>
                  <a href="#">Health & Beauty</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={9} className="ms-auto">
            <Slider {...settings}>
              <BannerReuseable
                titleLogo={AppleLogo}
                titleSeries="iPhone 14 Series"
                titleVoucher="Up to 15% off Voucher"
                titleImg={Iphone}
              />
              <BannerReuseable
                titleLogo={PixelLogo}
                titleSeries="Pixel 9 Series"
                titleVoucher="Up to 10% off Voucher"
                titleImg={Pixel}
              />
              <BannerReuseable
                titleLogo={SamsungLogo}
                titleSeries="Samsung S25 Series"
                titleVoucher="Up to 12% off Voucher"
                titleImg={Samsung}
              />
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
