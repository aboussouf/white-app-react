import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../asserts/css/style.scss';

class MenuItem extends Component {
  render() {
    return (
      <li className={`nav-item ${this.props.className}`}>

      <a className="nav-link" href={this.props.href} target="_blank">
      { this.props.icon ?
        <img src={this.props.icon} alt="" />
        : null
      }
      {this.props.label}</a>

      </li>
    );
  }
}

MenuItem.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  classNameA: PropTypes.string,
  icon: PropTypes.string,
};

MenuItem.defaultProps = {
  className: '',
};

export default MenuItem;
