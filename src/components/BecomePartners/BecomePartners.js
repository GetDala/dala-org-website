import React, { Component } from 'react';
// styles
import './BecomePartners.css';

// images

// components
import CallToAction from '../CallToAction/CallToAction';

class BecomePartners extends Component {

  render() {
    return (
      <section id="BecomePartners" name="pageBecomePartners">
       <div className="container">
         <div className="columns is-desktop">
           <div className="column partners-content has-text-centered is-flex-desktop">
             <h1>Interested in Becoming<br />a Dala Partner?</h1>
             <p>Get in touch with us today!</p>
             <div className="call-to-action-wrapper">
               <CallToAction
                 variation={'mail'}
                 destination={'info@getwala.com'}
                 label={'Contact Us'}
               />
             </div>
           </div>
         </div>
       </div>
      </section>
    );
  }
}

export default BecomePartners;