import React, { Component } from 'react';
import Scroll from 'react-scroll';

// styles
import './Hero.css';

// images
import LearnMoreChevron from './images/LearnMoreChevron/LearnMoreChevron';

// components
import DalaWordmark from './images/DalaWordmark/DalaWordmark';
import DalaCubeAnimation from './images/DalaCubeAnimation/DalaCubeAnimation';

var Link = Scroll.Link;

class Hero extends Component {

  render() {
    return (
      <section className="dala-hero hero is-fullheight">
        <div className="dala-cube-animation-wrapper"><DalaCubeAnimation /></div>
        <div className="hero-content">
          <div className="dala-wordmark-wrapper"><DalaWordmark /></div>
          <h1 className="hero-h1">Enabling instant, near-free, and borderless micropayments</h1>
          <h2 className="hero-h2">Designed to include 3.5 billion people in the formal financial system</h2>
          <div className="learn-more">
            <Link to="pageAboutDala" smooth>
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