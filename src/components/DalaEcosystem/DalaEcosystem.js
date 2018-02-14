import React, { Component } from 'react';
// styles
import './DalaEcosystem.css';

// images
import HexagonLock from './images/hexagon-lock.svg';
import DalaLogo from './images/EcosystemDalaLogo.svg';
import WalaLogo from './images/EcosystemWalaLogo.svg';

// components

class DalaEcosystem extends Component {

  render() {
    return (
      <section id="DalaEcosystem">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  Dala Ecosystem
                </h2>
                <h3 className="section-description">
                  Dala is designed to bring 3.5 billion underserved consumers into the formal financial system.
                </h3>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-content">
            <div className="columns add-elevation">
              <div className="column">
                <div className="columns is-desktop main-content">
                  <div className="column is-half-desktop dala-explainer">
                    <div id="EcosystemDalaLogo" className="logo-wrapper">
                      <img alt="" src={DalaLogo} />
                    </div>
                    <p>
                      The first application to make use of Dala is the Wala Financial Platform. Upon launch, the Dala token will have immediate utility within the Wala Financial Platform where a user can transfer Dala to other Wala users for free, remit across borders, and redeem for airtime, data, and other value-added services. Together, the Dala token and the Wala Financial Platform can remove all barriers enabling free and accessible financial services.
                    </p>
                  </div>
                  <div className="hexagon-graphic">
                    <img id="HexagonLockImg" alt="" src={HexagonLock} />
                  </div>
                  <div className="column is-half-desktop wala-explainer">
                    <div id="EcosystemWalaLogo" className="logo-wrapper">
                      <img alt="" src={WalaLogo} />
                    </div>
                    <p>
                      The Dala ecosystem expands through partnerships across borders and financial services, enabling consumers and enterprises to transact, save, lend, and invest with Dala. The Dala Corporation’s long-term goal is to maximize the value of the Dala ecosystem. The largest driver of Dala network value is the size and utility of the network to end-users, which the Corporation will drive through token rewards and the provision of software tools to enable the use of Dala.
                    </p>
                  </div>
                </div>
                <div>asd</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DalaEcosystem;