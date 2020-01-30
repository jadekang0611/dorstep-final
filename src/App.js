import React from 'react';
import Questions from './Components/Questions';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from './Components/Main';
import About from './Components/About';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBed,
  faBath,
  faVectorSquare,
  faMapMarkerAlt,
  faTag,
  
} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faBed, faBath, faVectorSquare, faMapMarkerAlt, faTag);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/questions" component={Questions} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
