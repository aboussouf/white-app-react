import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../../components/Card'
import * as user from '../../../asserts/images/user.png'
import * as agence from '../../../asserts/images/agence.png'
import * as catalogue from '../../../asserts/images/catalogue.png'
import * as coffre from '../../../asserts/images/coffre.png'
import '../../../asserts/css/style.scss'

class Dashboard extends React.Component {
  componentWillMount () {
    this.props.getProspect('string')
    console.log("alert",this.props)
  }

  render () {
    return (
      <div className='container-scroller'>
        <div className='container-fluid page-body-wrapper'>
          <div className='main-panel'>
            <div className='content-wrapper'>
              <div className='row purchace-popup'>
                <div className='col-12'>
                  <span className='d-flex alifn-items-center'>
                    <h2> MON ESPACE </h2>
                  </span>
                  <span className='float-left'>
                    <h5> Bienvenue dans votre espace Société Générale Maroc </h5>
                  </span>
                </div>
              </div>
              <div className='row'>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-6 grid-margin stretch-card'>
                  <div className='card card-statistics'>
                    <Card
                      icon={user}
                      titre={this.props.prospect && this.props.prospect.firstName}
                      soustitre='Votre profil est complet à 25%'
                      label='Compléter mon profil'
                      classNameI='mdi mdi-alert-octagon mr-1'
                      progressbar='true'
                    />

                  </div>
                </div>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-6 grid-margin stretch-card'>
                  <div className='card card-statistics'>
                    <Card
                      icon={agence}
                      titre='Mon Agence'
                      soustitre='Préparez vos rendez-vous'
                      label='Voir mes rendez-vous'
                      classNameI='mdi mdi-bookmark-outline mr-1'
                    />

                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-6 grid-margin stretch-card'>
                  <div className='card card-statistics'>
                    <Card
                      icon={catalogue}
                      titre='Ma Banque'
                      soustitre='Des offres qui vous ressemblent'
                      label='Parcourir le catalogue'
                      classNameI='mdi mdi-calendar mr-1'
                    />
                  </div>
                </div>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-6 grid-margin stretch-card'>
                  <div className='card card-statistics'>
                    <Card
                      icon={coffre}
                      titre='Mon Coffre-Fort'
                      soustitre='Vos documents importants'
                      label='Voir mes documents'
                      classNameI='mdi mdi-reload mr-1'
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getProspect: PropTypes.func.isRequired,
  prospect: PropTypes.object,
}

export default Dashboard
