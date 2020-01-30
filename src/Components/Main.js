import React from 'react';
import Header from './Header';
import Home from './Home';

function Main() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <hr className="nav-line "></hr>
      <Home />
    </div>
  );
}

export default Main;
