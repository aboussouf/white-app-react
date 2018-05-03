import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../asserts/css/style.scss';


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
          <li className="nav-item"><a className="nav-link" href="index.html"><img className="menu-icon" src={un} alt="menu icon"/><span className="menu-title">Mon Espace</span></a></li>
          <li className="nav-item"><a className="nav-link" href="pages/widgets.html"><img className="menu-icon" src={deux} alt="menu icon"/><span className="menu-title">Mon Profil</span></a></li>
          <li className="nav-item"><a className="nav-link" href="pages/ui-features/buttons.html"><img className="menu-icon" src={trois} alt="menu icon"/><span className="menu-title">Mon Agence</span></a></li>
          <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html"><img className="menu-icon" src={quatre} alt="menu icon"/><span className="menu-title">Ma Banque</span></a></li>
          <li className="nav-item"><a className="nav-link" href="pages/charts/chartjs.html"><img className="menu-icon" src={cinq} alt="menu icon"/><span className="menu-title">Coffre-fort</span></a></li>
          <li className="nav-item purchase-button"><a className="nav-link" href="https://www.bootstrapdash.com/product/star-admin-pro/" target="_blank">Parler à un expert</a></li>
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
  label: PropTypes.string,
  progressbar: PropTypes.string,
  classNameI: PropTypes.string,
};

export default Nav;
