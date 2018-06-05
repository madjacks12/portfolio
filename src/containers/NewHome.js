import React, {Component, PropTypes} from 'react';
import Typing, {Cursor} from 'react-typing-animation';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

export default class  NewHome extends Component {


  render() {
    return(
      <div id="container">
        <Home></Home>
        <About></About>
        <Portfolio></Portfolio>
      </div>
    );
  }
}
