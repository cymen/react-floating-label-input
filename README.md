# react-floating-label-input

This is a floating label component for React. It inherits the font-size from the parent so you can easily set the desired input font-size in your own CSS. It also accepts a shrink property which can be 1-99 inclusive. That is the percentage to shrink the floating label when the input is focused or has a value.

# Examples

## Visual

See it in action at the [Storybook](http://blog.cymen.org/react-floating-label-input).

![Screenshot](/images/react-floating-label-input.gif)

## Code

Here is the example of font size 64px with shrink of 20% from above in JSX:

```jsx
  <div style={{ fontSize: 64 }}>
    <FloatingLabelInput
      id="example-3"
      label="label"
      onChange={action('onChange')}
      shrink={20}
    />
  </div>
```

## License

[MIT](LICENSE)
