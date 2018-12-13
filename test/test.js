// @flow

import React from 'react';
import { shallow } from 'enzyme'
import FloatingLabelInput from '../src/main';

describe('HowLongTilLunch', () => {
  it('simple test', () => {
    const wrapper = shallow(<FloatingLabelInput name="name" prompt="Name" />);

    expect(wrapper).toHaveLength(1);
  });
});
