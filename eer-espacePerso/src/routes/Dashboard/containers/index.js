import View from '../components'
import { connect } from 'react-redux'
import { getProspect } from '../../../store/actions/Prospect'

function mapStateToProps (state, props) {
  const prospect = state.prospect.getIn(['prospect', 'result'])
  return {
    prospect,
    status: state.prospect.getIn(['prospect', 'status']),
  }
}

const mapDispatchToProps = (dispatch) => ({
  getProspect: (id) => { dispatch(getProspect(id)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(View)
