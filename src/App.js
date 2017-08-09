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
          <h2>Hello I'm Max</h2>
          <p>
            Looking for a full-time Software Engineer position <br/>
            in <strong>Berlin, Germany</strong> or remote<br/>
            starting <strong>November 2017</strong>.
          </p>
        </div>
        <div className="content">
          <p className="intro">
            I’m a passionate full-stack software engineer.
            Building projects with purpose drives me.
            I’m a fast learner and a doer who is not afraid of quickly bootstrapping code to embrace changes.
            Rigor is my leitmotiv: if my code is not tested, then it’s not ready.
            If it is not documented, then it’s not ready.
            I’m ready for my next challenge. 🚀
          </p>
          <Tabs defaultIndex={-1} selectedTabClassName="tab-link--selected">
            <TabList className="tab-list">
              <Tab className="tab-link">Work</Tab>
              <Tab className="tab-link">Education</Tab>
              <Tab className="tab-link">Skills</Tab>
            </TabList>

            <TabPanel>
              <section>
                <h5>
                  Lead Software Architect - <a href="https://www.work4labs.com/">Work4</a> -
                  Aug. 2012 / Oct. 2017 - San Francisco
                </h5>
                <p>
                  We built the future of recruiting on social networks.
                  I worked 5 years as a full-time employee and as my experience grew,
                  I took more responsibilities, reaching the role of lead software architect.
                  I crafted and supervised a web stack serving 1M monthly active users.
                  I collaborated with and mentored a team of 5+ engineers,
                  while closely brainstorming and building user experiences with the product team.
                </p>
                <p className="stack">
                  Stack: Python, Django, MySQL, MongoDB, ElasticSearch, Redis,
                  Celery, Chef, Gherkin testing, Redshift, AWS.
                </p>
              </section>
              <section>
                <h5>
                  Co-Founder - <a href="https://github.com/m-vdb/getethic.com">Ethic</a> -
                  May 2015 / Apr. 2016 - San Francisco
                </h5>
                <p>
                  We created a blockchain-based insurance product with the very early-stage Ethereum technology.
                  I was responsible for the product elaboration and the engineering conception.
                  Building a product on top of Ethereum was very interesting and challenging.
                  The project ended because of different life trajectories
                  (my co-founder wanted to go back to Europe).
                </p>
                <p className="stack">
                  Stack: NodeJS, Marionette, CoffeeScript, MongoDB, Redis, Solidity, Docker.
                </p>
              </section>
              <section>
                <h5>
                  Co-Founder - <a href="https://houseofgigs.io">House of gigs</a> -
                  Jun. 2016 / Now - San Francisco
                </h5>
                <p>
                  We are building a platform that brings gig-economy workers together,
                  help them find new opportunities and provide them with tailored services.
                  I am responsible for the product development and engineering.
                  I also take part in a lot of founder-specific tasks such as user acquisition and retention.
                  The iOS app is available on the <a href="https://itunes.apple.com/app/id1160097877">US App store</a>.
                </p>
                <p className="stack">
                  Stack: Python, Django, React Native, Dokku, PostgreSQL, Redis, Realm, Algolia, AWS, Datadog, Sentry.
                </p>
              </section>
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
