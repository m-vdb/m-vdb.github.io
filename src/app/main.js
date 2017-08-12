import React, { Component } from 'react';

import NavBar from './navbar';
import TabBar from './tabbar';
import picture from '../img/picture.png';
import arrow from '../img/arrow.svg';
import '../stylesheets/main.css';


class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="header-background">
          <div className="header">
            <NavBar />
            <img src={picture} className="header-picture" alt="Me" />
            <h2>Hello I'm Max</h2>
            <p>
              Looking for a full-time Software Engineer position <br/>
              in <strong>Berlin, Germany</strong> or remote<br/>
              starting <strong>November 2017</strong>.
            </p>
            <a href="#" className="header-arrow-container">
              <img src={arrow} className="header-arrow" alt="Arrow" />
            </a>
          </div>
        </div>
        <div className="content">
          <TabBar />
        </div>
      </div>
    );
  }
}

export default App;
