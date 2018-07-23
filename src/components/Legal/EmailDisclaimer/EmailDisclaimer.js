import React, {Component} from 'react';

// styles
import '../Legal.css';

// images
import DalaHexagon from '../../Navbars/HeroNavbar/images/dalaHexagon.svg';
import DalaLogotype from '../../Navbars/HeroNavbar/images/dala-logomark-purple.svg';

class EmailDisclaimer extends Component {

  render() {
    return (
      <section id="home" className="legal-section">
        <div className="container">
          <div className="columns">
            <div className="column is-three-fifths-desktop is-offset-one-fifth-desktop is-10-tablet is-offset-1-tablet is-10-mobile is-offset-1-mobile">
              <div className="dala-hexagon has-text-centered"><img src={DalaHexagon} alt=""/></div>
              <div className="dala-logotype has-text-centered"><img src={DalaLogotype} alt=""/></div>
              <h1 className="has-text-centered">Dala Cayman Email Disclaimer</h1>
              <h2 className="has-text-centered">Last updated: 19 July 2018</h2>
              <p>This email message (including attachments) contains information and material which may be confidential and/or legally privileged. Unless you are the intended recipient, you may not use, copy or disclose to anyone the message or any information or material contained in the message or from any attachments that were sent with this email and the taking of any action in reliance thereon, or pursuant thereto, is strictly prohibited. If you have received this email message in error, please advise the sender by email immediately, and delete the message. Unauthorised disclosure and/or use of information contained in this email may result in civil and criminal liability.</p>
              <p>All content and attachments in this e-mail, relating to the official business of Dala Cayman, an exempted company incorporated in the Cayman Islands and having registration number BM-327404 (“Dala”) and its related activities, is proprietary to Dala. Extreme caution should be observed in placing any reliance upon any information contained in and/or attached to this email, which is not intended to be a representation or inducement to make any decision in relation to Dala or any associated companies or services provided by Dala. Any decision taken based on the information provided in this email, should only be made after consultation with appropriate legal, regulatory, tax, technical, business, investment, financial, crypto, blockchain and accounting advisors, as the case may be. Unless expressly provided in this email, receipt of this email is not to be interpreted as an offer of services or invitation to do business or participation in/or to any related services which Dala may offer.</p>
              <p>The email address of the sender may not be used, copied, sold, disclosed or incorporated into any database or mailing list for spamming and/or other marketing purposes without the prior consent of Dala or any of the associated companies. Subject to applicable law, Dala reserves the right to intercept, filter, view, block, delete, access, copy, read and act upon this email message and all email messages sent as reply messages to this email message or the address of the sender.</p>
              <p>Neither the sender of the email, nor Dala nor any other parties assisting Dala as service providers shall be liable to any party for any direct, indirect or consequential damages, including, without limitation, loss of profit, loss of revenue, loss of income, loss of value, interruption of business or loss of information, data or software or otherwise. No warranties are created or implied that an employee of Dala and/or affiliates or associates of any third-party service providers or independent contractors of Dala is authorised to create and send this email. This email legal notice shall at all times take precedence over any other email disclaimer(s) attached to return emails addressed to any person with an email account of any affiliates or associates of Dala and/or the Sender.</p>
              <p>Dala reserves the exclusive right to prohibit, at its sole discretion, any person/s or entities from participating in any activities, crypto or token- related services/issuances/sales, additional services or products which may be communicated by way of this email, for reasons which include, but are not limited to, domicile, jurisdictional compliance regulatory concerns, legal actions, international sanctions, commercial or any other reasons or obligations as the case may be.</p>
              <p>Internet communications cannot be guaranteed to be secure or error free as information could be intercepted, corrupted, lost, arrive late or contain viruses. Dala does not accept liability for any errors or omissions in the context of this message which arise as a result of internet transmission. If we receive a request from you via email we will treat that as authority to reply by email.</p>
              <p>Please report any email abuse to: <a href="mailTo:info@dala.org">info@dala.org</a></p>
              <p>This email legal notice may be amended without notice.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EmailDisclaimer;