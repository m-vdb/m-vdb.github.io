import { Component } from 'react';
import PropTypes from 'prop-types';


class ScrollListenerComponent extends Component {

  SCROLL_INTERVAL = 100;  // every 100ms

  static propTypes = {
    scrollThreshold: PropTypes.number
  };

  static defaultProps = {
    scrollThreshold: document.documentElement.clientHeight - 10
  };

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrolledPast = this.scrolledPast.bind(this);
    this.scrolledBackUp = this.scrolledBackUp.bind(this);
    this.state = {
      scrolling: false,
      scrolledPast: false
    };
  }

  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    if (!this.state.scrolling) {
      this.setState({scrolling: true});
      setTimeout(this.handleScroll, this.SCROLL_INTERVAL);
    }
  }

  handleScroll() {
    const scrollPosition = document.body.scrollTop;
    const scrollCompletion = Math.min(scrollPosition, this.props.scrollThreshold) / this.props.scrollThreshold;
    if (scrollPosition > this.props.scrollThreshold) {
      // user has scrolled past the header
      if (!this.state.scrolledPast) {
        this.setState({scrolledPast: true});
        this.scrolledPast();
      }
    } else {
      // user has scrolled back to top
      if (this.state.scrolledPast) {
        this.setState({scrolledPast: false});
        this.scrolledBackUp();
      }
    }
    this.setState({scrolling: false, scrollCompletion});
  }

  scrolledPast() {}

  scrolledBackUp() {}
}

export { ScrollListenerComponent };


export function scrollTo(y, scrollDuration) {
    let cosParameter = y / 2;
    let scrollCount = 0;
    let oldTimestamp = performance.now();

    function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) {
          window.scrollTo(0, y);
          return;
        }
        if (window.scrollY === y) return;
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.sin(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
};
