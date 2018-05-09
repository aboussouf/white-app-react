import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Stepper } from 'material-ui/Stepper';
import ProspectInfo from 'components/Routes/ProspectInfo';
import RDVContainer from 'containers/RDVContainer';
import { setProspect, saveProspect } from '../../store/actions/Prospect';
import { getAgencysByCitie } from '../../store/actions/Geolocs';
import ChoseRdv from '../../components/Routes/ChoseRdv';
import Recap from '../../components/Routes/Recap';
import { makeSelectProspect } from '../../store/selectors/Prospect';
import { makeSelectStep } from '../../store/selectors/Steps';
import { makeSelectCitiesList } from '../../store/selectors/Geolocs';
import { goToStep, goNext, goBack } from '../../store/actions/Steps';
import FinRdv from '../../components/Routes/FinRdv';
export class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identityFormValues: {
        cmdp: true,
        sexe: null,
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        email: '',
        tele: '',
        part: true,
        prof: false,
      },
      selectedProductId: null,
      stepIndex: 0,
      rdvInformations: {
        selectedCity: null,
        selectedAgence: null,
        selectedDate: null,
        selectedTime: '',
      },
      nextProps: {
        selectedCity: null,
        selectedAgence: null,
        selectedDate: null,
        selectedTime: '',
      },
    }
  }
  componentWillMount() {}

  componentWillReceiveProps = (nextProps) => {
    if (nextProps && nextProps.selectedCity) {
      this.rdvInfosChange('selectedCity', nextProps.selectedCity);
    }
  }
  onEventValFieldChange = (event, value) => {
    this.setState({
      ...this.state,
      identityFormValues: {
        ...this.state.identityFormValues,
        [event.target.name]: value,
      },
    });
  }

  /**
   * dispatch action to put info prospect to store
   * @param {*} prospect
   */
  validStepInfoProspect(prospect) {
    console.log('validStepInfoProspect prospect', prospect);
    this.handleNextStep();
  }
  /**
   * dispatch action to put date && hour rdv to store
   * @param {*} prospect
   */
  valideStepChoseRdv(rdvInfo) {
    this.props.validStepOneStore({
      idProspect: 0,
      firstName: this.props.prospect.firstName,
      lastName: this.props.prospect.lastName,
      tele: this.props.prospect.tele,
      email: this.props.prospect.email,
      typeProspect: this.props.prospect.particularite,
      boisson: 'CAFE',
      dateRdv: rdvInfo.date,
      heureRdv: rdvInfo.hour,
      cmdp: 1,
      sexe: 1,
      agence: this.props.prospect.agence,
    });

    this.handleNextStep();
  }
  valideStepRDVContainer() {
    this.handleNextStep();
  }
  /**
   * dispatch action to put date && hour rdv to store
   * @param {*} prospect
   */
  valideStepRecap(prospect) {
  //  this.props.persistProspect(prospect);
    this.handleNextStep();
  }
  /**
   * return to step 1
  */
  goToStep(stepIndex) {
    this.props.goToAction(3);
    this.setState({ stepIndex });
  }

  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0  : return (<ProspectInfo
        onValidateStep={this.validStepInfoProspect.bind(this)}
        prospect={this.props.prospect}
        step={this.props.step}
      />);
      case 1: return (<RDVContainer
        cities={this.props.geoloc.cities.result}
        agences={this.props.geoloc.agences.result}
        prospect={this.props.prospect}
        rdvInfosChange={this.rdvInfosChange}
        rdvInfos={this.state.rdvInformations}
        getCityAgences={this.props.getCityAgences}
        step={this.props.step}
        onValidateStep={this.valideStepRDVContainer.bind(this)}
      />);

      case 2: return (<ChoseRdv
        onValidateStep={this.valideStepChoseRdv.bind(this)}
        onPrevStep={this.handlePrevStep.bind(this)}
        prospect={this.props.prospect}
        step={this.props.step}
      />);
      case 3: return (<Recap
        onValidateStep={this.valideStepRecap.bind(this)}
        onPrevStep={this.handlePrevStep.bind(this)}
        prospect={this.props.prospect}
        onChangeInfo={this.goToStep.bind(this)}
        step={this.props.step}
      />);
      case 4: return (<FinRdv
        prospect={this.props.prospect}
      />);

      default: return '';
    }
  }
  handleNextStep = () => {
    const { stepIndex } = this.state;
    if (stepIndex < this.lastStepIndex) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
    this.props.goToNext(stepIndex);
  }
  handlePrevStep = () => {
    const { stepIndex } = this.state;

    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
    this.props.goToBack(stepIndex);
  }


  rdvInfosChange = (field, value) => {
    this.setState({
      ...this.state,
      rdvInformations: {
        ...this.state.rdvInformations,
        [field]: value,
      },
    });
  }
  lastStepIndex = 4;

  render() {
    return (
      <div>
        <Stepper activeStep={this.props.step.stepIndex}>
          {this.getStepContent(this.props.step.stepIndex)}
        </Stepper>
      </div>
    );
  }
}

SignUpContainer.propTypes = {
  getCityAgences: PropTypes.func.isRequired,
  geoloc: PropTypes.array.isRequired,
  prospect: PropTypes.object,
  step: PropTypes.object,
};

const mapStateToProps = (state) => ({
  prospect: makeSelectProspect()(state),
  step: makeSelectStep()(state),
  geoloc: makeSelectCitiesList()(state),
});

const mapDispatchToProps = (dispath) => ({
  validStepOneStore: (prospect) => { dispath(setProspect(prospect)); },
  persistProspect: (prospect) => { dispath(saveProspect(prospect)); },
  goToAction: (location) => { dispath(goToStep(location)); },
  goToNext: (location) => { dispath(goNext(location)); },
  goToBack: (location) => { dispath(goBack(location)); },
  getCityAgences: (payload) => { dispath(getAgencysByCitie(payload)); },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
