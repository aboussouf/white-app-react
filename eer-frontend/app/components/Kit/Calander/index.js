/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */
import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'material-ui/DatePicker/Calendar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { cyan500, red100, black, red300, blueA400, red50, white, red900, red800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import styles from './index.css';
import { red600 } from 'material-ui/styles/colors';
import { red500 } from 'material-ui/styles/colors';
import MyTimePicker from '../MyTimePicker';


const muiTheme = getMuiTheme({
  datePicker: {
    selectColor: white,
    textColor: white,
    calendarTextColor: white,
    selectTextColor: red500,
    calendarYearBackgroundColor: white,
    headerColor: '#e2001a',
    width: '100%',
  },
});
function Calander(props) {
  // Render an anchor tag

  return (
    <div id="eerCalander" className="cls">
      <MuiThemeProvider muiTheme={muiTheme} >

        <Calendar
          firstDayOfWeek={1}
          id="issamCalander"
          onTouchTapDay={(event, date) => { console.log(date); }}
          className="bg-calander"
        >

        </Calendar>

      </MuiThemeProvider>
      <MyTimePicker />
    </div>
  );
}


export default Calander;
