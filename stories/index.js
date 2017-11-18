import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import FloatingLabelInput from '../src/main';

storiesOf('FloatingLabelInput', module)
  .add(
    'examples',
    () => (
      <div style={{ margin: 10 }}>
        <div style={{ border: '1px dashed #ddd', padding: '1em', margin: '10px 0' }}>
          <div>Default font size of page and default label shrink of 70%:</div>
          <FloatingLabelInput
            id="example-1"
            label="label"
            onChange={action('onChange')}
          />
        </div>
        <div style={{ border: '1px dashed #ddd', padding: '1em', margin: '10px 0' }}>
          <div>Font size of 20px, default label shrink size of 70% (20 * 0.7 = 14px) and no placeholder:</div>
          <div style={{ fontSize: 20 }}>
            <FloatingLabelInput
              id="example-2"
              label="label"
              onChange={action('onChange')}
              placeholder="placeholder"
            />
          </div>
        </div>
        <div style={{ border: '1px dashed #ddd', padding: '1em', margin: '10px 0' }}>
          <div>Font size of 64px, label shrink size of 20% and no placeholder:</div>
          <div style={{ fontSize: 64 }}>
            <FloatingLabelInput
              id="example-3"
              label="label"
              onChange={action('onChange')}
              shrink={20}
            />
          </div>
        </div>
        <div style={{ border: '1px dashed #ddd', padding: '1em', margin: '10px 0' }}>
          <div>Font size of 64px and label shrink size of 90%:</div>
          <div style={{ fontSize: 64 }}>
            <FloatingLabelInput
              id="example-3"
              label="label"
              onChange={action('onChange')}
              placeholder="placeholder"
              shrink={90}
            />
          </div>
        </div>
      </div>
    )
  );
