import React, {Component} from 'react';

// styles
import './DalaEcosystem.css';

// images
import HexagonLock from './images/hexagon-lock.svg';
import DalaLogo from './images/EcosystemDalaLogo.svg';
import WalaLogo from './images/EcosystemWalaLogo.svg';

// components
import CallToAction from '../CallToAction/CallToAction';

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
                  Dala is designed to bring 3.5 billion underserved consumers into the formal financial system.
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
                      The Dala ecosystem expands through partnerships across borders and financial services, enabling
                      consumers and enterprises to transact, save, lend, and invest with Dala. The Dala Foundation’s
                      long-term goal is to maximize the value of the Dala ecosystem. The largest driver of Dala network
                      value is the size and utility of the network to end-users, which the Foundation will drive
                      through token rewards and the provision of software tools to enable the use of Dala.
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
                      The first application to make use of Dala is the Wala Financial Platform. Since launch (April 2018), the Dala token has had utility within the Wala Financial Platform where a user can transfer Dala to other Wala users for free, remit across borders, and redeem for airtime, data, and other value-added services. Together, the Dala token and the Wala Financial Platform are removing all barriers enabling zero-fee and accessible financial services.
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
                        destination={'http://wala-tokensale-website.s3-website-eu-west-1.amazonaws.com/dalawhitepaper.pdf'}
                        label={'Whitepaper'}
                      />
                    </span>
                    <span className="ecosystem-cta">
                      <CallToAction
                        variation={'anchor'}
                        destination={'http://wala-tokensale-website.s3-website-eu-west-1.amazonaws.com/dala_lite_paper.pdf'}
                        label={'Lite Paper'}
                      />
                    </span>
                    <span className="ecosystem-cta">
                      <CallToAction
                        variation={'anchor'}
                        destination={'http://wala-tokensale-website.s3-website-eu-west-1.amazonaws.com/dala_russian_lite_paper.pdf'}
                        label={'Lite Paper (RUS)'}
                      />
                    </span>
                    <span className="ecosystem-cta">
                      <CallToAction
                        variation={'anchor'}
                        destination={'http://wala-tokensale-website.s3-website-eu-west-1.amazonaws.com/dala_japanese_lite_paper.pdf'}
                        label={'Lite Paper (JPN)'}
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