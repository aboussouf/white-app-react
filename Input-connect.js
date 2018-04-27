  
import { connect } from 'react-redux';
import Input from '../../../components/Kit/Inputs/Input';
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

export default connect(mapStateToProps, mapDispatchToProps)(Input);
