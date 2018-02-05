import React, { Component } from 'react';

// styles
import './HeroNavBar.css';

// images
import DalaHexagon from './images/dalaHexagon.svg';
import DalaLogomark from './images/dala-logomark.svg';

// components
import CallToAction from '../../CallToAction/CallToAction';

class HeroNavBar extends Component {

  render() {
    return (
      <nav className="navbar hero-navbar">
        <div className="navbar-brand">
          <a href="#!" className="hero-navbar-brand-link">
            <img src={DalaHexagon} className="brand-logo" alt="Dala Hexagon Logo" /> <img alt="" src={DalaLogomark} className="brand-logomark" />
          </a>
        </div>
        <div className="navbar-end">
          <a href="#home" className="hero-navbar-right-link">
            About Us
          </a>
          <a href="#home" className="hero-navbar-right-link">
            Ecosystem
          </a>
          <a href="#home" className="hero-navbar-right-link">
            Rewards
          </a>
          <a href="#home" className="hero-navbar-right-link">
            Governance
          </a>
          <a href="#home" className="hero-navbar-right-link">
            Timeline
          </a>
          <a href="#home" className="hero-navbar-right-link">
            ICO
          </a>
          <CallToAction
            label={'Partner With Us'}
            destination={'#!'}
            helperClasses={['navbar-cta']}
          />
        </div>
      </nav>
    );
  }
}

export default HeroNavBar;
