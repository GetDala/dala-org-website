import React, { Component } from 'react';
import Scroll from 'react-scroll';

// styles
import './HeroNavBar.css';

// images
import DalaHexagon from './images/dalaHexagon.svg';
import DalaLogomark from './images/dala-logomark.svg';

// components
import CallToAction from '../../CallToAction/CallToAction';

var scroller = Scroll.animateScroll;
var Link = Scroll.Link;

class HeroNavBar extends Component {

  scrollTo(section) {
    scroller.scrollTo(section);
  }

  render() {
    return (
      <nav className="navbar hero-navbar">
        <div className="navbar-brand">
          <a href="#!" className="hero-navbar-brand-link">
            <img src={DalaHexagon} className="brand-logo" alt="Dala Hexagon Logo" /> <img alt="" src={DalaLogomark} className="brand-logomark" />
          </a>
        </div>
        <div className="navbar-end">
          <Link className="hero-navbar-right-link" to="pageAboutDala" smooth>
            About Us
          </Link>
          <Link className="hero-navbar-right-link" to="pageDalaEcosystem" smooth>
            Ecosystem
          </Link>
          <Link className="hero-navbar-right-link" to="pageRewardsEngine" smooth>
            Rewards
          </Link>
          <Link className="hero-navbar-right-link" to="pageDalaGovernance" smooth>
            Governance
          </Link>
          <Link className="hero-navbar-right-link" to="pageDalaProductTimeline" smooth>
            Timeline
          </Link>
          <Link className="hero-navbar-right-link" to="pageTokenSale" smooth>
            Token Sale
          </Link>
          <CallToAction
            variation={'scroll'}
            label={'Partner With Us'}
            destination={'pageBecomePartners'}
            helperClasses={['navbar-cta']}
          />
        </div>
      </nav>
    );
  }
}

export default HeroNavBar;
