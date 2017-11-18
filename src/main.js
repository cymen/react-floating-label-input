// @flow

import React, { Component } from 'react';
import classNames from 'classnames';
import style from './main.scss';

type Props = {
  label: string,
  onChange: Event => void,
  placehold?: string,
  shrink?: number,
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
      active: false,
    };
  }

  render() {
    const { id, label, onChange, shrink, placeholder } = this.props;
    const { active } = this.state;

    return (
      <div className={`${style.floatingLabelInput} ${active ? 'active' : ''}`}>
        <div
          className="container"
          style={{
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
            onBlur={event => this.setState({ active: event.target.value.length !== 0 })}
            onChange={onChange}
            onFocus={() => this.setState({ active: true })}
            placeholder={placeholder}
            type="text"
          />
        </div>
      </div>
    );
  }
}
