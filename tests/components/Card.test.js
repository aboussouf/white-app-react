import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import Card from '../../components/Card';

describe('Card', () => {

    beforeEach(() => {
      action = spy();
    });

    it('renders the icon if provided', () => {
      const wrapper = shallow(<Card icon={user} titre="Mon Profil" soustitre="Votre profil est complet à 25%" label="Compléter mon profil" classNameI="mdi mdi-alert-octagon mr-1"/>);
      expect(wrapper.find('img')).to.have.length(1);
    });

    it('renders an input button', () => {
      const wrapper = shallow(<Card icon={user} titre="Mon Profil" soustitre="Votre profil est complet à 25%" label="Compléter mon profil" classNameI="mdi mdi-alert-octagon mr-1"/>);
      expect(wrapper.find('button')).to.have.length(1);
    });

    it('renders an input button', () => {
      const wrapper = shallow(<Card icon={user} titre="Mon Profil" soustitre="Votre profil est complet à 25%" label="Compléter mon profil" classNameI="mdi mdi-alert-octagon mr-1" progressbar="true"/>);
      expect(wrapper.find('progressbar')).to.have.length(1);
    });

  });
