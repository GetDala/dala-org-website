import React, {Component} from 'react';

import './DalaToday.css';

import WalaLogo from './images/white-wala-logo.svg';
import PhoneBase from './images/phone-base.png';

class DalaToday extends Component {
  render() {
    return (
      <section id="DalaToday">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
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
                  <img src={PhoneBase} className="dala-today-phone-base" />
                </div>
                <div className="column is-4">
                  <div className="dala-today-stat">&gt;100K</div>
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