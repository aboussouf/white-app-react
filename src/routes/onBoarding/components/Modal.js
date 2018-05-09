import React from 'react'
import ModalAwesome from 'react-awesome-modal'
import Onboarding from './Onboarding'

class Modal extends React.Component {
  // Modal function
  constructor (props) {
    super(props)
    this.state = {
      visible : true
    }
  }

  openModal () {
    this.setState({
      visible : true
    })
  }

  closeModal () {
    this.setState({
      visible : false
    })
  }
  // Modal function
  render () {
    return (
      <div>
        <ModalAwesome visible={this.state.visible} width='280' height='464' effect='fadeInUp'>
          <div>
            <Onboarding action={() => this.closeModal()} />
          </div>
        </ModalAwesome>
      </div>
    )
  }
}

export default Modal
