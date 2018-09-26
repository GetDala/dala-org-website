import React, {Component} from 'react';

// styles
import './DalaEcosystem.css';

// images
import HexagonLock from './images/hexagon-lock.svg';
import DalaLogo from './images/dalaHexagon.svg';
import WalaLogo from './images/EcosystemWalaLogo.svg';

// components
import CallToAction from '../CallToAction/CallToAction';
import ReactGA from 'react-ga';

class DalaEcosystem extends Component {

  render() {
    return (
      <section id="DalaEcosystem" name="pageDalaEcosystem">
        <div className="has-text-centered">
          <img src={DalaLogo} alt="dala logo" className="dala-hex-logo" />
        </div>
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
        <div className="container">
          <div className="columns">
            <div className="ecosystem-experience column is-10-tablet is-offset-1-tablet">
              <p>The Dala ecosystem expands across borders and financial services, enabling consumers to earn, save, borrow, and transact with Dala. The Dala Foundation’s long-term goal is to maximize the value of the Dala ecosystem. The largest driver of Dala network value is the size and utility of the network to end-users, which the Foundation drives through token rewards and the provision of decentralized protocols to enable the use of Dala.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-content">
            <div className="columns">
              <div className="column is-10-desktop is-offset-1-desktop">
                <div className="columns add-elevation">
                  <div className="column">
                    <div className="columns is-desktop main-content">
                      <div className="column">
                        <div className="video-container">
                          <iframe className="embed" width="100%" height="auto" src="https://www.youtube.com/embed/MobDGCetslM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
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
          </div>
        </div>
      </section>
    );
  }
}

export default DalaEcosystem;