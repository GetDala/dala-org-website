import React, {Component} from 'react';

import './Partnerships.css';

class Partnerships extends Component {
  render() {
    return (
      <section id="Partnerships">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  Partnerships
                </h2>
                <h3 className="section-description">
                  From financial services to solar energy to agriculture, Dala is reaching the masses through enterprise and government partnerships.
                </h3>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-half-desktop remove-offset-desktop is-10-tablet is-offset-1-tablet">
              <div className="picture-frame solar-picture" />
              <div className="partnership-header">Solar Energy Economy</div>
              <p>In a solar initiative approved by the Ugandan Government and the Ugandan Ministry of Energy and Mineral Development, Dala has partnered with CleanPath Emerging Markets (CP-EM) who are developing a  gigawatt-scale solar program for Uganda that will employ $DALA as the principle transactional currency program-wide, allowing Ugandan consumers to purchase solar power in $DALA, workers to be paid in $DALA and the program to run on $DALA.  </p>
              <p>The gigawatt program - more than double the current generation capacity in Uganda - will provide clean energy to over 2 million households (25% of the UG population)  create essential employment at scale, while initiating growth of a clean energy economy, through stimulating new economic development in Uganda. </p>
            </div>
            <div className="column is-half-desktop remove-offset-desktop is-10-tablet is-offset-1-tablet">
              <div className="picture-frame agriculture-picture" />
              <div className="partnership-header">Agriculture Economy</div>
              <p>In an initiative to drive financial inclusion and economic growth, Dala and Block Commodities, a commodities company in emerging markets, are working in partnership to provide an equivalent of US$10M in $DALA loans to approximately 50,000 smallholder farmers across Sub-Saharan Africa, starting in Uganda. </p>
              <p>Loans will be provided via Dala’s trustless and decentralized lending protocol, Kopa, enabling farmers to purchase fertilizer, raise productivity, and secure better returns for produce.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partnerships;