import React from 'react'
import Card from '../../../components/Card'
import styles from '../../../asserts/css/style.scss'
import * as user from '../../../asserts/images/user.png'
import * as agence from '../../../asserts/images/agence.png'
import * as catalogue from '../../../asserts/images/catalogue.png'
import * as coffre from '../../../asserts/images/coffre.png'
import * as logo from '../../../asserts/images/logo.png'
import * as face2 from '../../../asserts/images/faces/face4.jpg'
import * as face3 from '../../../asserts/images/faces/face4.jpg'
import * as face4 from '../../../asserts/images/faces/face4.jpg'
import * as un from '../../../asserts/images/menu_icons/01.png'
import * as deux from '../../../asserts/images/menu_icons/02.png'
import * as trois from '../../../asserts/images/menu_icons/03.png'
import * as quatre from '../../../asserts/images/menu_icons/04.png'
import * as cinq from '../../../asserts/images/menu_icons/05.png'

export const Dashboard = () => (
  <div className="container-scroller">
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
        <a className="navbar-brand brand-logo" href="index.html"><img src={logo} alt="logo"/></a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center">
        <ul className="navbar-nav navbar-nav-right header-links d-none d-md-flex">
          <li className="nav-item">
            <a href="/" className="nav-link"><i className="mdi mdi-image-filter"></i>Paramètres</a>
          </li>
          <li className="nav-item active">
            <a href="/" className="nav-link"><i className="mdi mdi-email-outline"></i>Déconnexion</a>
          </li>
          </ul>
        <ul className="navbar-nav navbar-nav-left">
          <li className="nav-item dropdown">
            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="/" data-toggle="dropdown">
              <i className="mdi mdi-bell-ring"></i>
              <span className="count">4</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <a className="dropdown-item">
                <p className="mb-0 font-weight-normal float-left">Vous avez 4 notifications
                </p>
                <span className="badge badge-pill badge-warning float-right">Voir</span>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="icon-info mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-medium">Erreur</h6>
                  <p className="font-weight-light small-text">
                    Just now
                  </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="icon-speech mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-medium">Settings</h6>
                  <p className="font-weight-light small-text">
                    Private message
                  </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="icon-envelope mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-medium">New user registration</h6>
                  <p className="font-weight-light small-text">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="/" data-toggle="dropdown" aria-expanded="false">
              <i className="mdi mdi-email-variant"></i>
              <span className="count">7</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
              <div className="dropdown-item">
                <p className="mb-0 font-weight-normal float-left">You have 7 unread mails
                </p>
                <span className="badge badge-info badge-pill float-right">View all</span>
              </div>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img src={face4} alt="image" className="profile-pic"/>
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-medium">David Grey
                    <span className="float-right font-weight-light small-text">1 Minutes ago</span>
                  </h6>
                  <p className="font-weight-light small-text">
                    The meeting is cancelled
                  </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img src={face2} alt="image" className="profile-pic"/>
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-medium">Tim Cook
                    <span className="float-right font-weight-light small-text">15 Minutes ago</span>
                  </h6>
                  <p className="font-weight-light small-text">
                    New product launch
                  </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img src={face3} alt="image" className="profile-pic"/>
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-medium"> Johnson
                    <span className="float-right font-weight-light small-text">18 Minutes ago</span>
                  </h6>
                  <p className="font-weight-light small-text">
                    Upcoming board meeting
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item d-none d-lg-block">
            <a className="nav-link" href="/">
              <img className="img-xs rounded-circle" src={face4} alt=""/>
            </a>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="icon-menu"></span>
        </button>
      </div>
    </nav>
    <div className="container-fluid page-body-wrapper">
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <div className="nav-link">
              <div className="profile-image"> <img src={face4} alt="image"/> <span className="online-status online"></span> </div>
              <div className="profile-name">
                <p className="name">Sara El Amrani</p>
                <p className="designation">Particulier</p>

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
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row purchace-popup">
            <div className="col-12">
              <span className="d-flex alifn-items-center">
                <h2> MON ESPACE </h2>
              </span>
                <span className="float-left">
              <h5> Bienvenue dans votre espace Société Générale Maroc </h5>
                </span>
            </div>
          </div>
          <div className="row">
             <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6 grid-margin stretch-card">
              <div className="card card-statistics">
                <Card icon={user} titre="Mon Profil" soustitre="Votre profil est complet à 25%" label="Compléter mon profil" classNameI="mdi mdi-alert-octagon mr-1" progressbar="true"/>

               </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6 grid-margin stretch-card">
              <div className="card card-statistics">
              <Card icon={agence} titre="Mon Agence" soustitre="Préparez vos rendez-vous" label="Voir mes rendez-vous" classNameI="mdi mdi-bookmark-outline mr-1"/>

              </div>
            </div>
          </div>
           <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6 grid-margin stretch-card">
              <div className="card card-statistics">
              <Card icon={catalogue} titre="Ma Banque" soustitre="Des offres qui vous ressemblent" label="Parcourir le catalogue" classNameI="mdi mdi-calendar mr-1"/>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6 grid-margin stretch-card">
              <div className="card card-statistics">
              <Card icon={coffre} titre="Mon Coffre-Fort" soustitre="Vos documents importants" label="Voir mes documents" classNameI="mdi mdi-reload mr-1"/>
              </div>
            </div>
          </div>


      </div>
    </div>
  </div>
  </div>
)

export default Dashboard
