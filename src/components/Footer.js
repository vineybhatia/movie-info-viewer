import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6} className="text-start">
            <h5>About MovieInfo</h5>
            <p>Find detailed information about your favorite movies and TV shows. Stay updated with the latest trends.</p>
          </Col>
          <Col md={6} className="text-end">
            <p>&copy; {new Date().getFullYear()} MovieInfo. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
