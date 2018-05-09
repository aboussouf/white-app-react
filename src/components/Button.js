import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render () {
    return (
      <button name={this.props.name} type={this.props.type} value= {this.props.value} className={this.props.className} onClick={this.props.action} disabled={this.props.disabled} data-toggle={this.props.datatoggle}>
      { this.props.icon ?
        <img src={this.props.icon} alt="" />
        : null
      }
      { this.props.classNameSpan ?
      <span className={this.props.classNameSpan}></span>
        : null
      }
      {this.props.label}
      </button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  action: PropTypes.func,
  icon: PropTypes.string,
  datatoggle: PropTypes.string,
  classNameSpan: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  className: '',
}

export default Button
