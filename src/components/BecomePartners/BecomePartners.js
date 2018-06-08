import React, { Component } from 'react';
// styles
import './BecomePartners.css';

// images

// components
import ReactGA from 'react-ga';
import CallToAction from '../CallToAction/CallToAction';

class BecomePartners extends Component {

  render() {
    return (
      <section id="BecomePartners" name="pageBecomePartners">
       <div className="container">
         <div className="columns is-desktop">
           <div className="column partners-content has-text-centered is-flex-desktop">
             <h1>Interested in Becoming<br />a Dala Partner?</h1>
             <p>Get in touch with us today at info@dala.org!</p>
             <div className="call-to-action-wrapper">
               {!this.props.legalSection ? (
                 <CallToAction
                   variation={'mail'}
                   destination={'info@dala.org'}
                   label={'Contact Us'}
                   onClick={() => { ReactGA.event({
                     category: 'Contact Us Button',
                     action: 'launches email program'
                   }); }}
                 />
               ) : (
                 <CallToAction
                   variation={'mail'}
                   destination={'info@dala.org'}
                   label={'Contact Us'}
                   onClick={() => { ReactGA.event({
                     category: 'Contact Us Button - Legal Section',
                     action: 'launches email program'
                   }); }}
                 />
               )}
             </div>
           </div>
         </div>
       </div>
      </section>
    );
  }
}

export default BecomePartners;