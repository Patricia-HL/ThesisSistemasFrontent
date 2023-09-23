import React from 'react';
import TextField from '@mui/material/TextField';
import { textFieldStyle } from './textfield.styles'; // Asegúrate de importar los estilos correctos

const ReusableTextField = ({ label, variant, onChange, value, style }) => {
  const mergedStyle = textFieldStyle({ style });

  return (
    <TextField
      label={label}
      variant={variant}
      style={mergedStyle}
      onChange={onChange}
      value={value}
    />
  );
};

export default ReusableTextField;
