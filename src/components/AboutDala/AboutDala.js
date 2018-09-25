import React, { Component } from 'react';

// styles
import './AboutDala.css';

// images
import IsometricMap from './images/IsometricMap/IsometricMap';
import CallToAction from '../CallToAction/CallToAction';
import ReactGA from 'react-ga';

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
                  $DALA is live, in the hands of over 100K emerging market consumers & has been transacted more than 3M times.
                </h3>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-content">
            <div className="columns is-desktop remove-padding">
              <div className="column">
                <div className="columns is-desktop">
                  <div className="column float-on-desktop">
                    <p>Dala is a decentralized financial system designed for emerging markets. It's powered by $DALA, an open-source multi-chain crypto asset. Through Dala protocols (Kopa, Soko and Kazi), consumers have access to borderless, low cost, efficient, and unique financial services enabling them to earn, save, borrow, and transact in a new decentralized financial system. The first major contributor to Dala’s open source development and the first application to enable the use of $DALA for transactions and peer-to-peer transfers is Wala, a zero-fee financial services app for emerging markets.</p>
                  </div>
                  <div className="column is-offset-5-desktop is-7-desktop is-offset-4-widescreen is-8-widescreen">
                    <IsometricMap/>
                  </div>
                </div>
                <div className="columns is-desktop ecosystem-learn-more is-flex-desktop remove-padding">
                  <div className="column is-two-fifths-desktop">
                    <span className="ecosystem-learn-more-content">Smart Contract Details</span>
                  </div>
                  <div className="column is-half-desktop is-three-fifths-desktop ecosystem-links has-text-right-desktop">
                    <span className="about-dala-cta">
                      <CallToAction
                        variation={'anchor'}
                        destination={'https://github.com/GetDala/dala-smart-contracts'}
                        label={'Smart Contract'}
                        onClick={() => { ReactGA.event({
                          category: 'Smart Contract link',
                          action: 'go to smart contract'
                        }); }}
                      />
                    </span>
                    <span className="about-dala-cta">
                      <CallToAction
                        variation={'anchor'}
                        destination={'https://www.iosiro.com/dala-token-sale-audit'}
                        label={'Smart Contract Audit'}
                        onClick={() => { ReactGA.event({
                          category: 'Smart Contract Audit',
                          action: 'go to smart contract audit'
                        }); }}
                      />
                    </span>
                    <span className="about-dala-cta">
                      <CallToAction
                        variation={'anchor'}
                        destination={'https://etherscan.io/token/0xa87c3ec87eb802aad080df0adb331e504d327e5d'}
                        label={'Token Contract Address'}
                        onClick={() => { ReactGA.event({
                          category: 'Token Contract Address',
                          action: 'go to token contract address'
                        }); }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutDala;