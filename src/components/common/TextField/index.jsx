import React from 'react';
import TextField from '@mui/material/TextField';
import { customStyles } from './textfield.styles';
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
  InputProps,
  style, // Agregamos style como prop
}) => {
  // Combina los estilos personalizados con los estilos propios si están presentes
  const mergedStyle = {
    ...customStyles,
    ...style,
  };

  return (
    <TextField
      label={label}
      variant={variant}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error}
      required={required}
      InputProps={{
        style: {
          ...mergedStyle,
          '& input': mergedStyle.inputUnderlineAfter,
          '&:hover input': mergedStyle.inputUnderlineAfter,
          '&.Mui-focused input': mergedStyle.inputUnderlineAfter,
        },
        ...InputProps,
      }}
      InputLabelProps={{
        required: false,
        style: {
          ...mergedStyle.label,
          '&.Mui-focused': mergedStyle.labelFocused,
        },
      }}
      sx={{
        '& .MuiInput-underline:after': mergedStyle.inputUnderlineAfter,
        '& .MuiOutlinedInput-root': mergedStyle.outlinedInputRoot,
        '& .MuiOutlinedInput-notchedOutline': mergedStyle.outlinedInputFieldset,
        '&:hover .MuiOutlinedInput-notchedOutline':
          mergedStyle.outlinedInputFieldsetHover,
        '&.Mui-focused .MuiOutlinedInput-notchedOutline':
          mergedStyle.outlinedInputFieldsetFocused,
      }}
    />
  );
};

export default ReusableTextField;
