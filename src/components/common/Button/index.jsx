import React from 'react';
import Button from '@mui/material/Button';
import { buttonStyle } from './button.styles';
const ReusableButton = ({
  children,
  variant,
  onClick,
  style,
  ...restProps
}) => {
  const mergedStyle = buttonStyle({ style });
  return (
    <Button
      variant={variant || 'contained'} // Utiliza 'contained' como valor predeterminado si no se proporciona variant
      onClick={onClick}
      style={mergedStyle}
      {...restProps} // Permite pasar otras props personalizadas al botón
    >
      {children}
    </Button>
  );
};

export default ReusableButton;
