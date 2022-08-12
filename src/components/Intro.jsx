import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IntroImage from "../assets/images/intro-bag.png";

const Intro = () => {
  return (
    <div className="intro-section">
      <Container>
        <Row>
          <Col  lg={6} className="text-center">
            <img className="img-fluid" src={IntroImage} alt="" />
          </Col>
          <Col lg={6} className="text-center">
            <p className="text-white display-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="intro-btn">Buy Now</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
