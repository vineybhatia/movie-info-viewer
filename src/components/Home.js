import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import './Home.css';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [bollywoodMovies, setBollywoodMovies] = useState([]);

  // Fetch trending movies
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=de0755a70baeb4f4e1fc5cfc495702ea")
      .then((response) => response.json())
      .then((data) => setMovies(data.results || []))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  // Fetch Bollywood movies
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=de0755a70baeb4f4e1fc5cfc495702ea&with_original_language=hi&sort_by=popularity.desc"
    )
      .then((response) => response.json())
      .then((data) => setBollywoodMovies(data.results || []))
      .catch((error) => console.error("Error fetching Bollywood movies:", error));
  }, []);

  const hollywoodMovies = movies.filter((movie) => movie.original_language === "en");

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
      <img src="/hero.jpg" alt="Hero Background" className="hero-image" />
      <div className="hero-content">
        <h1 className="display-3">Welcome to MovieInfo</h1>
        <p className="lead">
          Discover trending movies, explore Hollywood and Bollywood hits, and more!
        </p>
      </div>
    </div>

      {/* Trending Movies Section */}
      <Container className="mt-5">
        <h2 className="mb-4 text-center">Trending Movies</h2>
        <Row>
          {movies.slice(0, 8).map((movie) => (
            <Col md={3} className="mb-4" key={movie.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title className="fs-6">{movie.title}</Card.Title>
                  <Card.Text>
                    <Badge bg="info" className="me-2">
                      ⭐ {movie.vote_average}
                    </Badge>
                    <Badge bg="secondary">
                      {new Date(movie.release_date).getFullYear()}
                    </Badge>
                  </Card.Text>
                  <Card.Text>
                    <strong>Language:</strong> {movie.original_language.toUpperCase()}
                  </Card.Text>
                  <Card.Text className="movie-overview">
                    {movie.overview || "No description available."}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Hollywood Movies Section */}
      <Container className="mt-5">
        <h2 className="mb-4 text-center">Hollywood Movies</h2>
        <Row>
          {hollywoodMovies.slice(0, 8).map((movie) => (
            <Col md={3} className="mb-4" key={movie.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title className="fs-6">{movie.title}</Card.Title>
                  <Card.Text>
                    <Badge bg="info" className="me-2">
                      ⭐ {movie.vote_average}
                    </Badge>
                    <Badge bg="secondary">
                      {new Date(movie.release_date).getFullYear()}
                    </Badge>
                  </Card.Text>
                  <Card.Text>
                    <strong>Language:</strong> {movie.original_language.toUpperCase()}
                  </Card.Text>
                  <Card.Text className="movie-overview">
                    {movie.overview || "No description available."}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Bollywood Movies Section */}
      <Container className="mt-5">
        <h2 className="mb-4 text-center">Bollywood Movies</h2>
        <Row>
          {bollywoodMovies.slice(0, 8).map((movie) => (
            <Col md={3} className="mb-4" key={movie.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title className="fs-6">{movie.title}</Card.Title>
                  <Card.Text>
                    <Badge bg="info" className="me-2">
                      ⭐ {movie.vote_average}
                    </Badge>
                    <Badge bg="secondary">
                      {new Date(movie.release_date).getFullYear()}
                    </Badge>
                  </Card.Text>
                  <Card.Text>
                    <strong>Language:</strong> {movie.original_language.toUpperCase()}
                  </Card.Text>
                  <Card.Text className="movie-overview">
                    {movie.overview || "No description available."}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
