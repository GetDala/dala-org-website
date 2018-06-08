import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Headroom from 'react-headroom';

// styles
import './HeroNavBar.css';

// images
import DalaHexagon from './images/dalaHexagon.svg';
import DalaLogomark from './images/dala-logomark.svg';

// components
import CallToAction from '../../CallToAction/CallToAction';

import ReactGA from 'react-ga';
var scroller = Scroll.animateScroll;
var Link = Scroll.Link;

class HeroNavBar extends Component {

  scrollTo(section) {
    scroller.scrollTo(section);
  }

  render() {
    return (
      <Headroom disableInlineStyles>
        <nav className="navbar hero-navbar">
          {!this.props.legalSection ? (
            <div className="navbar-brand">
              <Link to="home" smooth className="hero-navbar-brand-link" onClick={() => { ReactGA.event({
                category: 'Home Nav',
                action: 'Scroll to top of page'
              }); }}>
                <img src={DalaHexagon} className="brand-logo" alt="Dala Hexagon Logo" /> <img alt="" src={DalaLogomark} className="brand-logomark" />
              </Link>
            </div>
          ) : (
            <div className="navbar-brand">
              <a href="/" className="hero-navbar-brand-link" onClick={() => { ReactGA.event({
                category: 'Home Nav - Legal Section',
                action: 'Go to dala.org home page'
              }); }}>
                <img src={DalaHexagon} className="brand-logo" alt="Dala Hexagon Logo" /> <img alt="" src={DalaLogomark} className="brand-logomark" />
              </a>
            </div>
          )}
          {!this.props.legalSection ? (
            <div className="navbar-end">
              <Link className="hero-navbar-right-link" to="pageAboutDala" smooth onClick={() => { ReactGA.event({
                category: 'About Us Nav',
                action: 'Scroll to About us section'
              }); }}>
                About Us
              </Link>
              <Link className="hero-navbar-right-link" to="pageDalaEcosystem" smooth onClick={() => { ReactGA.event({
                category: 'Ecosystem Nav',
                action: 'Scroll to Ecosystem section'
              }); }}>
                Ecosystem
              </Link>
              <Link className="hero-navbar-right-link" to="pageRewardsEngine" smooth onClick={() => { ReactGA.event({
                category: 'Rewards Nav',
                action: 'Scroll to Rewards section'
              }); }}>
                Rewards
              </Link>
              <Link className="hero-navbar-right-link" to="pageDalaGovernance" smooth onClick={() => { ReactGA.event({
                category: 'Governance Nav',
                action: 'Scroll to Governance section'
              }); }}>
                Governance
              </Link>
              <Link className="hero-navbar-right-link" to="pageDalaProductTimeline" smooth onClick={() => { ReactGA.event({
                category: 'Timeline Nav',
                action: 'scroll to timeline section'
              }); }}>
                Timeline
              </Link>
              <Link className="hero-navbar-right-link" to="pageTokenSale" smooth onClick={() => { ReactGA.event({
                category: 'Token Sale nav',
                action: 'Scroll to Token Sale section'
              }); }}>
                Token Sale
              </Link>
              <CallToAction
                variation={'scroll'}
                label={'Partner With Us'}
                destination={'pageBecomePartners'}
                helperClasses={['navbar-cta']}
                onClick={() => { ReactGA.event({
                  category: 'Become Partners Floating button',
                  action: 'scrolls down to contact email'
                }); }}
              />
            </div>
          ) : (
            <div className="navbar-end">
              <CallToAction
                variation={'scroll'}
                label={'Partner With Us'}
                destination={'pageBecomePartners'}
                helperClasses={['navbar-cta']}
                onClick={() => { ReactGA.event({
                  category: 'Become Partners Floating button - Legal Section',
                  action: 'scrolls down to contact email'
                }); }}
              />
            </div>
          )}
        </nav>
      </Headroom>
    );
  }
}

export default HeroNavBar;
