import React, { Component } from 'react';
import Scroll from 'react-scroll';

// styles
import './Footer.css';

// images
import DalaHexagon from '../Navbars/HeroNavbar/images/dalaHexagon.svg';

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
            <img src={DalaHexagon} alt="" />
          </div>
          <div className="level-right">
            <Link to="pageAboutDala" smooth activeClass={'active-footer-link'}>
              About Us
            </Link>
            <Link to="pageDalaEcosystem" smooth activeClass={'active-footer-link'}>
              Ecosystem
            </Link>
            <Link to="pageRewardsEngine" smooth activeClass={'active-footer-link'}>
              Rewards
            </Link>
            <Link to="pageDalaGovernance" smooth activeClass={'active-footer-link'}>
              Governance
            </Link>
            <Link to="pageDalaProductTimeline" smooth activeClass={'active-footer-link'}>
              Timeline
            </Link>
            <Link to="pageTokenSale" smooth activeClass={'active-footer-link'}>
              Token Sale
            </Link>
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