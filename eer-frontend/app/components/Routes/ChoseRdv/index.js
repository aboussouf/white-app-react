import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './index.css';
import TimePicker from 'material-ui/TimePicker/TimePicker';
import Calendar from 'material-ui/DatePicker/Calendar';
import geo from '../../../images/geo.png';
import rdv from '../../../images/rdv.png';
import time from '../../../images/time.png';
import fleshRight from '../../../images/flesh-right.png';
import fleshLeft from '../../../images/flesh-left.png';
import stepTwo from '../../../images/step2.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from '../../../containers/Kit/Navbar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { white, black, red500, red600 } from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  datePicker: {
    selectColor: white,
    textColor: white,
    calendarTextColor: '#e2001a',
    selectTextColor: red500,
    calendarYearBackgroundColor: '#e2001a',
    headerColor: '#e2001a',
    width: '100%',
    calendarBackgroundColo: '#e2001a',
  },
  timePicker: {
    color: white,
    textColor: white,
    accentColor: black,
    headerColor: '#f61900',
    selectColor: white,
    selectTextColor: '#f61900',
  },
  flatButton: {
    color: white,
    textColor: '#f61900',
    primaryTextColor: '#f61900',
  },
  textField: {
    textColor: '#ffffff',
    hintColor: '#ffffff',

  },
});

class ChoseRdv extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      DateTimeFormat: global.Intl.DateTimeFormat,
      days: '',
      month: '',
      year: '',
      hour: '',
      date: '',
    };
  }

  /**
   * handle on change calander
   */
  handleChangeDate = (event, date) => {
    date = new Date(date.getFullYear(),date.getMonth()+1,date.getDate());
    const dateRdv = `${date.getFullYear()}-${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
    const dateParse = new Date(dateRdv);

    this.setState({ days: dateParse.toLocaleString('fr', { weekday: 'long' }) });
    this.setState({ month: `${date.getDate()} ${dateParse.toLocaleString('fr', { month: 'short' })}` });
    this.setState({ year: date.getFullYear() });
    this.setState({ date: dateRdv });
  };

  /**
   * send date to parent component
   */
  validStep() {
    this.props.onValidateStep(this.state);
  }
  prevStep() {
    this.props.onPrevStep();
  }

  handleChangeTime = (event, date) => {
    const time = `${date.getHours()}H${date.getMinutes()}`;
    this.setState({ hour: time });
  };
  disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-5">
            <div id="eerCalander" className="cls">
              <MuiThemeProvider muiTheme={muiTheme} >

                <Calendar
                  firstDayOfWeek={1}
                  id="issamCalander"
                  onTouchTapDay={(event, date) => { console.log(date); }}
                  className="bg-calander"
                  format="MMM DD, YYYY hh:mm A"
                  firstDayOfWeek={1}
                  onClickDay={this.handleChangeDate.bind(this)}
                  shouldDisableDate={this.disableWeekends}
                  DateTimeFormat={Intl.DateTimeFormat}
                  locale="fr"
                >
                </Calendar>

              </MuiThemeProvider>
              <div className="myTimePicker">
                <MuiThemeProvider muiTheme={muiTheme} >
                  <TimePicker
                    id="issamTimer"
                    format="24hr"
                    hintText="Heure du Rendez-Vous"
                    hintStyle={{ marginLeft: '30%', textAlign: 'center' }}
                    value={this.state.value12}
                    onChange={this.handleChangeTime}
                    cancelLabel="Annuler"
                    okLabel="OK"
                    autoOk={false}
                  />
                </MuiThemeProvider>
              </div>

            </div>
          </div>
          <div className="col-lg-6">
            <div className="label1-step1">RENCONTRONS-NOUS</div>
            <div className="label2-step1">Choisissez votre agence et votre rendez-vous</div>

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
                <img src={geo} />
              </div>
            </div>
            <div className="mon-agence">
              <div className="agence-name">
              </div>
              <div className="agence-adresse">
                <p>{this.state.days}</p>
                <p>{this.state.month}</p>
                <p>{this.state.year}</p>
              </div>
              <div className="agence-adresse">
              </div>
              <div className="rdv-img">
                <img src={rdv} />
              </div>
            </div>
            <div className="mon-agence">
              <div className="agence-name">
                {this.state.hour}
              </div>
              <div className="time-img">
                <img src={time} alt="" />
              </div>
            </div>
            <br></br>
            <br></br>

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


/** ********************
<div className="row">
        <div className="col-lg-12 fixed-bottom title-Recap">
          <div className="float-left">
            <img src={fleshLeft} />
            <FlatButton label="RETOUR"
              primary={true}
              onClick={this.prevStep.bind(this)}
            />
          </div>
          <div className="float-right ">
            <FlatButton label="Valider Ma Demande"
              disabled={this.state.disable}
              primary={true}
              onClick={this.validStep.bind(this)}
            />

            <img src={fleshRight} />
          </div>
        </div>


      <div style={styles.displayFlex}>
            <div style={styles.marginLeft}>
              <div>
                <Calendar id="dateRdv"
                      format='MMM DD, YYYY hh:mm A'
                      firstDayOfWeek={1}
                      onClickDay={this.handleChangeDate.bind(this)}
                      shouldDisableDate={this.disableWeekends}

                       >
                </Calendar>
              </div>
              <div style={styles.container.timePicker}>
              <TimePicker
                      format="24hr"
                      hintText="l'heure du rendez-vous"
                      id="timeRDV"
                      value={this.state.value12}
                      onChange={this.handleChangeTime}
                    />
              </div>
            </div>

        <div style={styles.marginLeftLabel}>
          <div> RENCONTRONS-NOUS</div>
          <div> CHOISISSEZ VOTRE AGENCE ET VOTRE RENDEZ-VOUS</div>
            <div id="monAgence">
                    <p>Mon Agence</p>
                    <p>{this.props.prospect.agence.name}</p>
                    <p>{this.props.prospect.agence.adresse}</p>
            </div>
            <div id="dateRDV">
                  <p>{this.state.days}</p>
                  <p>{this.state.month}</p>
                  <p>{this.state.year}</p>
            </div>
            <div id="dateRDV">
                  <p> {this.state.hour}</p>
            </div>
            <FlatButton label="RETOUR"
                          primary={true}
                          onClick={this.prevStep.bind(this)}
                          />
        <FlatButton label="PRENDRE RENDEZ-VOUS"
                          primary={true}
                          onClick={this.validStep.bind(this)}
                          />

        </div>

      </div>

    );
  }

}*/

ChoseRdv.propTypes = {
  onValidateStep: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  prospect: PropTypes.object.isRequired,
  step: PropTypes.object,
};

export default ChoseRdv;
