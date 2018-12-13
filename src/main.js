import React from 'react';
import styled from 'styled-components';

const FloatingLabelInput = styled.article`
  width: 100%;
`;

const FloatingLabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 2em;
  border-bottom: 1px solid #ddd;
  font-size: inherit;
`;

const FloatingLabel = styled.label`
  padding: 0;
  margin: 0;
  border: 0;
  position: absolute;
  color: #9b9b9b;
  bottom: 0;
  transition: all 0.2s ease-in-out;
  transform-origin: left top;
  font-size: 1em;
  cursor: text;
  pointer-events: none;
  width: 66.6%;
  transform: ${props =>
    props.active ? 'translate3d(0, -70%, 0) scale(0.70)' : 'none'};
`;

const FloatingInput = styled.input`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  font-size: 1em;
  &::placeholder {
    color: #9b9b9b;
    opacity: ${props => (props.active ? 1 : 0)};
    transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
`;

export default class TextInput extends React.PureComponent {
  constructor(props) {
    super(props);
    if (!props.id && !props.name) {
      throw new Error('expectd id but none present');
    }

    this.state = {
      active: props.value && props.value.length > 0
    };

    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  _onFocus() {
    this.setState({ active: true });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  _onBlur(event) {
    this.setState({ active: event.target.value.length !== 0 });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  render() {
    const { name, placeholder, onChange, label, type } = this.props;

    const id = this.props.id || name;
    const { active } = this.state;

    return (
      <FloatingLabelInput>
        <FloatingLabelInputContainer>
          <FloatingLabel htmlFor={id} active={active}>
            {label}
          </FloatingLabel>
          <FloatingInput
            active={active}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={event => this._onBlur(event)}
            onFocus={this._onFocus}
            type={type || 'text'}
          />
        </FloatingLabelInputContainer>
      </FloatingLabelInput>
    );
  }
}
