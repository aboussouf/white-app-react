import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

const styles = {
  titleStyle: {
    cursor: 'pointer',
    backgroundColor: 'red',
  },
};

const Header = ({ title, leftIconClick, headerClick }) => (
  <AppBar
    title={title}
    style={styles.titleStyle}
    titleStyle={styles.titleStyle}
  />
);

Header.defaultProps = {
  title: 'toto',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,

  headerClick: PropTypes.func.isRequired,
};

export default Header;
