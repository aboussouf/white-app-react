import React from 'react'
import PropTypes from 'prop-types'
import styles from '../assets/css/onboarding.scss'

class OnboardingStep extends React.Component {
  render () {
    return (

      <div className={`screen${this.props.active ? '--active' : ''}`}>
        <div className='media books'>
          <br />
          {
            this.props.image.map((i) =>
              <img src={i} />
            )
          }
        </div>
        <br />
        <h3>
          {this.props.title}
        </h3>
        <p>{this.props.text}</p>
      </div>
    )


}
}

OnboardingStep.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
}

export default OnboardingStep
