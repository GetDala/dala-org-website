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
                  Dala Decentralized Protocols
                </h2>
                <h3 className="section-description">
                  A core set of decentralized financial services are being built to drive immediate engagement in the Dala economy. These protocols will enable consumers to earn, save, borrow, and transact with Dala:
                </h3>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-content">
            <div className="columns is-desktop">
              <div className="column is-one-third-desktop add-purplebg-1">
                <div className="has-text-centered protocol-logo"><img alt="Kopa Protocol Logo" src={Kopa} /></div>
                <p className="has-text-centered add-bold"> A decentralized and trustless lending protocol</p>
                <div className="protocol-divider" />
                <p>
                  Kopa is a Dharma Protocol relayer dApp that will enable consumers to obtain Dala loans offered by Dala holders worldwide. Through Kopa, more efficiency will come to the lending market while those with Dala will be able to earn additional Dala through repaid loan interest.
                </p>
              </div>
              <div className="column is-one-third-desktop add-purplebg-2">
                <div className="has-text-centered protocol-logo"><img alt="Soko Protocol Logo" src={Soko} /></div>
                <p className="has-text-centered add-bold">A decentralized and trustless marketplace for digital products and services</p>
                <div className="protocol-divider" />
                <p>
                  Soko will enable any enterprise, small business, or entrepreneur to offer their existing or new digital services to anyone who wants to consume or relay them to their consumers. Products and services can range from financial instruments like a 24-hour insurance cover to utility products like airtime and electricity.
                </p>
              </div>
              <div className="column is-one-third-desktop add-purplebg-3">
                <div className="has-text-centered protocol-logo"><img alt="Kazi Protocol Logo" src={Kazi} /></div>
                <p className="has-text-centered add-bold">A decentralized and trustless marketplace for microjobs</p>
                <div className="protocol-divider" />
                <p>
                  Kazi will enable any organization to offer earning opportunities to users in the Dala network. The Kazi protocol defines a procedure for defining, administering, and fulfilling microjobs using a set of smart contracts and standardized interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DalaProtocols;