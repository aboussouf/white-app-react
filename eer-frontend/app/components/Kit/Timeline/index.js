
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../images/logo.png';
import Step from './Step';
import './index.css';


function getActiveStep(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
    case 3:
    case 4:
      return 2;
    default: return 0;
  }
}
class Timeline extends React.Component {
  render() {
    const steps = this.props.steps;
    return (
      <div id="navBar" className="bg-color-red d-flex col-lg-12">
        <div className="col-lg-2"><img src={logo} alt="" /></div>
        {
          steps.map((s) => <Step step={s.step} title={s.title} active={s.step === getActiveStep(this.props.current)} />)
        }
      </div>
    );
  }
}

Timeline.propTypes = {
  steps: PropTypes.array.isRequired,
  current: PropTypes.number,
};

export default Timeline;
