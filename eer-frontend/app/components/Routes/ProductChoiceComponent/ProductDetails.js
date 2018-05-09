import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const styles = {
  productDetailsName: {
    fontWeight: 600,
  },
  productNameDesc: {
    fontSize: 25,
  },
  productDetailsDesc: {
    fontSize: 20,
  },
};

const ProductDetails = ({ name, description, neededFiles }) => (
  <Paper zDepth={1}>
    <Subheader style={styles.productNameDesc}>
      <span style={styles.productDetailsName}>{name}</span> : <span style={styles.productDetailsDesc}>{description}</span>
    </Subheader>
    <Divider />
    <Subheader>Pièces à fournir</Subheader>
    {neededFiles.map((neededFile) => <MenuItem key={`file_${Math.random()}`}>{neededFile}</MenuItem>)}
  </Paper>
);

ProductDetails.propTypes = {
  neededFiles: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductDetails;
