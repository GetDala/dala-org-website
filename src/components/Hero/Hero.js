import React, { Component } from 'react';

// styles
import './Hero.css';

// images
import LearnMoreChevron from './images/LearnMoreChevron/LearnMoreChevron';

//functions
//import { animateHero } from './animation';

// components
import DalaWordmark from './images/DalaWordmark/DalaWordmark';
import DalaCubeAnimation from './images/DalaCubeAnimation/DalaCubeAnimation';
//import DalaBorderlessBlock from './images/DalaBorderlessLogo/DalaBorderlessLogo';
import HeroNavbar from '../Navbars/HeroNavbar/HeroNavBar';

class Hero extends Component {

  componentDidMount() {
    //animateHero();
  }

  render() {
    return (
      <section className="dala-hero hero is-fullheight">
        <div className="hero-head">
          <HeroNavbar />
        </div>
        <div className="dala-cube-animation-wrapper"><DalaCubeAnimation /></div>
        <div className="hero-content">
          <div className="dala-wordmark-wrapper"><DalaWordmark /></div>
          <h1 className="hero-h1">Enabling zero-fee instantaneous and borderless micropayments</h1>
          <h2 className="hero-h2">Designed to include 3.5 billion people in the formal financial system</h2>
          <div className="learn-more">
            <span>Learn More</span>
            <LearnMoreChevron/>
          </div>
        </div>
        {/* <div className="hero-cover"></div> */}
      </section>
    );
  }
}

export default Hero;