import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
         <div classNameD={this.props.classNameD} role="progressbar" aria-valuenow={this.props.valuenow} aria-valuemin={this.props.valuemin} aria-valuemax={this.props.valuemax}></div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  classNameD: PropTypes.string,
  valuenow : PropTypes.string,
  valuemin : PropTypes.string,
  valuemax : PropTypes.string,
};

ProgressBar.defaultProps = {
  className: '',
  classNameD: '',
};

export default ProgressBar;
