import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecondIntroImage from "../assets/images/second-intro.png";

const SecondIntro = () => {
  return (
    <div className="second-intro-section">
      <Container>
        <Row>
          <Col lg={6} className="text-center">
            <p className="text-primary display-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="second-intro-btn">Buy Now</button>
          </Col>
          <Col lg={6} className="text-center">
            <img className="img-fluid" src={SecondIntroImage} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecondIntro;
