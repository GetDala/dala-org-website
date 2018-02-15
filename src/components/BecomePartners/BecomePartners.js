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
           <div className="column is-half-desktop partners-content has-text-centered is-flex-desktop">
             <h1>Interested in Becoming<br />a Dala Partner?</h1>
             <p>Get in touch with us today!</p>
           </div>
           <div className="column is-half-desktop partners-form">
             <div className="input-wrapper">
               <label>Name</label>
               <input type="text" />
             </div>
             <div className="input-wrapper">
               <label>Email</label>
               <input type="text" />
             </div>
             <div className="input-wrapper">
               <label>Industry</label>
               <input type="text" />
             </div>
             <div className="input-wrapper">
               <label>Message</label>
               <textarea rows={4}></textarea>
             </div>
             <div className="button-wrapper">
               <CallToAction variation="button" label="Submit" onClick={() => {}} />
             </div>
           </div>
         </div>
       </div>
      </section>
    );
  }
}

export default BecomePartners;