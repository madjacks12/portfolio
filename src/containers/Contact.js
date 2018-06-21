import React, {Component, PropTypes} from 'react';
import './../theme/Contact.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';

export default class Contact extends Component {

    render() {
      return (
        <div id="contact-container">
          <div class="rotated-h1">
            <Fade bottom>
              <h1 id="contact-h1">Cont act</h1>
            </Fade>
          </div>
          <div class="rotated">
            <Fade bottom delay={1000}>
            <div id="stroke">
                <h1 id="line">I</h1>
            </div>
            </Fade>
          </div>
            <div>
              <Bounce bottom delay={1000}>
                <h3 id="contact-h3">Want to talk? Collaborate?</h3>
              </Bounce>
              <Bounce right delay={1000}>
                <h4>
               Send me an email at <a class="mail" href="mailto:mdjacksondev@gmail.com">mdjacksondev@gmail.com </a>or connect via social media.</h4>
              </Bounce>
            </div>
              <div class="social">
                <div class="social-img">
                  <Flip right>
                    <img id="inner" src={require('./../assets/images/linkedin-logo.png')}/>
                  </Flip>
                </div>
                <div class="social-img">
                  <Flip right>
                    <img id="inner" src={require('./../assets/images/github-logo.png')} />
                  </Flip>
                </div>
              </div>
        </div>

      )
    }
  }
