import React, {Component, PropTypes} from 'react';
import './../theme/Portfolio.css';


export default class Portfolio extends Component {

  render() {
    return (
      <div id="portfolio-container">
        <div id="header-spacing" />
        <h1>Projects</h1>
        <div id="stroke">
          <h1 id="line">I</h1>
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
