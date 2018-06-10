import React, {Component, PropTypes} from 'react';
import './../theme/Contact.css';


export default class Contact extends Component {

    render() {
      return (
        <div id="contact-container">
            <h1 id="contact-h1">Contact</h1>
            <div id="stroke">
                <h1 id="line">I</h1>
            </div>
            <div>
              <h3 id="contact-h3">Want to talk? Collaborate?</h3>
              <h4>
              Send me an email at mdjacksondev@gmail.com or connect via social media.</h4>
            </div>
              <div class="social">
              <img class="social-img" src={require('./../assets/images/linkedin-logo.png')} height='20px' width='20px' />
              <img class="social-img" src={require('./../assets/images/github-logo.png')} height='20px' width='20px' />
              </div>
        </div>

      )
    }
  }
