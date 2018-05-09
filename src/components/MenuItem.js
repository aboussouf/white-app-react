import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../asserts/css/style.scss'

class MenuItem extends Component {
  render () {
    return (
      <li className={`nav-item ${this.props.className}`} key={this.props.id} >

      <a className="nav-link" href={this.props.href} target="">
      { this.props.classNameFilter ?
        <i className={this.props.classNameFilter}></i>
        : null
      }
      { this.props.icon ?
        <img src={this.props.icon} className={this.props.classNameImg} />
        : null
      }
          {this.props.label}</a>

      </li>
    )
  }
}

MenuItem.propTypes = {
  id: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  classNameA: PropTypes.string,
  classNameFilter: PropTypes.string,
  classNameImg: PropTypes.string,
  icon: PropTypes.string,
  enabled: PropTypes.string,
}

MenuItem.defaultProps = {
  className: '',
}

export default MenuItem
