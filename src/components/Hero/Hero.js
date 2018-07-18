import React, { Component } from 'react';
import Scroll from 'react-scroll';

// styles
import './Hero.css';

// images
import LearnMoreChevron from './images/LearnMoreChevron/LearnMoreChevron';

// components
import DalaWordmark from './images/DalaWordmark/DalaWordmark';
import DalaCubeAnimation from './images/DalaCubeAnimation/DalaCubeAnimation';

import ReactGA from 'react-ga';
var Link = Scroll.Link;

class Hero extends Component {

  render() {
    return (
      <section id="home" className="dala-hero hero is-fullheight">
        <div className="dala-cube-animation-wrapper"><DalaCubeAnimation /></div>
        <div className="hero-content">
          <div className="dala-wordmark-wrapper"><DalaWordmark /></div>
          <h1 className="hero-h1">A Decentralized Financial System for Emerging Markets</h1>
          <h2 className="hero-h2">Enabling consumers to save, earn, borrow, and transact</h2>
          <div className="learn-more">
            <Link to="pageAboutDala" smooth offset={-85} onClick={() => { ReactGA.event({
              category: 'Learn More',
              action: 'scrolls to next section'
            }); }}>
              <span>Learn More</span>
              <LearnMoreChevron/>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;