import React, { Component } from 'react';
import Scroll from 'react-scroll';

// styles
import './Footer.css';

// images
import DalaHexagon from '../Navbars/HeroNavbar/images/dalaHexagon.svg';
import TwitterLogo from './twitter.svg';
import WalaLogomark from './wala-teal-logomark.svg';

// components
import ReactGA from 'react-ga';
var scroller = Scroll.animateScroll;
var Link = Scroll.Link;

class Footer extends Component {

  scrollTo(section) {
    scroller.scrollTo(section);
  }

  render() {
    return (
      <section id="Footer">
        <nav className="footer-nav level">
          <div className="level-left">
            <Link to="home" smooth onClick={() => { ReactGA.event({
              category: 'Home Footer Nav',
              action: 'Scroll to top of page'
            }); }}><img src={DalaHexagon} alt="" /></Link>
            <div className="divider" />
            <a href="https://getwala.com" target="_blank" className="wala-link" rel="noopener noreferrer" onClick={() => { ReactGA.event({
              category: 'Wala Footer Nav',
              action: 'Go to Wala websiute'
            }); }}><img src={WalaLogomark} className="footer-logo" alt="" /></a>
          </div>
          <div className="level-item">
            <a href="https://twitter.com/DalaFoundation" target="_blank" style={{marginLeft: 18}} rel="noopener noreferrer" onClick={() => { ReactGA.event({
              category: 'Twitter Footer Nav',
              action: 'Go to Twitter page'
            }); }}><img src={TwitterLogo} className="footer-logo" alt="" /></a>
          </div>
          <div className="level-right">
            <a href="/terms" className="active-footer-link" onClick={() => { ReactGA.event({
              category: 'Terms and Conditions Footer Nav',
              action: 'Go to Terms and Conditions'
            }); }}>
              Terms &amp; Conditions
            </a>
            <a href="/privacypolicy" className="active-footer-link" onClick={() => { ReactGA.event({
              category: 'Privacy Policy Footer Nav',
              action: 'Go to privacy policy'
            }); }}>
              Privacy Policy
            </a>
          </div>
        </nav>
        <div className="footer-legal has-text-centered">
          &copy; 2018 WALA INC. ALL RIGHTS RESERVED
        </div>
      </section>
    );
  }
}

export default Footer;