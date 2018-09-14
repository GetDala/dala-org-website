import React, {Component} from 'react';
// styles
import './ProductTimeline.css';

// images
import PhonePlaceholder from './images/Device Placeholder.png';
import DalaTokenBlank from './images/token.svg';
import videoWebm from './video/final_trim.webm';
import videoOgv from './video/final_trim.ogv';
import videoMp4 from './video/final_trim.mp4';
import videoMov from './video/final_trim.mov';

class ProductTimeline extends Component {
  render() {
    return (
      <section id="ProductTimeline" name="pageDalaProductTimeline">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  Dala Product Timeline
                </h2>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-content">
            <div className="columns is-desktop">
              <div className="column is-half-desktop phone-flex is-flex-desktop">
                <div className="phone-wrapper">
                  <div className="video-wrapper">
                    <video width="100%" height="100%" autoPlay muted preload="auto" loop>
                      <source src={videoWebm} type="video/webm"/>
                      <source src={videoOgv} type="video/ogv"/>
                      <source src={videoMp4} type="video/mp4"/>
                      <source src={videoMov} type="video/mov"/>
                    </video>
                  </div>
                  <img src={PhonePlaceholder} alt=""/>
                </div>
              </div>
              <div className="column is-half-desktop">
                <ul className="timeline">
                  <li className="is-clearfix is-flex-desktop">
                    <div className="timeline-date add-dash">
                      <img src={DalaTokenBlank} alt=""/>
                      <span>OCT<br/>2017</span>
                    </div>
                    <div className="timeline-content"><span>Dala Foundation announces the issuance of a crypto-token that enables zero-fee and instantaneous micro transactions for the masses.</span>
                    </div>
                  </li>
                  <li className="is-clearfix is-flex-desktop">
                    <div className="timeline-date add-dash">
                      <img src={DalaTokenBlank} alt=""/>
                      <span>DEC<br/>2017</span>
                    </div>
                    <div className="timeline-content"><span>Dala Token sale successfully closes and Wala begins integration.</span>
                    </div>
                  </li>
                  <li className="is-clearfix is-flex-desktop">
                    <div className="timeline-date add-dash">
                      <span>Q1<br/>2018</span>
                      <img src={DalaTokenBlank} alt=""/>
                    </div>
                    <div className="timeline-content"><span>Dala wallet launched with functionality to earn, redeem, and transact with Dala.</span>
                    </div>
                  </li>
                  <li className="is-clearfix is-flex-desktop">
                    <div className="timeline-date">
                      <span>Q3<br/>2018</span>
                      <img src={DalaTokenBlank} alt=""/>
                    </div>
                    <div className="timeline-content"><span>Release first Dala decentralized protocols to expand Dala ecosystem and utility.</span></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductTimeline;