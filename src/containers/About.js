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
        <h1>About Me</h1>
          <h3> Sup bro</h3>
      </div>

    );
  }
}
