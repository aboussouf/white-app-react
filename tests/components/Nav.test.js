import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import Nav from '../../components/Nav';

describe('Nav', () => {

    beforeEach(() => {
      action = spy();
    });

    it('renders the icon if provided', () => {
      const wrapper = shallow(<Nav icon = {face4} nom='Sara El Amrani' type='Particulier' options= {elementsMenu} />);
      expect(wrapper.find('img')).to.have.length(1);
    });

  });
