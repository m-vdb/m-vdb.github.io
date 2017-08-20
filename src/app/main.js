import React, { Component } from 'react';

import NavBar from './navbar';
import TabBar from './tabbar';
import { scrollTo } from './utils';
import picture from '../img/picture.png';
import arrow from '../img/arrow.svg';
import '../stylesheets/main.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.onArrowClick = this.onArrowClick.bind(this);
  }

  render() {
    return (
      <div className="main">
        <div className="header-background">
          <div className="header">
            <NavBar />
            <img src={picture} className="header-picture" alt="Me" />
            <h2>Hello I'm Max</h2>
            <p>
              Looking for a full-time Software Engineer position
              in <strong>Berlin, Germany</strong> or remote
              starting <strong>November 2017</strong>.
            </p>
            <a href="#" className="header-arrow-container" onClick={this.onArrowClick}>
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

  onArrowClick() {
    scrollTo(document.documentElement.clientHeight, 1000);
  }
}

export default App;
