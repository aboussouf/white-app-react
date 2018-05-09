import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const IpViewer = ({ ipAdress }) => <TextField floatingLabelText={'IP ADRESS'} value={ipAdress} disabled fullWidth />;

IpViewer.defaultProps = {
  ipAdress: '0.0.0.0',
};

IpViewer.propTypes = {
  ipAdress: PropTypes.string.isRequired,
};
export default IpViewer;
