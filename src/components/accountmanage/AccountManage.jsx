import React from "react";
import "./accountmanage.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiSlash } from "react-icons/hi2";

const AccountManage = () => {
  return (
    <section id="accountmanage">
      <Container>
        <Row>
          <Col lg={2} className="subMenu">
            <Link to={"/"}>Home</Link> <HiSlash />
            <Link to={"/useraccount"} className="active">
              My account
            </Link>
          </Col>
          <Col lg={2} className="user ms-auto text-end">
            <p>
              Welcome! <span>sakibtamim</span>
            </p>
          </Col>
        </Row>
        <div className="main">
          <Row className="justify-content-between">
            <Col lg={2}>
              <div className="manageacc">
                <h3>Manage My Account</h3>
                <ul>
                  <li>
                    <a className="active" href="">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a href="">Address Book</a>
                  </li>
                  <li>
                    <a href="">My Payment Options</a>
                  </li>
                </ul>
              </div>
              <div className="order">
                <h3>my order</h3>
                <ul>
                  <li>
                    <a href="">My Profile</a>
                  </li>
                  <li>
                    <a href="">Address Book</a>
                  </li>
                  <li>
                    <a href="">My Payment Options</a>
                  </li>
                </ul>
              </div>
              <div className="wishlist">
                <h3>My WishList</h3>
              </div>
            </Col>
            <Col lg={9} className="editprofile">
              <h2>Edit Your Profile</h2>
              <form
                action="
              "
              >
                <Row className="mb-4">
                  <Col lg={6}>
                    <label htmlFor="">First Name</label>
                    <input type="text" value="Nazmus Sakib" />
                  </Col>
                  <Col lg={6}>
                    <label htmlFor="">Last Name</label>
                    <input type="text" value="Tamim" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col lg={6}>
                    <label htmlFor="">Email</label>
                    <input type="email" value="sakib@gmail.com" />
                  </Col>
                  <Col lg={6}>
                    <label htmlFor="">Address</label>
                    <input type="text" value="Savar, Dhaka, Bangladesh" />
                  </Col>
                </Row>
                <label htmlFor="">Password Changes</label>
                <input type="password" placeholder="Current password" />
                <input
                  className="usegap"
                  type="password"
                  placeholder="New password"
                />
                <input type="password" placeholder="Confirm password" />

                <div className="change text-end">
                  <a href="">Cancel</a>
                  <a className="save" href="">
                    Save Changes
                  </a>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AccountManage;
