
import { connect } from 'react-redux';
import Radio from '../../../components/Kit/Inputs/Radio';
import { inputChange } from '../../../store/actions/Inputs';

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

export default connect(mapStateToProps, mapDispatchToProps)(Radio);
