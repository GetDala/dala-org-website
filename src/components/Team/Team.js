import React, {Component} from 'react';
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';

import 'react-popupbox/dist/react-popupbox.css';
import './Team.css';

class Team extends Component {
  openPopupbox = (teamMember) => {
    let content = '';
    switch(teamMember) {
      case 'tricia':
      default:
        content = (
          <div>
            <div className="popup-team-member-image tricia" />
            <div className="popup-team-member-name">Tricia Martinez</div>
            <div className="popup-team-member-title">Dala Director, Wala Founder &amp; CEO</div>
            <p className="popup-team-bio">Tricia is a serial entrepreneur and behavioral economist who has devoted her life to solving problems for underserved consumers around the world. Her experience ranges from cash transfer solutions in Africa to the development of an investment fund for underserved markets. Before Wala, Tricia worked with subsistence farmers in Sub-Saharan Africa, which exposed her to the deeply rooted complexities, and barriers in the financial systems. With a background in behavioral economics, Tricia began testing incentives models as a means to influence financial behavior. From here, Dala was born.</p>
          </div>
        );
        break;
      case 'samer':
        content = (
          <div>
            <div className="popup-team-member-image samer" />
            <div className="popup-team-member-name">Samer Saab</div>
            <div className="popup-team-member-title">Dala Director, Wala Founder &amp; COO</div>
            <p className="popup-team-bio">Samer is an engineer, serial entrepreneur, and former consultant with expertise in product development, analytics, and process excellence. Prior to founding Wala, Samer led the creation of a product that democratized design through a community-oriented system targeting low-tech consumers. His prior experience included consulting to large corporations across a flurry of functions including strategy, product development, process improvement, and incentive compensation. Samer founded Wala and Dala because of the belief that a simple, great product could solve one of the world’s biggest problems. </p>
          </div>
        );
        break;
      case 'ross':
        content = (
          <div>
            <div className="popup-team-member-image ross" />
            <div className="popup-team-member-name">Ross McEwan</div>
            <div className="popup-team-member-title">Wala CTO</div>
            <p className="popup-team-bio">Ross has 20 years of experience building software solutions across a range of industries and technologies. He cut his teeth in retail, which included the digitization of payments and services. From there, Ross began engaging with clients in the FinTech space ranging from the design and development of security infrastructure to the development and deployment of a digital general ledger application framework. At Wala, Ross has created a product that seamlessly integrates third-party services and providers, and combines best-of-breed technology to deliver an engaging, scalable, flexible, and fault-tolerant solution. </p>
          </div>
        );
        break;
      case 'llew':
        content = (
          <div>
            <div className="popup-team-member-image llew" />
            <div className="popup-team-member-name">Llew Claasen</div>
            <div className="popup-team-member-title">Dala Director</div>
            <p className="popup-team-bio">Blockchain investor and advisor specializing in token economy design, decentralized business models and product architecture. Llew is a successful entrepreneur and go-to-market strategist with almost two decades of senior management experience. Managing Partner at Newtown Partners, a blockchain investment and advisory services firm, and Executive Director at the Bitcoin Foundation, the original, oldest and largest Bitcoin advocacy organization in the world, headquartered in San Francisco, US. </p>
          </div>
        );
        break;
    }
    PopupboxManager.open({
      content,
      config: {
        fadeIn: true,
        fadeInSpeed: 250
      }
    })
  };

  render() {
    return (
      <section id="Team">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  Team
                </h2>
                <h3 className="section-description">
                  Dala is a team of financial inclusion technologists with extensive experience building and designing Fintech solutions in emerging markets.
                </h3>
              </header>
            </div>
          </div>
        </div>
        <div className="team-members is-clearfix">
          <div className="team-member-wrapper has-text-centered">
            <a className="team-member-button is-hidden-mobile" onClick={() => this.openPopupbox('tricia')} />
            <div className="team-member-image tricia" />
            <div className="team-member-name">Tricia Martinez</div>
            <div className="team-member-title">Dala Director, Wala Founder &amp; CEO</div>
            <div className="team-member-bio has-text-right is-hidden-mobile">Read Bio</div>
            <p className="team-member-bio-text is-hidden-tablet has-text-left">Tricia is a serial entrepreneur and behavioral economist who has devoted her life to solving problems for underserved consumers around the world. Her experience ranges from cash transfer solutions in Africa to the development of an investment fund for underserved markets. Before Wala, Tricia worked with subsistence farmers in Sub-Saharan Africa, which exposed her to the deeply rooted complexities, and barriers in the financial systems. With a background in behavioral economics, Tricia began testing incentives models as a means to influence financial behavior. From here, Dala was born.</p>
          </div>
          <div className="team-member-wrapper has-text-centered">
            <a className="team-member-button is-hidden-mobile" onClick={() => this.openPopupbox('samer')} />
            <div className="team-member-image samer" />
            <div className="team-member-name">Samer Saab</div>
            <div className="team-member-title">Dala Director, Wala Founder &amp; COO</div>
            <div className="team-member-bio has-text-right is-hidden-mobile">Read Bio</div>
            <p className="team-member-bio-text is-hidden-tablet has-text-left">Samer is an engineer, serial entrepreneur, and former consultant with expertise in product development, analytics, and process excellence. Prior to founding Wala, Samer led the creation of a product that democratized design through a community-oriented system targeting low-tech consumers. His prior experience included consulting to large corporations across a flurry of functions including strategy, product development, process improvement, and incentive compensation. Samer founded Wala and Dala because of the belief that a simple, great product could solve one of the world’s biggest problems. </p>
          </div>
          <div className="team-member-wrapper has-text-centered">
            <a className="team-member-button is-hidden-mobile" onClick={() => this.openPopupbox('ross')} />
            <div className="team-member-image ross" />
            <div className="team-member-name">Ross McEwan</div>
            <div className="team-member-title">Wala CTO</div>
            <div className="team-member-bio has-text-right is-hidden-mobile">Read Bio</div>
            <p className="team-member-bio-text is-hidden-tablet has-text-left">Ross has 20 years of experience building software solutions across a range of industries and technologies. He cut his teeth in retail, which included the digitization of payments and services. From there, Ross began engaging with clients in the FinTech space ranging from the design and development of security infrastructure to the development and deployment of a digital general ledger application framework. At Wala, Ross has created a product that seamlessly integrates third-party services and providers, and combines best-of-breed technology to deliver an engaging, scalable, flexible, and fault-tolerant solution. </p>
          </div>
          <div className="team-member-wrapper has-text-centered">
            <a className="team-member-button is-hidden-mobile" onClick={() => this.openPopupbox('llew')} />
            <div className="team-member-image llew" />
            <div className="team-member-name">Llew Claasen</div>
            <div className="team-member-title">Dala Director</div>
            <div className="team-member-bio has-text-right is-hidden-mobile">Read Bio</div>
            <p className="team-member-bio-text is-hidden-tablet has-text-left">Blockchain investor and advisor specializing in token economy design, decentralized business models and product architecture. Llew is a successful entrepreneur and go-to-market strategist with almost two decades of senior management experience. Managing Partner at Newtown Partners, a blockchain investment and advisory services firm, and Executive Director at the Bitcoin Foundation, the original, oldest and largest Bitcoin advocacy organization in the world, headquartered in San Francisco, US. </p>
          </div>
        </div>
        <div className="team-footer">
          <div className="container">
            <h3 className="section-description has-text-centered">
              As Dala evolves into a fully-decentralized organization, the Dala team administers and maintains the Dala technology and makes decisions on the governance of Dala.
            </h3>
          </div>
        </div>
        <PopupboxContainer />
      </section>
    );
  }
}

export default Team;