import React, { Component } from 'react';

// styles
import './CallToAction.css';

class CallToAction extends Component {
  render() {
    return (
      <a href={this.props.destination} onClick={() => { this.props.onClick(); }} className={["call-to-action-btn", this.props.helperClasses].join(' ')}>
        {this.props.label}
      </a>
    );
  }
}

export default CallToAction;
