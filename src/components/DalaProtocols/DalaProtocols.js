import React, { Component } from 'react';
// styles
import './DalaProtocols.css';

// images
import Soko from './images/soko.svg';
import Kazi from './images/kazi.svg';
import Kopa from './images/kopa.svg';

class DalaProtocols extends Component {

  render() {
    return (
      <section id="DalaProtocols" name="pageDalaProtocols">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  Dala Protocols
                </h2>
                <h3 className="section-description">
                  A core set of decentralized financial services are being built to drive immediate engagement in the Dala network. These decentralized and trustless protocols will enable consumers to earn, save, borrow, and transact with $DALA:
                </h3>
              </header>
            </div>
          </div>
        </div>
        <div className="hero protocols-hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-tablet protocols">
                <div className="column is-one-third-tablet">
                  <div className="has-text-centered protocol-logo"><img alt="Kopa Protocol Logo" src={Kopa} /></div>
                  <p className="has-text-centered protocol-header"> Lending</p>
                  <p>
                    Kopa is a Dharma Protocol relayer dApp that will enable consumers to obtain $DALA loans offered by Dala holders worldwide. Through Kopa, more efficiency will come to the lending market while those with Dala will be able to earn additional Dala through repaid loan interest.
                  </p>
                  <p className="no-margin has-text-centered-mobile"><strong>Launch Date: Q1 2019</strong></p>
                </div>
                <div className="column is-one-third-tablet">
                  <div className="has-text-centered protocol-logo"><img alt="Soko Protocol Logo" src={Soko} /></div>
                  <p className="has-text-centered protocol-header">Digital products and services</p>
                  <p>
                    Soko will enable any enterprise, small business, or entrepreneur to offer their existing or new digital services to anyone who wants to consume or relay them to their consumers. Products and services can range from financial instruments like a 24-hour insurance cover to utility products like airtime and electricity.
                  </p>
                  <p className="no-margin has-text-centered-mobile"><strong>Launch Date: Q4 2018</strong></p>
                </div>
                <div className="column is-one-third-tablet">
                  <div className="has-text-centered protocol-logo"><img alt="Kazi Protocol Logo" src={Kazi} /></div>
                  <p className="has-text-centered protocol-header">Microjobs</p>
                  <p>
                    Kazi will enable any organization to offer earning opportunities to users in the Dala network. The Kazi protocol defines a procedure for defining, administering, and fulfilling microjobs using a set of smart contracts and standardized interfaces.
                  </p>
                  <p className="no-margin has-text-centered-mobile"><strong>Launch Date: Q1 2019</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DalaProtocols;