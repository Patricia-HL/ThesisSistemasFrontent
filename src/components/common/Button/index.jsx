import React from 'react';
import Button from '@mui/material/Button';
import { buttonStyle } from './button.styles';

const ReusableButton = ({ children, variant, onClick, style }) => {
  const mergedStyle = buttonStyle({ style });

  return (
    <Button
      style={mergedStyle}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ReusableButton;
