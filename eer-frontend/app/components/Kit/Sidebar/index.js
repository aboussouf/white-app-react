import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

const Sidebar = ({ open, secondary, onRequestChange }) => (
  <div>
    <Drawer open={open} openSecondary={secondary} docked={false} onRequestChange={onRequestChange}>
      <MenuItem>SGMA Bonjour!</MenuItem>
      <MenuItem>Made by CraftMen</MenuItem>
    </Drawer>
  </div>
);
Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  secondary: PropTypes.bool.isRequired,
  onRequestChange: PropTypes.func.isRequired,
};
export default Sidebar;
