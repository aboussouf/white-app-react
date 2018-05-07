import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import MenuItem from '../../components/MenuItem';

describe('MenuItem', () => {

    beforeEach(() => {
      action = spy();
    });

    it('renders the icon if provided', () => {
      const wrapper = shallow(<MenuItem className="nav-link" icon="ffdf" label="Test" />);
      expect(wrapper.find('img')).to.have.length(1);
    });

    it('renders active className if active step', () => {
      const wrapper = shallow(<MenuItem className="nav-link" icon="ffdf" label="Test" />);
      expect(wrapper.find('nav-item nav-link')).to.have.length(1);
    });

});
