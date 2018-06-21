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
        <div className="rotated-h1">
          <Fade bottom delay={500}>
          <h1>Projects</h1>
          </Fade>
        </div>
        <div className="rotated">
          <Fade bottom delay={1750}>
          <div id="stroke">
            <h1 id="line">I</h1>
          </div>
          </Fade>
        </div>
        <div className="wrapper">
        <div className="box a">
          <img src={require('./../assets/images/EatSocialHero.png')} class="portfolio-image" />
        </div>
        <div className="box c">
         <img src={require('./../assets/images/pivotize.png')}  class="portfolio-image" />
        </div>
        <div className="box b">
         <img src={require('./../assets/images/ImageRankHero.png')} class="portfolio-image" />
        </div>
        <div className="box d">
         <img src={require('./../assets/images/StartupWeekHero.png')} class="portfolio-image" />
        </div>


      </div>
        <div id="bottom-padding" />
      </div>

    )
  }
}
