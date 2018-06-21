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

  onClick = () => {
    this.child.method() // do stuff
  }

  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  render() {
    return(
      <div id="container">
        <div className="navbar">
          <p className="nav-item">Home</p>
          <p className="nav-item">About</p>
          <button onClick={this.onClick}>Child.method()</button>
          <p className="nav-item">Work</p>
          <p className="nav-item">Contact</p>
        </div>
        <Home>
        </Home>
        <About onRef={ref => (this.child = ref)}>
        </About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
    );
  }
}
