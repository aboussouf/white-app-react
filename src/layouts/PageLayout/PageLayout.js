import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../../components/Nav'
import HorizontalNav from '../../components/HorizontalNav'
import Modal from '../../routes/onBoarding'
import * as face4 from '../../asserts/images/faces/face4.jpg'
import un from '../../asserts/images/menu_icons/01.png'
import * as deux from '../../asserts/images/menu_icons/02.png'
import * as trois from '../../asserts/images/menu_icons/03.png'
import * as quatre from '../../asserts/images/menu_icons/04.png'
import * as cinq from '../../asserts/images/menu_icons/05.png'

import { connect } from 'react-redux'
import { getProspect } from '../../store/actions/Prospect'

const elementsMenu = [
  { href: 'index.html', image: un, titre: '  Mon Espace' },
  { href: 'pages/widgets.html', image: deux, titre: 'Mon Profil' },
  { href: 'pages/ui-features/buttons.html', image: trois, titre: 'Mon Agence' },
  { href: 'pages/forms/basic_elements.html', image: quatre, titre: 'Ma Banque' },
  { href: 'pages/charts/chartjs.html', image: cinq, titre: 'Coffre-fort' },
]

class PageLayout extends React.Component {
  constructor () {
    super()
    this.renderChildren = this.renderChildren.bind(this)
  }

  renderChildren () {
    return this.props.children
  }
  componentWillMount () {
    this.props.getProspect('string')
  }

  render () {
    return (
      <div className='container-scroller'>
        <HorizontalNav />
        <div className='container-fluid page-body-wrapper'>
          <Nav icon={face4} prenom={this.props.prospect && this.props.prospect.firstName}
            nom={this.props.prospect && this.props.prospect.lastName}
            type={this.props.prospect && this.props.prospect.typeProspect === 'P' ? 'Particulier' : null}
            options={elementsMenu} />
          <Modal />
          {this.renderChildren()}
        </div>
      </div>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
  getProspect: PropTypes.func.isRequired,
  prospect: PropTypes.object,
}

const mapStateToProps = (state, props) => ({
  prospect: state.prospect.getIn(['prospect', 'result']) &&
   state.prospect.getIn(['prospect', 'result']).toJS(),
})

const mapDispatchToProps = (dispatch) => ({
  getProspect: (id) => { dispatch(getProspect(id)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);
