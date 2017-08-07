import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import picture from './picture.png';
import mailIcon from './mail.svg';
import githubIcon from './github.svg';
import linkedinIcon from './linkedin.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <div className="links">
            <ul>
              <li>
                <a href="mailto:getmax0@gmail.com">
                  <img src={mailIcon} alt="Contact me" className="link-icon link-icon-email" />
                </a>
              </li>
              <li>
                <a href="https://github.com/m-vdb">
                  <img src={githubIcon} alt="Github" className="link-icon" />
                </a>
              </li>
              <li>
                <a href="https://linkd.in/1alUxp3">
                  <img src={linkedinIcon} alt="LinkedIn" className="link-icon" />
                </a>
              </li>
            </ul>
          </div>
          <img src={picture} className="header-picture" alt="Me" />
          <h2>Hello I'm Maxime</h2>
          <p>
            I'm looking for a full-time Software Engineer position <br/>
            in Berlin, Germany<br/>
            or remote, starting November 2017.
          </p>
        </div>
        <div className="content">
          <p className="intro">
            I’m a full-stack software engineer passionate about his work.
            I love building people-centric products with daily impact on lives, jobs, etc…
            I’m a fast learner and a doer who is not afraid of quickly bootstrapping code to embrace changes.
            I have experience with both smaller (&lt;5) and bigger (&gt;10) teams, and thrive in cross-team projects.
            Rigor is my leitmotiv: if my code is not tested, then it’s not ready.
            If it is not documented, then it’s not ready.
            And I try as much as possible to teach that when I’m mentoring my teammates.
          </p>
          <Tabs defaultIndex={-1} selectedTabClassName="tab-link--selected">
            <TabList className="tab-list">
              <Tab className="tab-link">Work</Tab>
              <Tab className="tab-link">Education</Tab>
              <Tab className="tab-link">Skills</Tab>
            </TabList>

            <TabPanel>
              <p>work content</p>
            </TabPanel>
            <TabPanel>
              <p>education content</p>
            </TabPanel>
            <TabPanel>
              <p>skills content</p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
