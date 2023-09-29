import React from 'react';
import Button from '@mui/material/Button';
import { buttonStyle } from './button.styles';

const ReusableButton = ({
  children,
  variant,
  onClick,
  style,
  ...restProps // Cambia action.props a restProps
}) => {
  const mergedStyle = buttonStyle({ style });
  return (
    <Button
      variant={variant || 'contained'} // Utiliza 'contained' como valor predeterminado si no se proporciona variant
      onClick={onClick}
      style={mergedStyle}
      {...restProps} // Cambia action.props a restProps
    >
      {children}
    </Button>
  );
};

export default ReusableButton;
