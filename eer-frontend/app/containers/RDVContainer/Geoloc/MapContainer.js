import MapView from './MapView';
import { connect } from 'react-redux';
import { setAgenceSelectionnee } from '../../../store/actions/Prospect';

const mapDispatchToProps = (dispatch) => ({
  setAgenceSelectionnee: (agence) => { dispatch(setAgenceSelectionnee(agence)); },
});

export default connect(null, mapDispatchToProps)(MapView);
