import React, {Component, PropTypes} from 'react';
import './../theme/About.css';
import Typing, {Cursor} from 'react-typing-animation';


export default class About extends Component {

  state = {
  }

  showFeatures = () => {
  this.setState({ showFeatures: true });
};

  render() {
    return (
      <div>
        <div id="gradient" />
        <h1 id="about">About Me</h1>
          <div id="stroke">
            <h1 id="aboutLine">I</h1>
          </div>
          <div id="container">
            <div id="above-text">
              <p>Im an AWS certified developer and Cloud Solutions Architect specializing in mobile development with Android and React Native. Im just as comfortable building engaging front-end UIs and animations as I am building a scalable back-end.</p> 
            </div>
            <img src={require('./../theme/portrait.png')} algin="center" />
            <div id="below-text">
              <p>After a career in digital marketing and film, I graduated from one of the top coding bootcamps in Portland, OR and am seeking new opportunities in the Indianapolis, IN area.
              </p>
          </div>
        </div>
      </div>

    );
  }
}
