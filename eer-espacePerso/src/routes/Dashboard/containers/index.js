import View from '../components'
import { connect } from 'react-redux'
import { getProspect } from '../../../store/actions/Prospect'

const mapStateToProps = (state, props) => ({
  prospect: state.prospect.getIn(['prospect', 'result']) &&
   state.prospect.getIn(['prospect', 'result']).toJS(),
})

/* function mapStateToProps (state, props) {
  const prospect = state.prospect.getIn(['prospect', 'result'])
  return {
    prospect,
    status: state.prospect.getIn(['prospect', 'status']),
  }
} */

// state.prospect.getIn(['prospect', 'result']) || fromJS({}),
const mapDispatchToProps = (dispatch) => ({
  getProspect: (id) => { dispatch(getProspect(id)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(View)
