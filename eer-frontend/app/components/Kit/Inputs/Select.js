import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Select extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
    };
  }

  onChange(event) {
    this.props.inputChange(event.target.value, this.props.storeKey);
  }

  render() {
    return (
      <div>
        {this.props.icon ?
          <img src={this.props.icon} alt="" className="icon" />
          : null
        }
        <select
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          onChange={this.onChange}
          disabled={this.props.disabled}
          className={this.props.className}
          >
          {this.props.options && this.props.options.map((o) => <option value={o.id} key={`city_${o.id}`} > {o.libelle}</option>
          )}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  storeKey: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.array,
  inputChange: PropTypes.func,
};

Select.defaultProps = {

};

export default Select;
