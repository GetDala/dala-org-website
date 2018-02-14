import React, { Component } from 'react';
// styles
import './DalaTokenSale.css';

// images

// components
import CallToAction from '../CallToAction/CallToAction';

class DalaTokenSale extends Component {
  render() {
    return (
      <section id="DalaTokenSale">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  Dala Token Sale & Dala Token Holders
                </h2>
              </header>
            </div>
          </div>
        </div>
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <p>
                The Dala token sale successfully concluded in December 2017 and Wala immediately began integration. Dala token holders have access to a backers Telegram channel where they are able to engage with the Dala Corporation and with Wala. All official Wala and Dala Corporation announcements are posted to this channel to ensure that token sale backers remain informed about the progress of the Dala ecosystem rollout.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="more-info">More information on the Dala Token Sale and Telegram</div>
              <CallToAction destination="#!" label={'Token Website'} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DalaTokenSale;