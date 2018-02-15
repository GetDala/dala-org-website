import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';

// styles
import './CallToAction.css';

var scroller = Scroll.animateScroll;
var Link = Scroll.Link;

class CallToAction extends Component {
  render() {
    const { variation, onClick, destination, helperClasses, label } = this.props;

    switch(variation) {
      case 'anchor':
        return (
          <a href={this.props.destination} className={["call-to-action-btn", this.props.helperClasses].join(' ')} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
        break;
      case 'button':
        return (
          <button className={["call-to-action-btn", this.props.helperClasses].join(' ')} onClick={() => {onClick();} }>
            {label}
          </button>
        );
        break;
      case 'scroll':
        return (
          <Link className={['call-to-action-btn', helperClasses].join(' ')} to={destination} smooth>
            {label}
          </Link>
        );
        break;
    }
  }
}

CallToAction.propTypes = {
  variation: PropTypes.oneOf([
    'anchor',
    'button',
    'scroll'
  ]).isRequired,
  onClick: PropTypes.func,
  destination: PropTypes.string,
  helperClasses: PropTypes.array,
  label: PropTypes.string
};

export default CallToAction;
