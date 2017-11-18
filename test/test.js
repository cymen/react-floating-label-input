// @flow

import React from 'react';
import { shallow } from 'enzyme'
import HowLongTillLunch from '../src/main';

describe('HowLongTilLunch', () => {
  it('simple test', () => {
    const wrapper = shallow(<HowLongTillLunch hours={10} minutes={15} />);

    expect(wrapper).toHaveLength(1);
  });
});
