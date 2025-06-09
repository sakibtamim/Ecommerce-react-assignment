import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./formeitems.css";
import Havitgamepad from "../../assets/havithvg92.png";
import Monitor from "../../assets/ipsmonitor.png";
import Asuslaptop from "../../assets/asuslaptop.png";
import Keyboard from "../../assets/ak900keyboard.png";
import FormeItemsReuseaable from "../reuseable/FormeItemsReuseaable";

const FormeItems = () => {
  return (
    <section id="formeitems">
      <Container>
        <div className="head">
          <Row className="justify-content-between">
            <Col lg={2} className="d-flex  align-items-center gap-3">
              <div className="box"></div>
              <p>Just For You</p>
            </Col>
            <Col lg={2} className="text-end">
              <a href="">See All</a>
            </Col>
          </Row>
        </div>
        <div className="forme">
          <Row>
            <FormeItemsReuseaable
              titleImg={Asuslaptop}
              titlediscountper="-35%"
              titlediscountBG="#db4444"
              titleName="ASUS FHD Gaming Laptop"
              titleregularprice="$1160"
              titlediscountprice="$960"
            />
            <FormeItemsReuseaable
              titleImg={Monitor}
              titleName="IPS LCD Gaming Monitor"
              titlediscountprice="$1160"
            />
            <FormeItemsReuseaable
              titleImg={Havitgamepad}
              titlediscountper="NEW"
              titlediscountBG="#00FF66"
              titleName="HAVIT HV-G92 Gamepad"
              titlediscountprice="$560"
            />
            <FormeItemsReuseaable
              titleImg={Keyboard}
              titleName="AK-900 Wired Keyboard"
              titlediscountprice="$200"
            />
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FormeItems;
