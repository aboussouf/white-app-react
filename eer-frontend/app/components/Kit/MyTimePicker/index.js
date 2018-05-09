import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { white, red300, red50, black } from 'material-ui/styles/colors';
import TimePicker from 'material-ui/TimePicker';
import styles from './index.css';
const muiTheme = getMuiTheme({
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
    textColor: white,
    hintColor: white,

  },
});
/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const MyTimePicker = () => (
  <div className="myTimePicker">
    <MuiThemeProvider muiTheme={muiTheme} >
      <TimePicker
        id="issamTimer"
        format="24hr"
        hintText="Heure"
        hintStyle={{ marginLeft: '30%', textAlign: 'center' }}
      />
    </MuiThemeProvider>
  </div>
);

export default MyTimePicker;
