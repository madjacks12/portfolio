import React, {Component, PropTypes} from 'react';
import './../theme/Portfolio.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';


export default class Portfolio extends Component {

  render() {
    return (
      <div id="portfolio-container">
        <div id="header-spacing" />
        <div class="rotated-h1">
          <Fade bottom delay={500}>
          <h1>Projects</h1>
          </Fade>
        </div>
        <div class="rotated">
          <Fade bottom delay={1750}>
          <div id="stroke">
            <h1 id="line">I</h1>
          </div>
          </Fade>
        </div>
        <div class="wrapper">
        <div class="box a">
          <img src={require('./../assets/images/EatSocialHero.png')} class="portfolio-image" />
        </div>
        <div class="box c">
         <img src={require('./../assets/images/pivotize.png')}  class="portfolio-image" />
        </div>
        <div class="box b">
         <img src={require('./../assets/images/ImageRankHero.png')} class="portfolio-image" />
        </div>
        <div class="box d">
         <img src={require('./../assets/images/StartupWeekHero.png')} class="portfolio-image" />
        </div>


      </div>
        <div id="bottom-padding" />
      </div>

    )
  }
}
