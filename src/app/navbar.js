import React, { Component } from 'react';

import { profileLinks } from './constants';
import mailIcon from '../img/mail.svg';
import githubIcon from '../img/github.svg';
import linkedinIcon from '../img/linkedin.svg';

class NavBar extends Component {

  SCROLL_INTERVAL = 100;  // every 100ms

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scrolling: false,
      scrolledPast: false,
      className: 'navbar navbar-links'
    };
  }

  componentWillMount() {
    document.onscroll = this.onScroll;
  }

  componentWillUnmount() {
    document.onscroll = null;
  }

  onScroll() {
    if (!this.state.scrolling) {
      this.setState({scrolling: true});
      setTimeout(this.handleScroll, this.SCROLL_INTERVAL);
    }
  }

  handleScroll() {
    if (document.body.scrollTop > document.documentElement.clientHeight) {
      // user has scrolled past the header
      if (!this.state.scrolledPast) {
        console.log('Scrolled past.');
        this.setState({
          className: 'navbar navbar-fixed',
          scrolledPast: true
        });
      }
    } else {
      // user has scrolled back to top
      if (this.state.scrolledPast) {
        console.log('Scrolled back up.');
        this.setState({
          scrolledPast: false,
          className: 'navbar navbar-links'
        });
      }
    }
    this.setState({scrolling: false});
  }

  render() {
    return (
      <nav className={this.state.className}>
        <ul>
          <li>
            <a href={profileLinks.email}>
              <img src={mailIcon} alt="Contact me" className="link-icon link-icon-email" />
            </a>
          </li>
          <li>
            <a href={profileLinks.github}>
              <img src={githubIcon} alt="Github" className="link-icon" />
            </a>
          </li>
          <li>
            <a href={profileLinks.linkedin}>
              <img src={linkedinIcon} alt="LinkedIn" className="link-icon" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
