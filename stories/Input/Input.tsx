import React, { FC, forwardRef, InputHTMLAttributes} from 'react';
import './Input.css';

type FieldError = {
    message?: string;
}

export type InputProps = {
    name: string;
    label: string;
    error?: FieldError,
    type: 'text' | 'email' | 'password' | 'textarea';
} & InputHTMLAttributes<HTMLInputElement>

export const Input: FC<InputProps> = forwardRef(({
    label,
    name,
    type,
    error,
    ...props
}) => {
    const withError = error?.message ? 'Input-with-error' : '';
    return (
        <div className="input-wrapper">
            <label
                className="input-label"
                htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                className={['input', withError].join(' ')}
                {...props}
            />
            {error && (
                <div className="input-error-helper">
                    {error?.message}
                </div>
            )}
        </div>
    );
});
