import React from 'react';
import '../Styles/Questions.css';
import logo from '../dorstep-logo.gif';
import Cities from '../Components/Questions/Cities';
import Payment from '../Components/Questions/Payment';
import ShowProperties from '../Components/ShowProperties';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

function Questions(props) {
  const image = {
    width: 225,
    height: 125
  };
  return (
    <div>
      <header>
        <div className="brand">
          <img src={logo} style={image} alt="dorstep logo"></img>
        </div>
      </header>
      <hr></hr>
      <Router>
        <Route exact path="/questions/" component={Cities}></Route>
        <Route exact path="/questions/payment" component={Payment}></Route>
        <Route
          exact
          path="/questions/properties"
          component={ShowProperties}
        ></Route>
      </Router>

      <footer className="footer-box-questions">
        <p>&copy; Copyright 2020 Dorstep. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Questions;
