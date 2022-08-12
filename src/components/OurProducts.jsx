import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import ImageOne from "../assets/images/1.jpg";
import ImageTwo from "../assets/images/2.jpg";
import ImageThree from "../assets/images/3.jpg";
import ImageFour from "../assets/images/4.jpg";
import ImageFive from "../assets/images/5.jpg";
import ImageSix from "../assets/images/6.jpg";

const OurProducts = () => {
  return (
    <Container>
      <div className="display-3 text-center text-primary my-5">
        <p>Our Products</p>
      </div>
      <Row className="text-center">
        <Col lg={4}>
          <Card className="m-3 shadow">
            <Card.Img variant="top" className="img-fluid" src={ImageOne} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="m-3 shadow">
            <Card.Img variant="top" className="img-fluid" src={ImageTwo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="m-3 shadow">
            <Card.Img variant="top" className="img-fluid" src={ImageThree} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="m-3 shadow">
            <Card.Img variant="top" className="img-fluid" src={ImageFour} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="m-3 shadow">
            <Card.Img variant="top" className="img-fluid" src={ImageFive} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="m-3 shadow">
            <Card.Img variant="top" className="img-fluid" src={ImageSix} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center">
        <button className="see-more-btn mt-5">See More</button>
      </div>
    </Container>
  );
};

export default OurProducts;
