import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./musicbuy.css";
import { useTimer } from "react-timer-hook";
import JBLBox from "../../assets/jblboom.png";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    interval: 20,
  });

  return (
    <div className="timer">
      <Row className="gap-4">
        <Col lg={3} className="colon text-center">
          <span>{days}</span>
          <p>Days</p>
        </Col>
        <Col lg={3} className="colon text-center">
          <span>{hours}</span>
          <p>Hours</p>
        </Col>
        <Col lg={3} className="colon text-center">
          <span>{minutes}</span>
          <p>Minutes</p>
        </Col>
        <Col lg={3} className="colon text-center">
          <span>{seconds}</span>
          <p>Seconds</p>
        </Col>
      </Row>
    </div>
  );
}

const MusicBuy = () => {
  const time = new Date("June 20,2025 11:30:00");
  return (
    <section id="musicbuy">
      <Container>
        <div className="musicbuyMain">
          <Row className="justify-content-evenly align-items-center">
            <Col lg={5} className="bodyTxt">
              <h6>Categories</h6>
              <h2>Enhance Your Music Experience</h2>
              <div>
                <MyTimer expiryTimestamp={time} />
              </div>
              <div className="buyNow">
                <a href="">Buy now</a>
              </div>
            </Col>
            <Col lg={5} className="bodyImg">
              <img src={JBLBox} className="w-100" alt="" />
              <div className="circle"></div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MusicBuy;
