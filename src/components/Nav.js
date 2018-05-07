import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../asserts/css/style.scss';

import MenuItem from './MenuItem'


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
          {this.props.options && this.props.options.map((o) => <MenuItem className="nav-link" href={o.href} icon={o.image} label={o.titre}/>
          )}
          <MenuItem href="https://www.bootstrapdash.com/product/star-admin-pro/" className="purchase-button" classNameA="nav-link" label="Parler à un expert"/>
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
