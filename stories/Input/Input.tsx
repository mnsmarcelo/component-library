/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef, InputHTMLAttributes } from 'react';

type FieldError = {
  message?: string;
};

export type InputProps = {
  name: string;
  label: string;
  error?: FieldError,
  type: 'text' | 'email' | 'password' | 'textarea';
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const {
    error,
    label,
    name,
    type,
    ...inputProps
  } = props;
  const withError = error?.message ? 'Input-with-error' : '';
  return (
    <div className="input-wrapper">
      <label
        className="input-label"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={['input', withError].join(' ')}
        {...inputProps}
        ref={ref}
      />
      {error && (
        <div className="input-error-helper">
          {error?.message}
        </div>
      )}
    </div>
  );
});
