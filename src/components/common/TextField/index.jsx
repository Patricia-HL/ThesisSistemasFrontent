import React from 'react';
import TextField from '@mui/material/TextField';
import { textFieldStyle } from './textfield.styles'; // Asegúrate de importar los estilos correctos

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
      variant='outlined'
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error}
      required={required}
      InputProps={InputProps} // Pasa InputProps a TextField
    />
  );
};

export default ReusableTextField;
