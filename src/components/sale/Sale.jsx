import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./sale.css";
import Slider from "react-slick";
import { useTimer } from "react-timer-hook";
import HavitGamepad from "../../assets/havithvg92.png";
import GamingKeyboard from "../../assets/ak900keyboard.png";
import GamingMonitor from "../../assets/ipsmonitor.png";
import ComfortChair from "../../assets/comfortchair.png";
import SaleReuseable from "../reuseable/SaleReuseable";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

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

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    interval: 20,
  });

  return (
    <div className="timer">
      <Row>
        <Col lg={3} className="colon">
          <p>Days</p> <span>{days}</span>
        </Col>
        <Col lg={3} className="colon">
          <p>Hours</p>
          <span>{hours}</span>
        </Col>
        <Col lg={3} className="colon">
          <p>Minutes</p>
          <span>{minutes}</span>
        </Col>
        <Col lg={3}>
          <p>Seconds</p>
          <span>{seconds}</span>
        </Col>
      </Row>
    </div>
  );
}

const Sale = () => {
  let navigate = useNavigate();

  let gotoProductDetails = () => {
    navigate("/productdetails");
  };
  const time = new Date("June 17,2025 11:30:00");
  //   time.setSeconds(time.getSeconds()+600);If you want the countdown to start now and run for 10 minutes:
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section id="sale">
      <Container>
        <div className="borderbtm">
          <Row>
            <Col lg={2}>
              <div className="head d-flex align-items-center">
                <div className="box"></div>
                <p>Today’s</p>
              </div>
            </Col>
          </Row>
          <Row className=" flashsale align-items-end">
            <Col lg={2}>
              <h2>Flash sales</h2>
            </Col>
            <Col lg={3} className="offset-lg-1">
              <div>
                <MyTimer expiryTimestamp={time} />
              </div>
            </Col>
          </Row>

          {/* <div className="saleItems">
          <Row>
            <SaleReuseable
              titleImg={HavitGamepad}
              titledisper="-40%"
              titleName="HAVIT HV-G92 Gamepad"
              titleRegular="$160"
              titlediscount="$120"
              titleRating="88"
            />
            <SaleReuseable
              titleImg={HavitGamepad}
              titledisper="-40%"
              titleName="HAVIT HV-G92 Gamepad"
              titleRegular="$160"
              titlediscount="$120"
              titleRating="88"
            />
            <SaleReuseable
              titleImg={HavitGamepad}
              titledisper="-40%"
              titleName="HAVIT HV-G92 Gamepad"
              titleRegular="$160"
              titlediscount="$120"
              titleRating="88"
            />
            <SaleReuseable
              titleImg={HavitGamepad}
              titledisper="-40%"
              titleName="HAVIT HV-G92 Gamepad"
              titleRegular="$160"
              titlediscount="$120"
              titleRating="88"
            />
          </Row>
        </div> */}
          <div className="slicksaleitems">
            <Slider {...settings}>
              <SaleReuseable
                onClick={gotoProductDetails}
                titleImg={HavitGamepad}
                titleName="HAVIT HV-G92 Gamepad"
                titledisper="-40%"
                titleRegular="$160"
                titlediscount="$120"
                titleRating="88"
              />
              <SaleReuseable
                titleImg={GamingKeyboard}
                titleName="AK-900 Wired Keyboard"
                titledisper="-35%"
                titleRegular="$1160"
                titlediscount="$960"
                titleRating="75"
                titleRatingBlank="rgba(0, 0, 0, 0.251)"
              />
              <SaleReuseable
                titleImg={GamingMonitor}
                titleName="IPS LCD Gaming Monitor"
                titledisper="-30%"
                titleRegular="$400"
                titlediscount="$370"
                titleRating="99"
              />
              <SaleReuseable
                titleImg={ComfortChair}
                titleName="S-Series Comfort Chair"
                titledisper="-25%"
                titleRegular="$400"
                titlediscount="$300"
                titleRating="88"
                titleRatingBlank="rgba(0, 0, 0, 0.251)"
              />
            </Slider>
          </div>

          <div className="viewAll text-center">
            <a href="">View All Products</a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sale;
