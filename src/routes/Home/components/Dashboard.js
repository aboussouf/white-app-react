import React from 'react'
import PropTypes from 'prop-types'
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
import un from '../../../asserts/images/menu_icons/01.png'
import * as deux from '../../../asserts/images/menu_icons/02.png'
import * as trois from '../../../asserts/images/menu_icons/03.png'
import * as quatre from '../../../asserts/images/menu_icons/04.png'
import * as cinq from '../../../asserts/images/menu_icons/05.png'
import Nav from '../../../components/Nav'
import MenuItem from '../../../components/MenuItem'
import HorizontalNav from '../../../components/HorizontalNav'

const elementsMenu = [
  {href: "index.html", image: un , titre: '  Mon Espace'},
  {href: "pages/widgets.html", image: deux, titre: '  Mon Profil'},
  {href: "pages/ui-features/buttons.html", image: trois, titre: '  Mon Agence'},
  {href: "pages/forms/basic_elements.html", image: quatre, titre: '  Ma Banque'},
  {href: "pages/charts/chartjs.html", image: cinq, titre: '  Coffre-fort'},
];


export const Dashboard = () => (
  <div className="container-scroller">
    <HorizontalNav />
    <div className="container-fluid page-body-wrapper">
    <Nav icon = {face4} nom='Sara El Amrani' type='Particulier' options= {elementsMenu} />

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

Dashboard.propTypes = {
  elementsMenu: PropTypes.array,
};

export default Dashboard
