import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

class Button extends Component {
  render() {
    return (
      <div className={`button-step2-confirmer  ${this.props.className}`}>
        <FlatButton
          label={this.props.label}
          primary={this.props.primary}
          onClick={this.props.action}
          disabled={this.props.disabled}
        />
        { this.props.icone ?
          <img src={this.props.icone} alt="" />
          : null
        }
      </div>
    );
  }
}

Button.propTypes = {
  icone: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  action: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  primary: true,
  className: '',
};

export default Button;
