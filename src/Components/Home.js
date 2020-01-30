import React from 'react';
import background from '../background1.svg';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <div className="home-container">
      <Container>
        <Row className="home-content-row">
          <h1 className="content-one">Search.</h1>
          <h1 className="content-one">Discover.</h1>
          <h1 className="content-one">Live.</h1>
        </Row>
        <Container>
          <Row>
            <Col>
              <h2 className="content-two">
                We'll get your doorstep to Korea easy!
              </h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Link to="/questions">
                <button className="home-button">
                  <span>Find my place</span>
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
      <img className="main-image" src={background} alt="background"></img>
      <footer className="footer-box">
        <p>&copy; Copyright 2020 Dorstep. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
