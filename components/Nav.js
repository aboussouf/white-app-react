import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../asserts/css/style.scss';

import Button from './Button'


class Nav extends Component {
  constructor(props) {
  super(props);
  this.state = {

  };
}

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <div className="nav-link">
              <div className="profile-image"> <img src={this.props.icon} alt="image"/> <span className="online-status online"></span> </div>
              <div className="profile-name">
                <p className="name">{this.props.nom}</p>
                <p className="designation">{this.props.type}</p>

              </div>
            </div>
          </li>
          {this.props.options && this.props.options.map((o) => <li className="nav-item"><a className="nav-link" href={o.href}><img className="menu-icon" src={o.image} alt="menu icon"/><span className="menu-title">{o.titre}</span></a></li>
          )}
          <Button className="purchase-button" label="Parler à un expert"/>
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  nom: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array,
};

export default Nav;
