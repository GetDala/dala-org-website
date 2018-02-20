import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';

// styles
import './CallToAction.css';

var Link = Scroll.Link;

class CallToAction extends Component {
  render() {
    const { variation, onClick, destination, helperClasses, label } = this.props;
    let CTA = null;

    switch(variation) {
      case 'mail':
        CTA = <a
          href={'mailto:' + this.props.destination}
          className={["call-to-action-btn", this.props.helperClasses].join(' ')}
          rel="noopener noreferrer">
            {label}
          </a>
        ;
        break;
      case 'button':
        CTA = <button
          className={["call-to-action-btn", this.props.helperClasses].join(' ')}
          onClick={() => {onClick();} }>
            {label}
          </button>
        ;
        break;
      case 'scroll':
        CTA = <Link
          className={['call-to-action-btn', helperClasses].join(' ')}
          to={destination}
          smooth>
            {label}
          </Link>
        ;
        break;
      default:
      case 'anchor':
        CTA = <a
          href={this.props.destination}
          className={["call-to-action-btn", this.props.helperClasses].join(' ')}
          target="_blank"
          rel="noopener noreferrer">
            {label}
          </a>
        ;
        break;
    }

    return(CTA);
  }
}

CallToAction.propTypes = {
  variation: PropTypes.oneOf([
    'anchor',
    'button',
    'scroll',
    'mail'
  ]).isRequired,
  onClick: PropTypes.func,
  destination: PropTypes.string,
  helperClasses: PropTypes.array,
  label: PropTypes.string
};

export default CallToAction;
