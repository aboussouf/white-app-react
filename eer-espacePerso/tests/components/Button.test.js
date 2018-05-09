import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'

import Button from '../../src/components/Button'

describe('Button', () => {
  let action = null

  beforeEach(() => {
    action = spy()
  })

  it('renders a button', () => {
    const wrapper = shallow(<Button label='click me' action={action} />)
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('dispatches a event when the value changes', () => {
    const wrapper = shallow(
      <Button label='click me' action={action} />
    )
    wrapper.find('button').simulate('click')
    expect(action.called).to.equal(true)
  })

  it('renders the icon if provided', () => {
    const wrapper = shallow(<Button label='click me' icon='ffdf' action={action} />)
    expect(wrapper.find('img')).to.have.length(1)
  })
  it('renders a disabled button if Disabled', () => {
    const wrapper =
      shallow(<Button label='click me' action={action} disabled />)
    expect(wrapper.find('button').props().disabled).to.equal(true)
  })
})
