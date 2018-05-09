import { connect } from 'react-redux';
import every from 'lodash/every';
import Navbar from '../../../components/Kit/Navbar';
import { goNext, goBack } from '../../../store/actions/Steps';

function mapStateToProps(state, props) {
  if (props.fields) {
    const allInputs = props.fields
      .map((field) => field.split('.'))
      .map(([store, ...path]) => state.get(store).getIn(path));
    const haveValue = every(allInputs
      .map((input) => (input && input.get('value') !== undefined && input.get('value').size !== 0)));
    return ({
      disableNext: props.disabled || !haveValue,
    });
  }
  return {};
}

const mapDispatchToProps = (dispath) => ({
  goToNext: (location) => { dispath(goNext(location)); },
  goToBack: (location) => { dispath(goBack(location)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
