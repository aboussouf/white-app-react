import React from 'react';
import PropTypes from 'prop-types';
import * as cv from '../../../images/curriculum.svg';
import * as constants from '../../../utils/constants';
import InputComponent from '../../../containers/Kit/Inputs/Input';
import Radio from '../../../containers/Kit/Inputs/Radio';
import Navbar from '../../../containers/Kit/Navbar';

const clientTypes = [
  { label: 'PARTICULIER', value: 'PARTICULIER', checked: true },
  { label: 'PROFESSIONEL', value: 'PROFESSIONEL' },
];
const requiredFields = [
  'prospect.lastName',
  'prospect.firstName',
  'prospect.mail',
  'prospect.tel',
];


class ProspectInfo extends React.Component {
  constructor(props) {
    super(props);
    this.validStep = this.validStep.bind(this);
  }

  /**
   * send date to parent component
   */
  validStep() {
    this.props.onValidateStep(this.state);
  }

  render() {
    return (

      <div className="container-fluid">
        <div className="labelContainer">

          <div className="label1-step1">FAISONS CONNAISSANCE</div>
          <div className="label2-step1">Quelques questions pour mieux vous connaître</div>
          <div className="display-flex mt-10">

            <Radio
              items={clientTypes}
              storeKey="prospect.type"
            >
             Type Client :
            </Radio>

          </div>
        </div>

        <div className="cv-container">
          <img src={cv} className="cv" alt="" />
        </div>

        <div className="form-container">
          <div className="form-width">
            <InputComponent
              name="lastName"
              label="Mon Nom"
              storeKey="prospect.lastName"
              error="Veuillez saisir un nom valide"
              pattern={constants.REGEX_PROSPECT_NAME}
            />

            <InputComponent
              name="firstName"
              label="Mon Prénom"
              storeKey="prospect.firstName"
              error="Veuillez saisir un prénom valide"
              pattern={constants.REGEX_PROSPECT_NAME}
            />

            <InputComponent
              storeKey="prospect.mail"
              name="email"
              label="Mon adresse email"
              error="Veuillez saisir un email valide"
              pattern={constants.REGEX_PROSPECT_EMAIL}
            />

            <InputComponent
              storeKey="prospect.tel"
              name="tele"
              label="Mon téléphone"
              error="Veuillez saisir un téléphone valide"
              pattern={constants.REGEX_PROSPECT_PHONE}
            />
          </div>

          <Navbar
            displayBack={false}
            step={this.props.step.stepIndex}
            nextLabel={this.props.step.stepIndex === 3 ? 'Modifier mes informations' : 'Choisir mon agence'}
            fields={requiredFields}
          />

        </div>
      </div>

    );
  }
}

ProspectInfo.propTypes = {
  onValidateStep: PropTypes.func.isRequired,
  step: PropTypes.object,
};

export default ProspectInfo;
