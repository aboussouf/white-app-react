
import React from 'react'
import PropTypes from 'prop-types'
import OnboardingStep from './OnboardingStep'
import * as user from '../../../asserts/images/user1.png'
import * as agence from '../../../asserts/images/agence.png'
import * as catalogue from '../../../asserts/images/catalogue.png'
import * as coffre from '../../../asserts/images/coffre.png'
import * as customerService from '../../../asserts/images/customerService.png'
import styles from '../assets/css/onboarding.scss'

const Steps = [
  { step : 1,
    image: [user, ],
    title: 'Compléter mon Profil',
    text : 'Nous souhaitons en savoir plus sur vous. Cela nous permettra d aborder les sujets qui comptent vraiment lors de notre rendez-vous',
  },
  { step : 2,
    image:[agence, ],
    title: 'Gérer mes Rendez-vous',
    text : 'Votre temps est prévieux, et nous en avons conscience. Planifiez vos rendez-vous selon votre emploi dutemps.',
  },
  { step : 3,
    image: [catalogue, ],
    title: 'Explorer les Produits',
    text : 'Grâce à notre catalgoue, sélectionnez les produits qui vous intéressent afin d en parler avec votre conseiller.',
  },
  { step : 4,
    image:[coffre, ],
    title: 'Conserver mes Documents',
    text : 'Grâce à votre coffre-fort, gardez vos documents les plus précieux toujours à portée de main.',
  },
  { step : 5,
    image: [customerService, ],
    title: 'Un conseilleren Direct',
    text : 'Nous aimons communiquer avec nos clients. Obtenez une réponse à votre question grâce à nos experts',
  },
]

class Onboarding extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedStep : 1
    }
  }
  next (index) {
    if (this.state.selectedStep <= 4) {
      console.log('next  - ', this.state.selectedStep)
          //  this.state.selectedStep += 1;
      this.setState({
        selectedStep : this.state.selectedStep + 1
      })
      console.log('next  -- ', this.state.selectedStep)
    } else {
      console.log('else')
      this.setState({
        selectedStep : 1
      })
    }
  }
  render () {
    return (
      <div className='walkthrough show reveal'>
        <div className='walkthrough-pagination'>
          <a className={`dot${this.state.selectedStep === 1 ? ' active' : ''}`} />
          <a className={`dot${this.state.selectedStep === 2 ? ' active' : ''}`} />
          <a className={`dot${this.state.selectedStep === 3 ? ' active' : ''}`} />
          <a className={`dot${this.state.selectedStep === 4 ? ' active' : ''}`} />
          <a className={`dot${this.state.selectedStep === 5 ? ' active' : ''}`} />
        </div>
        <div className='walkthrough-body'>
          <ul className='screens animate'>
            {
          Steps.map((s) =>
            <OnboardingStep
              step={this.state.selectedStep}
              image={s.image}
              title={s.title}
              text={s.text}
              active={s.step === this.state.selectedStep} />
            )
          }
          </ul>
          <button className='prev-screen'>
            <i className='icon-angle-left' />
          </button>
          <button className='next-screen'>
            <i className='icon-angle-right' />
          </button>
        </div>

        <div className='walkthrough-footer'>
          <button className='button next-screen' onClick={this.state.selectedStep === 5 ? this.props.action : () => this.next(this.state.selectedStep)}>{this.state.selectedStep === 5 ? 'finish' : 'Next'}</button>

        </div>
      </div>
    )
  }
}

Onboarding.propTypes = {
  action: PropTypes.func,
}

export default Onboarding
