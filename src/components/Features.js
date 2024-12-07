// Features page by Sukhvir Singh - Student ID: 8926576

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Features.css"; // Custom CSS for the Features page
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Features = () => {

    const navigate = useNavigate();

  return (
    <div className="features-page">
      {/* Hero Section */}
      <div className="features-hero-section">
        <img src="/images/features_hero.jpg" alt="Features Hero" className="hero-image" />
        <div className="hero-content">
          <h1 className="display-4">Explore Our Features</h1>
          <p className="lead">Discover what makes MovieInfo unique and engaging for movie enthusiasts.</p>
        </div>
      </div>

      {/* Features Content Section */}
      <Container className="mt-5">
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-section">
            <h2>Detailed Movie Database</h2>
            <p>
              Gain access to a comprehensive collection of movies from all genres, 
              including Hollywood, Bollywood, and international cinema. Stay informed 
              with synopses, trailers, ratings, and user reviews.
            </p>
            <Button variant="primary"  onClick={() => navigate("/")}>Learn More</Button>
          </Col>
          <Col md={6}>
            <img src="/images/movie_database.jpg" alt="Movie Database" className="feature-image rounded shadow" />
          </Col>
        </Row>

        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6} className="text-section">
            <h2>Personalized Recommendations</h2>
            <p>
              Get movie suggestions tailored to your unique tastes and preferences. 
              Discover hidden gems and fan-favorite classics that you’ll love.
            </p>
            <Button variant="primary"  onClick={() => navigate("/")}>Discover Now</Button>
          </Col>
          <Col md={6}>
            <img src="/images/personalized_recommendations.jpg" alt="Recommendations" className="feature-image rounded shadow" />
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6} className="text-section">
            <h2>Latest Movie News</h2>
            <p>
              Stay updated with the latest happenings in the movie world. Read 
              news articles, box office reports, and get insights into upcoming releases.
            </p>
            <Button variant="primary"  onClick={() => navigate("/")}>Read News</Button>
          </Col>
          <Col md={6}>
            <img src="/images/movie_news.jpg" alt="Movie News" className="feature-image rounded shadow" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;

// Features page by Sukhvir Singh - Student ID: 8926576
