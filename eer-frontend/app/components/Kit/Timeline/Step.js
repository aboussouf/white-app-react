import React from 'react';
import PropTypes from 'prop-types';

class Step extends React.Component {
  render() {
    return (
      <div className="margin-top-step margin-right-step-2 margin-left-step d-flex">
        <div className={`card card-step${this.props.active ? '--active' : ''}`}>
          <span className="card-span-step">{this.props.step + 1}</span>
        </div>
        <div className={`margin-top-step-label${this.props.active ? '--active' : ''}`} >
          <span className="label-step">{this.props.title}</span>
        </div>
      </div>
    );
  }
}

Step.propTypes = {
  step: PropTypes.number,
  title: PropTypes.string,
  active: PropTypes.bool,
};

Step.defaultProps = {
  active: false,
};
export default Step;
