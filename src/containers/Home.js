import React, {Component, PropTypes} from 'react';
import './../theme/Home.css';
import Typing, {Cursor} from 'react-typing-animation';

export default class  Home extends Component {

  state = {
    showFeatures: false,
  };

  showFeatures = () => {
  this.setState({ showFeatures: true });
};

  render() {
    return (
      <div>
        <h1>Matt Jackson</h1>


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
