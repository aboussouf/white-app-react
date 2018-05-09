import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Toggle from 'material-ui/Toggle';
import recapImg from '../../../images/curriculum.svg';
import geo from '../../../images/geo.png';
import fleshRight from '../../../images/flesh-right.png';
import fleshLeft from '../../../images/flesh-left.png';
import Navbar from '../../../containers/Kit/Navbar';
import './index.css';

class Recap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boisson: 'CAFE',
      cmdp: false,
      Toggled: 'ON',
      disable: true,
    };
  }


  validStep() {
    this.props.onValidateStep(this.props.prospect);
  }

  handlePrevStep() {
    this.props.onPrevStep();
  }

  handleBoissonChange = (event) => {
    this.props.prospect.boisson = event.target.value;
  };

  handleModifierInfo() {
    this.props.onChangeInfo(0);
  }

  handleCmdpToggle = () => {
    this.setState({ cmdp: !this.state.cmdp });
    this.setState({ disable: this.state.cmdp });

    this.props.prospect.cmdp = !this.state.cmdp === true ? 1 : 0;
  }

  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-3 espace-top">
            <div className="card">
              <img className="card-img-top-center" src={recapImg} alt="" />
              <div className="card-body">
                <h1 className="card-title title-recap"><b>Vos informations</b></h1>
                <p className="card-text">
                  <p><h5 className="title-recap2">Type de Compte :</h5>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.prospect.type.value}</p>
                  <p><h5 className="title-recap2">Nom :</h5>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.prospect.lastName.value}</p>
                  <p><h5 className="title-recap2">Pr&eacute;nom :</h5>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.prospect.firstName.value}</p>
                  <p><h5 className="title-recap2">T&eacute;l :</h5>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.prospect.tel.value}</p>
                  <p><h5 className="title-recap2">E-mail :</h5>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.prospect.mail.value}</p>
                </p>
                <RaisedButton
                  label="Modifier"
                  primary
                  onClick={this.handleModifierInfo.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-2">
          </div>
          <div className="col-lg-6">
            <div className="label1-step1">RENCONTRONS-NOUS</div>
            <div className="label2-step1">Choisissez votre agence et votre rendez-vous</div>
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-lg-1">
                <div className="geo-img">
                  <img src={geo} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="agence-name">
                  MON AGENCE
                </div>
                <div className="agence-name">
                  {this.props.prospect.agence.name}
                </div>
                <div className="agence-adresse">
                  {this.props.prospect.agence.adresse}
                </div>
              </div>
            </div>
            <br /><br />
            <div className="row">
              <div className="col-lg-2">
                <p>Vous &ecirc;tes plut&ocirc;t</p>
              </div>
              <div className="col-lg-10">
                <RadioButtonGroup name="boisson" className="form-check form-check-inline" defaultSelected={this.props.prospect.boisson} onChange={this.handleBoissonChange}>
                  <RadioButton
                    className="radio-border"
                    value="THE"
                    label="THE"
                  />
                  <RadioButton
                    className="radio-border"
                    value="CAFE"
                    label="CAFE"
                  />
                </RadioButtonGroup>
              </div>

            </div>
            <div className="row">
              <Toggle
                labelPosition="right"
                className="form-check form-check-inline"
                onToggle={this.handleCmdpToggle}
              />
              J&apos;accepte&nbsp;<a href="https://www.sgmaroc.com/conditions-generales-dutilisation/" target="_blank">  les conditions d&apos;utilisation</a>
            </div>
          </div>
        </div>
        <Navbar
          step={this.props.step.stepIndex}
          nextLabel="Prendre Rendez-vous"
          nextIcone={fleshRight}
          backIcone={fleshLeft}
        />
      </div>

    );
  }
}

Recap.propTypes = {
  onValidateStep: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  prospect: PropTypes.object.isRequired,
  step: PropTypes.object,
};

export default Recap;
