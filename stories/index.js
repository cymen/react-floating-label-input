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
          <div>Default:</div>
          <FloatingLabelInput
            id="example-1"
            label="label"
            onBlur={action('onBlur')}
            onChange={action('onChange')}
            onFocus={action('onFocus')}
          />
        </div>
        <div style={{ border: '1px dashed #ddd', padding: '1em', margin: '10px 0' }}>
          <div>Font size of 20px and placeholder:</div>
          <div style={{ fontSize: 20 }}>
            <FloatingLabelInput
              id="example-2"
              label="label"
              onBlur={action('onBlur')}
              onChange={action('onChange')}
              onFocus={action('onFocus')}
              placeholder="placeholder"
            />
          </div>
        </div>
        <div style={{ border: '1px dashed #ddd', padding: '1em', margin: '10px 0' }}>
          <div>Font size of 64px and no placeholder:</div>
          <div style={{ fontSize: 64 }}>
            <FloatingLabelInput
              id="example-3"
              label="label"
              onBlur={action('onBlur')}
              onChange={action('onChange')}
              onFocus={action('onFocus')}
            />
          </div>
        </div>
        <div style={{ border: '1px dashed #ddd', padding: '1em', margin: '10px 0' }}>
          <div>Font size of 64px and placeholder:</div>
          <div style={{ fontSize: 64 }}>
            <FloatingLabelInput
              id="example-3"
              label="label"
              onBlur={action('onBlur')}
              onChange={action('onChange')}
              onFocus={action('onFocus')}
              placeholder="placeholder"
            />
          </div>
        </div>
        <div style={{ border: '1px dashed #ddd', padding: '1em', margin: '10px 0' }}>
          <div>Font size of 64px and placeholder textarea:</div>
          <div style={{ fontSize: 64 }}>
            <FloatingLabelInput
              id="example-3"
              label="label"
              onBlur={action('onBlur')}
              onChange={action('onChange')}
              onFocus={action('onFocus')}
              placeholder="placeholder"
              textarea="true"
            />
          </div>
        </div>
      </div>
    )
  );
