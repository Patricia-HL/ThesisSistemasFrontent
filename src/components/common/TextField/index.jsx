import React from 'react';
import TextField from '@mui/material/TextField';
import { textFieldStyle } from './textfield.styles';

const ReusableTextField = ({
  label,
  variant,
  type,
  name,
  value,
  onChange,
  helperText,
  error,
  required,
  style,
  InputProps,
}) => {
  const mergedStyle = textFieldStyle({ style });

  return (
    <TextField
      style={mergedStyle}
      label={label}
      variant={variant}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error}
      required={required}
      InputProps={InputProps}
      InputLabelProps={{
        required: false,
        style: {
          '&::after': {
            content: 'none',
          },
        },
      }}
    />
  );
};

export default ReusableTextField;
