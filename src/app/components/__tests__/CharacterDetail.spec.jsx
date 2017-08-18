import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import CharacterDetail from '../CharacterDetail';

describe('<CharacterDetail />', () => {
  it('Renders a Character Detail header', () => {
    // Construct a React Router context
    const testCharacter = {
      params: {
        character: 'akuma'
      }
    }

    const wrapper = shallow(<CharacterDetail match={testCharacter} />)

    var header = wrapper.find('h1')
    expect(header).to.have.length(1)
    expect(header.hasClass('title')).to.be.true
    expect(header.text()).to.equal('Character Detail - AKUMA')
  });
});
