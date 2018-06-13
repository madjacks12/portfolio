import React, {Component, PropTypes} from 'react';
import Typing, {Cursor} from 'react-typing-animation';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';


export default class  NewHome extends Component {


  render() {
    return(
      <div id="container">
        <Home></Home>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
    );
  }
}
