import React, {Component, PropTypes} from 'react';
import './../theme/About.css';
import Typing, {Cursor} from 'react-typing-animation';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

export default class About extends React.Component {

  state = {
  }

  showFeatures = () => {
  this.setState({ showFeatures: true });
};

componentDidMount() {
  this.props.onRef(this)
}
componentWillUnmount() {
  this.props.onRef(undefined)
}
method() {
  this.node.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}


  render() {
    return (
      <div>
        <div id="gradient" ref={node => this.node = node} />
        <div className="rotated-h1" >
          <Fade top delay={1000}>
            <h1 id="about">About Me</h1>
          </Fade>
        </div>
        <div className="rotated">
          <Fade bottom delay={1000}>
          <div id="stroke">
            <h1 id="aboutLine">I</h1>
          </div>
          </Fade>
        </div>
            <div id="container">
              <Fade right  delay={500}>
                <div id="above-text">
                  <p>Im an AWS certified developer and Cloud Solutions Architect specializing in mobile development with Android and React Native. Im just as comfortable building engaging front-end UIs and animations as I am building a scalable back-end.</p> 
                </div>
              </Fade>
              <Flip left delay={1000}>
                <img src={require('./../theme/portrait.png')} algin="center" />
              </Flip>
              <Fade top  delay={1000}>
                <div id="below-text">
                  <p>After a career in digital marketing and film, I graduated from one of the top coding bootcamps in Portland, OR and am seeking new opportunities in the Indianapolis, IN area.
                  </p>
                </div>
              </Fade>
          </div>
      </div>

    );
  }
}
