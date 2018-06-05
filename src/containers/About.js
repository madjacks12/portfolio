import React, {Component, PropTypes} from 'react';
import './../theme/About.css';
import Typing, {Cursor} from 'react-typing-animation';

export default class Home extends Component {

  state = {
    showFeatures: false,
  };

  showFeatures = () => {
  this.setState({ showFeatures: true });
};

  render() {
    return (
      <div>
        <h1 id="about">About Me</h1>
          <div id="stroke">
            <h1 id="aboutLine">I</h1>
          </div>
          <div id="container">
            <div id="columns">
              <p>Im an AWS certified developer and Cloud Solutions Architect specializing in mobile development with Android and React Native. Im just as comfortable building engaging front-end UIs and animations as I am building a scalable back-end. I recently graduated from one of the top coding bootcamps in Portland, OR and am seeking new opportunities in the Indianapolis, IN area.
              </p>
            </div>
        </div>
      </div>

    );
  }
}
