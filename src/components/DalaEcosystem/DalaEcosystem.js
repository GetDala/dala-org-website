import React, {Component} from 'react';

// styles
import './DalaEcosystem.css';

// images
import HexagonLock from './images/hexagon-lock.svg';
import DalaLogo from './images/EcosystemDalaLogo.svg';
import WalaLogo from './images/EcosystemWalaLogo.svg';

// components
import CallToAction from '../CallToAction/CallToAction';
import ReactGA from 'react-ga';

class DalaEcosystem extends Component {

  render() {
    return (
      <section id="DalaEcosystem" name="pageDalaEcosystem">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  Dala Ecosystem
                </h2>
                <h3 className="section-description">
                  Dala is designed to bring 3.5 billion underserved consumers into a new decentralized financial system.
                </h3>
              </header>
            </div>
          </div>
        </div>
        <div className="container has-text-centered">
          <div className="video-wrapper">
            <div className="video-container">
              <iframe className="video" frameBorder="0" allowFullScreen="1" allow="autoplay; encrypted-media" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/BSC-AqZlx1k?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1" id="widget2"></iframe>
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
                      <img alt="" src={DalaLogo}/>
                    </div>
                    <p>
                      The Dala ecosystem expands across borders and financial services, enabling consumers to earn, save, borrow, and transact with Dala. The Dala Foundation’s long-term goal is to maximize the value of the Dala ecosystem. The largest driver of Dala network value is the size and utility of the network to end-users, which the Foundation drives through token rewards and the provision of decentralized protocols to enable the use of Dala.
                    </p>
                  </div>
                  <div className="hexagon-graphic">
                    <img id="HexagonLockImg" alt="" src={HexagonLock}/>
                  </div>
                  <div className="column is-half-desktop wala-explainer">
                    <div id="EcosystemWalaLogo" className="logo-wrapper">
                      <img alt="" src={WalaLogo}/>
                    </div>
                    <p>
                      The first application to make use of Dala is the Wala Financial Platform. Since launch (April 2018), the Dala token has had utility within Wala where a user can send Dala to other Wala users at zero-fees, remit across borders, and purchase value-added services like mobile data, electricity, and tv services. Together, Dala and Wala are removing all barriers enabling zero-fee and accessible financial services.
                    </p>
                  </div>
                </div>
                <div className="columns is-desktop ecosystem-learn-more is-flex-desktop">
                  <div className="column is-two-fifths-desktop">
                    <span className="ecosystem-learn-more-content">Learn More about Dala &amp; Wala</span>
                  </div>
                  <div className="column is-three-fifths-desktop ecosystem-links has-text-right-desktop">
                    <span className="ecosystem-cta">
                      <CallToAction
                        variation={'anchor'}
                        destination={'https://s3-eu-west-1.amazonaws.com/dalaorg-website-bucket/dalawhitepaper.pdf'}
                        label={'Whitepaper'}
                        onClick={() => { ReactGA.event({
                          category: 'Whitepaper',
                          action: 'go to whitepaper'
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

export default DalaEcosystem;