import React, { Component } from 'react';

import { profileLinks } from './constants';
import mailIcon from '../img/mail.svg';
import githubIcon from '../img/github.svg';
import linkedinIcon from '../img/linkedin.svg';

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-links">
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
