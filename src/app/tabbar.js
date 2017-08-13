import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { workLinks, educationLinks } from './constants';
import { ScrollListenerComponent } from './utils';


class TabBar extends ScrollListenerComponent {

  constructor(props) {
    super(props);
    this.state.className = 'tab-list';
  }

  scrolledPast() {
    this.setState({
      className: 'tab-list tab-list--fixed'
    });
  }

  scrolledBackUp() {
    this.setState({
      className: 'tab-list'
    });
  }

  getStyle() {
    return {
      opacity: this.state.scrollCompletion
    };
  }

  render() {
    return (
      <Tabs selectedTabClassName="tab-link--selected">
        <TabList className={this.state.className} style={this.getStyle()}>
          <Tab className="tab-link">About Me</Tab>
          <Tab className="tab-link">Work</Tab>
          <Tab className="tab-link">Education</Tab>
        </TabList>

        <TabPanel>
          <section>
            <p>
              I’m a passionate full-stack software engineer.
              Building projects with purpose drives me.
              I’m a fast learner and a doer who is not afraid of quickly bootstrapping code to embrace changes.
              Rigor is my leitmotiv: if my code is not tested, then it’s not ready.
              If it is not documented, then it’s not ready.
              I’m ready for my next challenge. <span role="img" aria-label="Rocket">🚀</span>
            </p>
          </section>
        </TabPanel>
        <TabPanel>
          <section>
            <h5>
              Lead Software Architect - <a href={workLinks.work4}>Work4</a> -
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
              Co-Founder - <a href={workLinks.ethic}>Ethic</a> -
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
              Co-Founder - <a href={workLinks.houseofgigs}>House of gigs</a> -
              Jun. 2016 / Now - San Francisco
            </h5>
            <p>
              We are building a platform that brings gig-economy workers together,
              help them find new opportunities and provide them with tailored services.
              I am responsible for the product development and engineering.
              I also take part in a lot of founder-specific tasks such as user acquisition and retention.
              The iOS app is available on the <a href={workLinks.houseofgigsApp}>US App store</a>.
            </p>
            <p className="stack">
              Stack: Python, Django, React Native, Dokku, PostgreSQL, Redis, Realm, Algolia, AWS, Datadog, Sentry.
            </p>
          </section>
        </TabPanel>
        <TabPanel>
          <section>
            <h5 className="title-less-margin">Master of Science, Networks and Communication</h5>
            <p><a href={educationLinks.x}>Ecole Polytechnique</a> - Sep. 2008 / Sep. 2012</p>
          </section>
          <section>
            <h5 className="title-less-margin">Engineer Diploma, Computer Science</h5>
            <p><a href={educationLinks.telecom}>Telecom ParisTech</a> - Sep. 2011 / Sep. 2012</p>
          </section>
        </TabPanel>
      </Tabs>
    );
  }
}

export default TabBar;
