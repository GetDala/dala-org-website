import React, { Component } from 'react';

// styles
import './RewardsEngine.css';

// images
import RewardsEngineGraphic from './images/RewardsEngineGraphic/RewardsEngineGraphic';
// components

class RewardsEngine extends Component {

  render() {
    return (
      <section id="RewardsEngine">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  Rewards Engine
                </h2>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-content">
            <div className="columns is-desktop">
              <div className="column float-on-desktop rewards-engine-content">
                <p>
                  To enable a robust Dala ecosystem, the Dala Corporation will incentivize users and ecosystem partners through a rewards model. The Dala token rewards model has been proven, supports the acquisition of billions of consumers globally and drives adoption of merchants, SMEs, and enterprises.
                </p>
                <p>
                  As the first partner of Dala, Wala is driving critical early adoption of Dala. Over time, the Dala Corporation will attract new partner platforms and providers to the Dala ecosystem using a combination of rewards and open-sourced APIs and SDKs, building a robust Dala economy, independent from Wala.
                </p>
              </div>
              <div className="column is-offset-5-desktop is-7-desktop is-offset-4-widescreen is-8-widescreen">
                <RewardsEngineGraphic />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RewardsEngine;