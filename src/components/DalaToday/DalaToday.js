import React, {Component} from 'react';

import './DalaToday.css';

import WalaLogo from './images/white-wala-logo.svg';
import PhoneBase from './images/phone-base.png';
import videoWebm from "./video/wala-app-demo.webm";
import videoOgv from "./video/wala-app-demo.ogv";
import videoMp4 from "./video/wala-app-demo.mp4";
import videoMov from "./video/wala-app-demo.mov";

import userIcon from "./images/users.svg";

class DalaToday extends Component {
  render() {
    return (
      <section id="DalaToday" name="pageDalaToday">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  Dala Today
                </h2>
                <h3 className="section-description">
                  Today, consumers throughout Africa are using Dala to purchase products and services and send payments instantly anywhere, all through Wala.
                </h3>
              </header>
            </div>
          </div>
        </div>
        <div className="hero dala-today-hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-4">
                  <div className="has-text-centered"><img src={WalaLogo} className="dala-today-wala-logo" /></div>
                  <p>Wala, a zero-fee financial services app for emerging markets, is the first major contributor to Dala’s open source development and the first application to enable the use of $DALA for transactions and peer-to-peer transfers.</p>
                </div>
                <div className="column is-4 has-text-centered dala-today-phone-column">
                  <div className="video-wrapper">
                    <video width="100%" height="100%" autoPlay muted preload="auto" loop>
                      <source src={videoWebm} type="video/webm"/>
                      <source src={videoOgv} type="video/ogv"/>
                      <source src={videoMp4} type="video/mp4"/>
                      <source src={videoMov} type="video/mov"/>
                    </video>
                  </div>
                  <img src={PhoneBase} className="dala-today-phone-base" />
                </div>
                <div className="column is-4">
                  <div className="dala-today-stat">
                    <div><img src={userIcon} className="user-icon" /></div>
                    Over 100K<br />Users
                  </div>
                  <p>Today over 100K consumers in Africa are using Dala to send zero-fee payments, remit across borders, and purchase value-added services like mobile data, electricity, and TV services. Together, Dala and Wala are removing all barriers enabling zero-fee and accessible financial services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DalaToday;