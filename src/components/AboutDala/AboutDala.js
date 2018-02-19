import React, { Component } from 'react';

// styles
import './AboutDala.css';

// images
import IsometricMap from './images/IsometricMap/IsometricMap';

class AboutDala extends Component {

  render() {
    return (
      <section id="AboutDala" name="pageAboutDala">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  About Dala
                </h2>
                <h3 className="section-description">
                  To enable a zero-fee and borderless financial system for emerging market consumers, a new crypto-token, Dala, was issued by the Dala Foundation.
                </h3>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-content">
            <div className="columns is-desktop">
              <div className="column float-on-desktop">
                <p>
                  The Dala utility token is a general-purpose ERC-20 cryptographic token developed by the Dala Foundation and issued on the public Ethereum blockchain. The token is fractionally divisible and is independent of all local currencies and cryptocurrencies. Consumers will be able to engage in the Dala ecosystem by making transfers using their own token wallets, via the Wala Financial Platform (Dala's launch partner), or through other applications built using the Dala API.
                </p>
                <p>
                  The Dala Foundation is a private exempted company incorporated in the Cayman Islands and is intended to become a fully-decentralized autonomous organization (known as a DAO). However, due to the infancy of the crypto governance space, the Dala Foundation will assist with providing a governance forum, administer and maintain the Dala token economy in the short-term.
                </p>
              </div>
              <div className="column is-offset-5-desktop is-7-desktop is-offset-4-widescreen is-8-widescreen">
                <IsometricMap/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutDala;