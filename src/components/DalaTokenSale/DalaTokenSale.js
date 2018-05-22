import React, { Component } from 'react';
// styles
import './DalaTokenSale.css';

// images

// components
import CallToAction from '../CallToAction/CallToAction';

class DalaTokenSale extends Component {
  render() {
    return (
      <section id="DalaTokenSale" name="pageTokenSale">
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
                The Dala token sale successfully sold a limited release of Dala tokens during December 2017 and Wala immediately began integration. Dala token holders have access to a backers Telegram channel where they are able to engage with the Dala Foundation and with Wala. All official Wala and Dala Foundation announcements are posted to this channel to ensure that token sale backers remain informed about the progress of the Dala ecosystem rollout.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="more-info">More information on our Telegram</div>
              <CallToAction variation="anchor" destination="https://t.me/getwala" label="Telegram" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DalaTokenSale;