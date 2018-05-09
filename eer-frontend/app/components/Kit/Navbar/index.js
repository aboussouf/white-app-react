import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Inputs/Button';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  goBack() {
    this.props.goToBack(this.props.step);
  }
  goNext() {
    this.props.goToNext(this.props.step);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 fixed-bottom">
          { this.props.displayBack ?
            <Button
              label="RETOUR"
              action={this.goBack}
              className={this.props.backStyle}
              icone={this.props.backIcone}
            />
            :
            null
          }
          <Button
            label={this.props.nextLabel}
            action={this.goNext}
            className={this.props.nextStyle}
            icone={this.props.nextIcone}
            disabled={this.props.disableNext}
          />
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  step: PropTypes.number,
  displayBack: PropTypes.bool,
  backIcone: PropTypes.string,
  nextIcone: PropTypes.string,
  nextLabel: PropTypes.string,
  disableNext: PropTypes.bool,
  goToBack: PropTypes.func,
  goToNext: PropTypes.func,
  backStyle: PropTypes.string,
  nextStyle: PropTypes.string,
};

Navbar.defaultProps = {
  disabled: false,
  displayBack: true,
  nextStyle: 'float-righ',
  backStyle: 'float-left',
};

export default Navbar;
