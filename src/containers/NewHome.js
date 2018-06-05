import React, {Component, PropTypes} from 'react';
import './../theme/Home.css';
import Typing, {Cursor} from 'react-typing-animation';
import Home from './Home.js';
import About from './About.js';

export default class  NewHome extends Component {


  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}
