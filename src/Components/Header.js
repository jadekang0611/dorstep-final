import React from 'react';
import '../Styles/Header.css';
import logo from '../dorstep-logo.gif';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Link to="/">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="225"
            height="125"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="nav-item link">
            <Link to="/about" className="link nav-item">
              About
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
