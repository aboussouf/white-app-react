import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

const ConfirmationDialog = ({ open, body, handleCancel, handleValidate }) => {
  const actions = [
    <FlatButton
      label="Annuler"
      primary
      onClick={handleCancel}
    />,
    <FlatButton
      label="Valider"
      primary
      onClick={handleValidate}
    />,
  ];

  return (
    <Dialog
      title="Merci de confirmer votre action"
      actions={actions}
      open={open}
      modal
    >
      {body}
    </Dialog>
  );
};

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleValidate: PropTypes.func.isRequired,
};

export default ConfirmationDialog;
