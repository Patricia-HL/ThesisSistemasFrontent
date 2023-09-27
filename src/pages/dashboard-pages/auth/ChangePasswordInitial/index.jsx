import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import ReusableDialog from '../../../../components/common/ReusableDialog';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/authActions/loginActions';
import ReusableTextField from '../../../../components/common/TextField';

const ChangePasswordInitial = () => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCloseDialog = () => {
    dispatch(logout());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSavePassword = () => {
    if (password === confirmPassword) {
      setOpenDialog(false);
    } else {
      alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    }
  };

  const dialogContent = (
    <div>
      <p>Si es tu primera vez, por favor cambia tu contraseña:</p>
      <ReusableTextField
        label='Nueva Contraseña'
        type='password'
        value={password}
        onChange={handlePasswordChange}
      />
      <ReusableTextField
        label='Confirmar Contraseña'
        type='password'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
    </div>
  );

  const dialogActions = [
    {
      label: 'Cancelar',
      onClick: handleCloseDialog,
      color: 'primary',
    },
    {
      label: 'Guardar',
      onClick: handleSavePassword,
      color: 'primary',
    },
  ];

  const containerStyle = {
    dialogStyle: {
      backgroundColor: 'red',
      // Agrega tus estilos personalizados aquí
    },
    overlayColor: 'red', // Color de fondo del overlay
  };

  return (
    <Box mt={40}>
      <ReusableDialog
        open={openDialog}
        onClose={handleCloseDialog}
        title='Cambiar Contraseña'
        content={dialogContent}
        actions={dialogActions}
        style={containerStyle.dialogStyle}
        overlayColor={containerStyle.overlayColor}
      />
    </Box>
  );
};

export default ChangePasswordInitial;
