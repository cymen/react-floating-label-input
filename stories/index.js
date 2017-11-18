import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import FloatingLabelInput from '../src/main';

storiesOf('FloatingLabelInput', module)
  .add(
    'default',
    () =>
      <div style={{ fontSize: '48px', padding: 1 }}>
        <FloatingLabelInput
          id="something"
          label="something"
          onChange={action('onChange')}
          placeholder="abcsdfsd"
          shrink={40}
        />
      </div>
  );
