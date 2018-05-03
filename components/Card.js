import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../asserts/css/style.scss';


class Card extends Component {
  constructor(props) {
  super(props);
  this.state = {

  };
}

  render() {
    return (
      <div className="card-body">
                  <div className="clearfix">
                    <div className="float-left">
                    {this.props.icon ?
                    <div className="img-icon">
                      <img src={this.props.icon} className="rounded" alt="..." />
                    </div>
                    : null
                    }
                    </div>
                    <div className="float-right">
                      <p className="card-text text-right"></p>
                      <div className="fluid-container">
                        <h3 className="card-title font-weight-bold text-right mb-0">{this.props.titre}</h3>
                      </div>
                        <p className="text-muted mt-3">
                    <i className={this.props.classNameI} aria-hidden="true"></i> {this.props.soustitre}
                  </p>
                  <div className="">
                  {this.props.progressbar?
                  <div className="progress progress-slim">
                    <div className="progress-bar bg-warning-gadient" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  : null
                  }
                  </div>
                   <button type="submit" className="btn btn-success mr-2">{this.props.label}</button>
                </div>

                    </div>
       </div>
    );
  }
}

Card.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  titre: PropTypes.string,
  soustitre: PropTypes.string,
  label: PropTypes.string,
  progressbar: PropTypes.string,
  classNameI: PropTypes.string,
};

export default Card;
