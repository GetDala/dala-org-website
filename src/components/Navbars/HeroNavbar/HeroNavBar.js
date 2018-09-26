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
              <Link className="hero-navbar-right-link" to="pageDalaToday" smooth onClick={() => { ReactGA.event({
                category: 'Dala Today',
                action: 'Scroll to Dala Today section'
              }); }}>
                Dala Today
              </Link>
              <Link className="hero-navbar-right-link" to="pagePartnerships" smooth onClick={() => { ReactGA.event({
                category: 'Partnerships',
                action: 'Scroll to Partnerships section'
              }); }}>
                Partnerships
              </Link>
              <Link className="hero-navbar-right-link" to="pageDalaProtocols" smooth onClick={() => { ReactGA.event({
                category: 'Protocols',
                action: 'scroll to protocols section'
              }); }}>
                Protocols
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
