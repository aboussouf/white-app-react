import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      isValid: true,
    };
  }

  onChange(event) {
    const regex = new RegExp(this.props.pattern);
    const valid = regex.test(event.target.value);
    this.setState({ isValid: valid });
    if (valid) {
      this.props.inputChange(event.target.value, this.props.storeKey);
    }
  }

  render() {
    return (
      <div>
        {this.props.icon ?
          <img src={this.props.icon} alt="" className="icon" />
          : null
        }
        <TextField
          name={this.props.name}
          type={this.props.type}
          floatingLabelText={this.props.label}
          defaultValue={this.props.value}
          errorText={this.state.isValid ? null : this.props.error}
          onChange={this.onChange}
          disabled={this.props.disabled}
          className={this.props.className}
        />
      </div>
    );
  }
}

Input.propTypes = {
  storeKey: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  inputChange: PropTypes.func,
};

Input.defaultProps = {
  disabled: false,
  pattern: '^[a-zA-Z0-9_]*$',
};

export default Input;
