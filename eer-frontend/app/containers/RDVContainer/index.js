import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MapContainer from './Geoloc/MapContainer';
import { styles } from './index.css';
import stepTwo from '../../images/step2.png';
import geo from '../../images/geo.png';
import rdv from '../../images/rdv.png';
import time from '../../images/time.png';
import fleshRight from '../../images/flesh-right.png';
import fleshLeft from '../../images/flesh-left.png';
import city from '../../images/city.png';
import Navbar from '../Kit/Navbar';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Input } from 'reactstrap';

class RDVContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAgence: undefined,
      citiesDefaultValue: 1,
      ville: '',
      quartier: '',
      agence: '',
    };
    this.props.getCityAgences(1);
  }


  /**
   * send date to parent component
   */
  validStep() {
    console.log('validStep');
    this.props.onValidateStep(this.state);
  }

  render() {
    const rdvInfo = this.props.rdvInfos;
    const minDate = new Date();
    const maxDate = new Date();
    minDate.setHours(0, 0, 0, 0);
    maxDate.setMonth(maxDate.getMonth() + 1);
    maxDate.setHours(0, 0, 0, 0);
    return (
      <div className="container-fluid body">
        <div className="row">
          <div className="col-lg-6">
            <MapContainer
              ref="map"
              google={this.props.google}
              agences={this.props.agences}
              city={this.props.cities.find((elem) => elem.idVille === this.state.citiesDefaultValue)}
            >
            </MapContainer>
          </div>
          <div className="col-lg-6">
            <div className="label1-step1">RENCONTRONS-NOUS</div>
            <div className="label2-step1">Choisissez votre agence et votre rendez-vous                       </div>

            <br />
            <br />
            <br />
            <Row><Col sm="3">Votre Ville</Col><Col sm="2">
              <SelectField
                floatingLabelText="Ville"
                value={this.state.citiesDefaultValue}
                onChange={this.handleCitiesChange}
                maxHeight={400}
                className="align-list"
              >
                {this.props.cities && this.props.cities.map((cit) => <MenuItem value={cit.idVille} key={`city_${cit.idVille}`} primaryText={cit.libelle} />
                )}
              </SelectField>
            </Col></Row>
            {this.props.prospect.agence.name && this.props.prospect.agence.name !== '' ?
              <div className="mon-agence">

                <div className="agence-name">
                  MON AGENCE
                </div>
                <div className="agence-name">
                  {this.props.prospect.agence.name}
                </div>
                <div className="agence-adresse">
                  {this.props.prospect.agence.adresse}
                </div>
                <div className="geo-img">
                  <img src={geo} alt="" />
                </div>
              </div>
              :
              null
            }
          </div>


          <Navbar
            step={this.props.step.stepIndex}
            nextLabel="Prendre Rendez-vous"
            nextIcone={fleshRight}
            backIcone={fleshLeft}
          />
        </div>

      </div>

    );
  }
}

RDVContainer.propTypes = {
  cities: PropTypes.array,
  agences: PropTypes.array.isRequired,
  getCityAgences: PropTypes.func.isRequired,
  prospect: PropTypes.object.isRequired,
  rdvInfosChange: PropTypes.func.isRequired,
  rdvInfos: PropTypes.object.isRequired,
  step: PropTypes.object,
};


export default RDVContainer;
