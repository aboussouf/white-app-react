import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Timeline from 'components/Kit/Timeline/index';
import { makeSelectStep } from '../../store/selectors/Steps';

class MainPage extends React.Component {
  state = {
    isDrawerOpen: false,
  }
  onRequestChange = (val) => {
    this.setState({ isDrawerOpen: val });
  }
  onHeaderTitleClick = () => {
    (this.props.history).push('/');
  }
  handleHeaderLeftIconClick = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  }
  render() {
    return (
      <div>
        <div className="row">
          <Timeline
            steps={this.props.step.mySteps}
            current={this.props.step.stepIndex}
          />
        </div>
        {this.props.children}
      </div>
    );
  }
}

MainPage.propTypes = {
  history: PropTypes.object.isRequired,
  step: PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
};
const mapStateToProps = (state) => ({
  step: makeSelectStep()(state),
});
export default withRouter(connect(mapStateToProps, null)(MainPage));
