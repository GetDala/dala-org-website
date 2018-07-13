import React, { Component } from "react";
import './Redirect.css';

import DalaWordmark from '../Hero/images/DalaWordmark/DalaWordmark';
import DalaHexagon from '../DalaEcosystem/images/EcosystemDalaLogo.svg';

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    switch(this.state.match.path) {
      case '/terms':
        window.location = 'https://s3-eu-west-1.amazonaws.com/dalaorg-website-bucket/Dala.org+Website+EmailDisclaimer+-+5+June+2018+.pdf';
        break;
      case '/privacypolicy':
        window.location = 'https://s3-eu-west-1.amazonaws.com/dalaorg-website-bucket/Dala.org+Privacy+EmailDisclaimer+-+5+June+2018+.pdf';
        break;
    }
  }
  render(){
    return (
      <section id="home" className="dala-hero hero is-fullheight">
        <div className="redirecting-content">
          <div className="dala-hex"><img src={DalaHexagon} alt="" /></div>
          <h1>Redirecting...</h1>
        </div>
      </section>
    );
  }
}

export default Redirect;