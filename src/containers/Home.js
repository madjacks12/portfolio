import React, {Component, PropTypes} from 'react';
import './../theme/Home.css';
import Typing, {Cursor} from 'react-typing-animation';
import About from './About.js';

export default class Home extends Component {

  state = {
    showFeatures: false,
  };

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
      <div id="splash" ref={node => this.node = node}>
        <h1 id="matt">Matt Jackson</h1>
          <Typing loop speed={80}>
            <h3>Java
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={4} speed={80}  />
            <Typing.Delay ms={500} />
            React
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={5} speed={80}  />
            <Typing.Delay ms={500} />
            React-Native
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={12} speed={80}  />
            <Typing.Delay ms={500} />
            Android
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={7} speed={80}  />
            <Typing.Delay ms={500} />
            Node.js
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={7} speed={80}  />
            <Typing.Delay ms={1000} />
            </h3>
        </Typing>
        <h2>Full-Stack Developer</h2>
      </div>
    );
  }
}
