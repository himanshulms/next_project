import { useState } from 'react';
import './input.scss'

type InputProps = {
  id: string;
  inputSize?: string;
  type: string;
  label?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  // Add other possible input props if necessary
};

const Input = ({ id, label, inputSize, type, className, placeholder, value, ...rest }: InputProps) => {
  const classes = `${inputSize || ''} ${className || ''}`;

  return (
    <>
      <div className="inputField" >
        {label && (
          <label htmlFor={id} className="block pb-1 inputLabel">
            {label}
          </label>
        )}
        <div className="rounded-0 ">
          <input
            type={type}
            id={id}
            autoComplete="off"
            className={`${classes} py-3 px-4 border rounded-none`}
            placeholder={placeholder}
            value={value}
            {...rest}
          />
        </div>
      </div>

    </>
  );
};

export default Input;
