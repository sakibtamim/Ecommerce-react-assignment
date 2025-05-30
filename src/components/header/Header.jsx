import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import "./header.css";
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
import { GoHeart } from "react-icons/go";
import { GrCart } from "react-icons/gr";

const Header = () => {
  return (
    <section id="header">
      <div className="header">
        <Container>
          <Row>
            <Col lg={6} className="text-center mx-auto">
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
                <span>ShopNow</span>
              </p>
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Sign up</Nav.Link>
            </Nav>
            <Form className="d-flex search">
              <Form.Control
                type="search"
                placeholder="What are you looking for?"
                className="me-2 searchInput"
                aria-label="Search"
              />
              <FiSearch />
            </Form>
            <div className="cart d-flex gap-3">
              <GoHeart />
              <GrCart />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
