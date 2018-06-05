import React, { Component } from 'react';
import Scroll from 'react-scroll';

// styles
import './Footer.css';

// images
import DalaHexagon from '../Navbars/HeroNavbar/images/dalaHexagon.svg';
import TwitterLogo from './twitter.svg';
import WalaLogomark from './wala-teal-logomark.svg';

// components

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
            <Link to="home" smooth><img src={DalaHexagon} alt="" /></Link>
            <div className="divider" />
            <a href="https://getwala.com" target="_blank" className="wala-link"><img src={WalaLogomark} className="footer-logo" alt="" /></a>
          </div>
          <div className="level-item">
            <a href="https://twitter.com/DalaFoundation" target="_blank" style={{marginLeft: 18}} rel="noopener noreferrer" ><img src={TwitterLogo} className="footer-logo" alt="" /></a>
          </div>
          <div className="level-right">
            <a href="/terms" target="_blank" ref="noopener noreferrer" className="active-footer-link">
              Terms &amp; Conditions
            </a>
            <a href="/privacypolicy" target="_blank" ref="noopener noreferrer" className="active-footer-link">
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