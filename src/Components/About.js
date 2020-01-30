import React from 'react';
import '../Styles/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';

function About() {
  const background = {
    marginTop: '20px',
    backgroundColor: '#6610f2',
    height: '600px',
    marginLeft: '0px',
    color: '#ffffff'
  };

  const contentOne = {
    paddingTop: '100px',
    color: '#ffffff',
    fontSize: '50px'
  };

  const contentTwo = {
    paddingTop: '50px',
    color: '#ffffff',
    fontSize: '40px',
    lineHeight: '1.5'
  };

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <hr className="nav-line "></hr>
      <div style={background} className="home-container">
        <Container>
          <Container style={background}>
            <Row>
              <Col>
                <h2 style={contentOne}>Welcome to Dorstep!</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 style={contentTwo}>
                  We're happy to find you the next home in Korea that you like!
                </h2>
              </Col>
            </Row>
          </Container>
        </Container>

        <footer className="footer-box">
          <p>&copy; Copyright 2020 Dorstep. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default About;
