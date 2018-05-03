import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../asserts/css/style.scss';

class Button extends Component {
  render() {
    return (
      <li className={`nav-item ${this.props.className}`}>
      <a className="nav-link" href="https://www.bootstrapdash.com/product/star-admin-pro/" target="_blank">{this.props.label}</a>

        { this.props.icon ?
          <img src={this.props.icon} alt="" />
          : null
        }
      </li>
    );
  }
}

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
