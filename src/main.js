// @flow

import React, { Component } from 'react';
import classNames from 'classnames';
import './main.scss';

type Props = {
  className?: string,
  fontSize?: string,
  id: string,
  label: string,
  onBlur?: Event => void,
  onChange: Event => void,
  onFocus?: Event => void,
  placehold?: string,
  shrink?: number,
  type?: string,
};

export default class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);

    if (!props.id) {
      throw new Error('expectd id but none present');
    }

    if (props.shrink && (props.shrink < 1 || props.shrink > 99)) {
      throw new Error('shrink prop must be between 1 and 99');
    }

    this.state = {
      active: props.value && props.value.length > 0,
    };
  }

  render() {
    const { className, fontSize, id, label, onBlur, onChange, onFocus, shrink, placeholder, type, value } = this.props;
    const { active } = this.state;

    return (
      <div
        className={classNames('react-floating-label-input', {
          active,
          [className]: !!className,
        })}
      >
        <div
          className="container"
          style={{
            fontSize: fontSize
              ? fontSize
              : 'inherit',
            height: shrink
              ? `${1.2 + shrink/100}em`
              : `2em`,
          }}
        >
          <label
            htmlFor={id}
            style={{
              transform: active
                ? `translate3d(0, -${shrink || '70'}%, 0) scale(0.${shrink || '70'})`
                : 'none',
            }}
          >{label}</label>
          <input
            id={id}
            onBlur={event => {
              this.setState({ active: event.target.value.length !== 0 });
              if (onBlur) {
                onBlur(event);
              }
            }}
            onChange={onChange}
            onFocus={event => {
              this.setState({ active: true });
              if (onFocus) {
                onFocus(event);
              }
            }}
            placeholder={placeholder}
            type={type || "text"}
            value={value}
          />
        </div>
      </div>
    );
  }
}
