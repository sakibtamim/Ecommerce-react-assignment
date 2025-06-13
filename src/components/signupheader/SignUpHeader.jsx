import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import {
  Col,
  Container,
  DropdownButton,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/Logo.png";

import { ReactTyped } from "react-typed";
import "./signupheder.css";

const SignUpHeader = () => {
  const [placeholder, setPlaceholder] = useState("");
  return (
    <section id="signupheader">
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
          <Navbar.Brand href="/">
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
            <Form className="d-flex search">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default SignUpHeader;
