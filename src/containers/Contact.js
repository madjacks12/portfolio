import React, {Component, PropTypes} from 'react';
import './../theme/Contact.css';


export default class Contact extends Component {

    render() {
      return (
        <div>
            <h1>Contact</h1>
            <div id="stroke">
                <h1 id="line">I</h1>
            </div>
            <div class="social-wrapper">
                <div class="social">
                <img src={require('./../assets/images/linkedin-logo.png')} height='20px' width='20px' />
                <img src={require('./../assets/images/github-logo.png')} height='20px' width='20px' />
                </div>
            </div>
        </div>
  
      )
    }
  }