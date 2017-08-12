import React from 'react';

import { profileLinks } from './constants';
import { ScrollListenerComponent } from './utils';
import mailIcon from '../img/mail.svg';
import githubIcon from '../img/github.svg';
import linkedinIcon from '../img/linkedin.svg';

class NavBar extends ScrollListenerComponent {

  constructor(props) {
    super(props);
    this.state.className = 'navbar navbar-links';
  }

  scrolledPast() {
    this.setState({
      className: 'navbar navbar-fixed',
    });
  }

  scrolledBackUp() {
    this.setState({
      className: 'navbar navbar-links'
    });
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
