import "./loginhomeheader.css";
import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import Logo from "../../assets/Logo.png";
import { GoHeart } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { ReactTyped } from "react-typed";
import { AiOutlineStar } from "react-icons/ai";
import { TbLogout2 } from "react-icons/tb";
import {
  Col,
  Container,
  DropdownButton,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { RxCrossCircled } from "react-icons/rx";

function showOverlay(event) {
  event.stopPropagation();
  let userOverlay = document.querySelector(".overlay");
  let userThird = document.querySelector(".userthird");
  let svg = userThird.querySelector("svg");

  if (userOverlay) {
    userThird.style.backgroundColor = "#db4444";
    userOverlay.style.display = "block";

    svg.style.color = "#fff";
  }
}

function closeOverlay() {
  let userOverlay = document.querySelector(".overlay");
  let userThird = document.querySelector(".userthird");
  let svg = userThird.querySelector("svg");

  if (userOverlay) {
    userThird.style.backgroundColor = "transparent";
    userOverlay.style.display = "none";
    svg.style.color = "#000";
  }
}
window.addEventListener("click", closeOverlay);

const LoginHomeHeader = () => {
  const [placeholder, setPlaceholder] = useState("");

  return (
    <section id="loginhomeheader">
      <div className="header">
        <Container>
          <Row>
            <Col
              lg={6}
              className="typewritter
            text-center mx-auto"
            >
              <ReactTyped
                strings={[
                  `<span>Summer Sale For All Swim Suits And</span>`,
                  `<span> Free Express Delivery OFF 50% <b>ShopNow</b></span>`,
                ]}
                typeSpeed={40}
                loop={true}
                backSpeed={50}
              />
            </Col>
            <Col lg={1} className="text-end">
              <DropdownButton
                className="languageBtn"
                title="Languages"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Bangla</Dropdown.Item>
                <Dropdown.Item href="#">Spanish</Dropdown.Item>
                <Dropdown.Item href="#">Arabic</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar expand="lg" className="navMenu">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/signup"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sign up
              </Nav.Link>
            </Nav>
            <Form className="d-flex  search">
              <span style={{ display: "none" }}>
                <ReactTyped
                  strings={[
                    "Search for products",
                    "Search for categories",
                    "Search for brands",
                    "Search for medicine",
                    "Search for Sports",
                    "Search for Groceries",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                  attr="placeholder"
                  onStringTyped={(index, self) => {
                    setPlaceholder(self.strings[index]);
                  }}
                />
              </span>
              <Form.Control
                type="search"
                placeholder={placeholder || "What are you looking for?"}
                className="me-2 searchInput"
                aria-label="Search"
              />
              <FiSearch />
            </Form>
            <div className="carts d-flex align-items-center gap-3">
              <GoHeart className="firstchild" />
              <GrCart />
              <div className="userthird text-center" onClick={showOverlay}>
                <FiUser />
                <div className="overlay ">
                  <ul>
                    <li>
                      <Link
                        to={"/useraccount"}
                        className="d-flex gap-3 
                      align-items-center"
                      >
                        <FiUser /> Manage My Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-flex gap-3 
                      align-items-center"
                      >
                        <FiShoppingBag /> My Order
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-flex gap-3 
                      align-items-center"
                      >
                        <RxCrossCircled /> My Cancellations
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-flex gap-3 
                      align-items-center"
                      >
                        <AiOutlineStar /> My Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        className="d-flex gap-3 
                      align-items-center"
                      >
                        <TbLogout2 /> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default LoginHomeHeader;
