import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'
import Typing, {Cursor} from 'react-typing-animation';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import scrollToComponent from 'react-scroll-to-component';

export default class  NewHome extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  aboutScroll = () => {
    this.aboutChild.method() // do stuff
  }

  portfolioScroll = () => {
    this.portfolioChild.method() // do stuff
  }

  contactScroll = () => {
    this.contactChild.method() // do stuff
  }

  homeScroll = () => {
    this.homeChild.method() // do stuff
  }


  render() {
    return(
      <div id="container">
        <div className="navbar">
          <p className="nav-item" onClick={this.homeScroll}>Home</p>
          <p className="nav-item" onClick={this.aboutScroll}>About</p>
          <p className="nav-item" onClick={this.portfolioScroll}>Work</p>
          <p className="nav-item" onClick={this.contactScroll}>Contact</p>
        </div>
        <Home onRef={ref => (this.homeChild = ref)}>
        </Home>
        <About onRef={ref => (this.aboutChild = ref)}>
        </About>
        <Portfolio onRef={ref => (this.portfolioChild = ref)}></Portfolio>
        <Contact onRef={ref => (this.contactChild = ref)}></Contact>
      </div>
    );
  }
}
