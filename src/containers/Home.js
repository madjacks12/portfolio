import React, {Component, PropTypes} from 'react';
import './../theme/Home.css';


export default class  Home extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <h1>Matt Jackson</h1>
        <img src={require('../assets/hero.gif')} alt="hey" />
        <p>what up</p>
      </div>
    );
  }
}
