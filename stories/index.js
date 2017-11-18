import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import FloatingLabelInput from '../src/main';

storiesOf('FloatingLabelInput', module)
  .add(
    'default',
    () => (
      <div style={{ fontSize: '20px', padding: 1 }}>
        <FloatingLabelInput
          id="example-1"
          label="label"
          onChange={action('onChange')}
          placeholder="placeholder"
        />
      </div>
    )
  );
