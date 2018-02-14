import React, { Component } from 'react';
// styles
import './DalaGovernance.css';

// images
import Compass from './images/Compass.svg';

// components

class DalaGovernance extends Component {

  render() {
    return (
      <section id="DalaGovernance">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  Dala Governance
                </h2>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-content">
            <div className="columns is-desktop">
              <div className="column is-half-desktop governance-content">
                <p>
                  The Dala Corporation administers and maintains the Dala token technology. The Corporation makes decisions on the future governance of Dala, as it evolves into a fully-decentralized organization, by monitoring the market for best-in-class solutions. With a long-term goal of maximizing the value of the Dala ecosystem, the Dala corporation is focused on key growth drivers, the size, and utility of the network to end-users.
                </p>
                <p>
                  The Corporation will fund research and technical development of the Dala ecosystem. It is tasked with developing and implementing changes that improve the performance of the entire Dala ecosystem and more generally, micropayments using blockchain technology. Through this function, the Dala Corporation expects to actively contribute to the development of the cryptocurrency ecosystem.
                </p>
              </div>
              <div className="column is-half-desktop governance-image">
                <div className="compass-wrapper">
                  <img alt="" src={Compass} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DalaGovernance;