import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/index.css';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.isChecked = this.isChecked.bind(this);
  }

  componentWillMount() {
    if (!this.props.value) {
      const defaultItem = this.props.items.find((item) => item.checked);
      if ((defaultItem || this.props.items.length > 0) && !this.props.multiple) {
        const value = defaultItem ? defaultItem.value : this.props.items[0].value;
        this.props.inputChange(value, this.props.storeKey);
      }
    }
  }

  onChange(event) {
    let value;
    if (this.props.multiple) {
      value = this.props.items
        .map((item) => (this.refs[`item:${item.label}`].checked ? item.value : null))
        .filter((v) => v != null);
    } else {
      value = event.target.value;
    }
    return this.props.inputChange(value, this.props.storeKey);
  }

  isChecked(item) {
    if (this.props.multiple) {
      return this.props.value && this.props.value.find((value) => value === item.value);
    }
    return this.props.value === item.value;
  }

  render() {
    return (
      <div className="md-form">
        <div className="form1">
          {this.props.children}
        </div>
        <div className="btn-group" data-toggle="buttons">
          {this.props.items.map((item) => (
            <label className={`btn btn-primary${this.isChecked(item) ? ' button--active' : ''}`}>
              <input
                ref={`item:${item.label}`}
                type={this.props.multiple ? 'checkbox' : 'radio'}
                disabled={!!item.isDisabled || this.props.disabled}
                checked={this.isChecked(item)}
                value={item.value}
                onChange={this.onChange}
                style={{ display: 'none' }}
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>
    );
  }
}

Radio.propTypes = {
  inputChange: PropTypes.func,
  items: PropTypes.array.isRequired,
  storeKey: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  multiple: PropTypes.bool,
};

Radio.defaultProps = {
  disabled: false,
};

export default Radio;
