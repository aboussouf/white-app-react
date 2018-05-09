import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import PropTypes from 'prop-types';
import * as cv from '../../../images/curriculum.svg';
import * as Regex from '../../../utils/constants';
import * as FormConstante from '../../../utils/constants';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { getCountrys, getAgencysByCountry } from '../../../store/actions/Geolocs';
import { makeSelectCountrysList, makeSelectAgencesList } from '../../../store/selectors/Geolocs';
import { MapContainer } from '../../../containers/RDVContainer/Geoloc/MapContainer';

class ChoseAgency extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      citiesDefaultValue: 1,
      CountryDefaultValue: 1,
    };
  }
  handleCitiesChange = (event, index, citiesDefaultValue) => {
    this.setState({ citiesDefaultValue });
    this.props.getCountrys(citiesDefaultValue);
  }

  handleCountryChange = (event, index, countryDefaultValue) => {
    this.setState({ countryDefaultValue });
    this.props.getAgencysByCountry(countryDefaultValue);
  }
  /**
   * when a component will unmount
   */
  componentWillMount() {
  }
  componentWillReceiveProps() {
  }


  render() {
    return (
      <div>
        <div>
          <SelectField
            floatingLabelText="Villes"
            value={this.state.citiesDefaultValue}
            onChange={this.handleCitiesChange}
          >
            {this.props.cities
                    && this.props.cities
                                  .map((city) => <MenuItem value={city.idVille} key={`city_${city.idVille}`} primaryText={city.libelle} />
                                              )}


          </SelectField>

        </div>
        <div>
          <SelectField
            floatingLabelText="Quartiers"
            value={this.state.CountryDefaultValue}
            onChange={this.handleCountryChange}
          >
            {this.props.countrys
                    && this.props.countrys
                                  .map((country) => <MenuItem value={country.idQuartier} key={`country_${country.idQuartier}`} primaryText={country.libelle} />
                                              )}


          </SelectField>

        </div>

        <div>
          <SelectField
            floatingLabelText="Agences"
            value={this.state.CountryDefaultValue}
            onChange={this.handleCountryChange}
          >
            {this.props.agences
                    && this.props.agences
                                  .map((agence) => <MenuItem value={agence.idAgence} key={`country_${agence.idAgence}`} primaryText={agence.adresse} />
                                              )}


          </SelectField>

        </div>
        <div>
          <MapContainer
            google={this.props.google}
            agences={this.props.agences}
            lazy
          />
        </div>


      </div>

    );
  }

  }
ChoseAgency.propTypes = {
  cities: PropTypes.array.isRequired,
  countrys: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  agences: makeSelectAgencesList()(state),
  countrys: makeSelectCountrysList()(state),
});

const mapDispatchToProps = (dispath) => ({
  getCountrys: (payload) => { dispath(getCountrys(payload)); },
  getAgencysByCountry: (payload) => { dispath(getAgencysByCountry(payload)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChoseAgency);
