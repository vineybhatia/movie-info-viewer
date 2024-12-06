import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { Nav } from "react-bootstrap";



const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead">
          Discover, explore, and stay informed about your favorite movies with MovieInfo.
        </p>
      </div>

      {/* Our Mission Section */}
      <section className="mb-5">
        <h2>Our Mission</h2>
        <p>
          At MovieInfo, our mission is to provide movie enthusiasts with a
          one-stop platform for exploring movies, learning about cast and
          crew, and keeping up with the latest trends in the film industry.
          Whether you're a casual viewer or a die-hard cinephile, our goal
          is to enhance your movie-watching experience with rich, detailed
          information.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-5 bg-light p-4 rounded">
        <h2 className="text-center mb-4">What We Offer</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Detailed Movie Database</h5>
                <p className="card-text">
                  Access comprehensive details about movies, including
                  synopses, trailers, ratings, and reviews.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Personalized Recommendations</h5>
                <p className="card-text">
                  Get movie suggestions tailored to your viewing preferences
                  and interests.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Latest Movie News</h5>
                <p className="card-text">
                  Stay up-to-date with the latest news, box office reports, and
                  industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row text-center">
          <div className="col-md-3">
            <h5>Viney Bhatia</h5>
            <p className="text-muted">Founder & Developer</p>
          </div>
          <div className="col-md-3">
            <h5>Sukhvir Singh</h5>
            <p className="text-muted">Backend Specialist</p>
          </div>
          <div className="col-md-3">
            <h5>Narinder Singh</h5>
            <p className="text-muted">Frontend Developer</p>
          </div>
          <div className="col-md-3">
            <h5>Smit Macwan</h5>
            <p className="text-muted">Content Strategist</p>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
<section className="text-center p-4 bg-primary text-white rounded">
  <h2>Join Our Community</h2>
  <p className="mb-4">
    Be a part of a growing community of movie enthusiasts. Share reviews,
    rate movies, and engage in lively discussions!
  </p>
  <Nav className="d-flex justify-content-center">
    <Nav.Link as={Link} to="/">
      <button className="btn btn-light">Home</button>
    </Nav.Link>
  </Nav>
</section>


    </div>
  );
};

export default About;
