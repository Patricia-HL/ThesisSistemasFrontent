// ReusableSnackbar.jsx

import React from 'react';
import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ReusableSnackbar = ({ open, handleClose, message, type }) => {
  const getSnackbarStyle = () => {
    switch (type) {
      case 'success':
        return { backgroundColor: '#4caf50', color: '#ffffff' };
      case 'info':
        return { backgroundColor: '#2196f3', color: '#ffffff' };
      case 'warning':
        return { backgroundColor: '#ff9800', color: '#ffffff' };
      default:
        return { backgroundColor: '#f44336', color: '#ffffff' };
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      ContentProps={{
        style: getSnackbarStyle(),
      }}
      action={
        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={handleClose}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      }
    />
  );
};

export default ReusableSnackbar;
