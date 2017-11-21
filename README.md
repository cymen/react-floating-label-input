# react-floating-label-input


[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

This is a floating label component for React. It inherits the font-size from the parent so you can easily set the desired input font-size in your own CSS. It also accepts a shrink property which can be 1-99 inclusive. That is the percentage the label should be of the input font size. That means if you have a font size of 20px on the input, the default 70% will result in a 14px label size (20 * 0.7 = 14).

# Examples

## Visual

Try it yourself at the [Storybook](http://blog.cymen.org/react-floating-label-input).

![Screenshot](/images/react-floating-label-input.gif)

## Code

Here is the 3rd example above in JSX (64px font size with 20% label shrinkage):

```jsx
import React from 'react';
import FloatingLabelInput from 'react-floating-label-input';
import 'react-floating-label-input/dist/react-floating-label-input.css';

export default ({ onChange, value }) =>
  <div style={{ fontSize: 64 }}>
    <FloatingLabelInput
      id="example-3"
      label="label"
      onChange={onChange}
      shrink={20}
      value={value}
    />
  </div>;
```

### Props

| name         | optional | default    |
|--------------|----------|------------|
| fontSize     | yes      | inherit    |
| id           | no       |            |
| label        | no       |            |
| onBlur       | yes      |            |
| onChange     | no       |            |
| onFocus      | yes      |            |
| placeholder  | yes      | ''         |
| shrink       | yes      | 70%        |
| type         | yes      | text       |
| value        | yes      | ''         |

# Styling

The component renders with a DOM class of `react-floating-label-input`.

# Dependencies

Peer dependencies:

* react
* react-dom
* classnames

## License

[MIT](LICENSE)

[package-url]: https://npmjs.org/package/react-floating-label-input
[npm-version-svg]: http://versionbadg.es/cymen/react-floating-label-input.svg
[npm-badge-png]: https://nodei.co/npm/react-floating-label-input.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/react-floating-label-input.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/react-floating-label-input.svg
[downloads-url]: http://npm-stat.com/charts.html?package=react-floating-label-input
