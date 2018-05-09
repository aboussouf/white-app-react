
import { connect } from 'react-redux';
import Select from '../../../components/Kit/Inputs/Select';
import { inputChange } from '../../../store/actions/Inputs';

import { getAgencysByCitie } from '../../../store/actions/Geolocs';
import { makeSelectAgencesList } from '../../../store/selectors/Geolocs';
import { makeSelectProspect } from '../../../store/selectors/Prospect';

const mapStateToProps = (state, props) => {
  const [store, ...storeKey] = props.storeKey.split('.');
  storeKey.push('value');
  return ({
    value: state.get(store).getIn(storeKey),
  });
};

const mapDispatchToProps = (dispatch) => ({
  inputChange: (value, id) => { dispatch(inputChange(value, id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);
