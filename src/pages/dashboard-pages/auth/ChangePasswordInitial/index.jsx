import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReusableDialog from '../../../../components/common/ReusableDialog';
import { logout } from '../../../../redux/authActions/loginActions';
import ReusableTextField from '../../../../components/common/TextField';
import {
  changeInitialPassword,
  changeInitialPasswordRequest,
  changeInitialPasswordSuccess,
  changeInitialPasswordFailure,
} from '../../../../redux/authActions/changePasswordInitialActions';

const ChangePasswordInitial = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(true);
  const [currentPassword, setCurrentPassword] = useState(''); // Nueva entrada para la contraseña actual
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCloseDialog = () => {
    dispatch(logout());
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSavePassword = async () => {
    if (password === confirmPassword) {
      dispatch(changeInitialPasswordRequest());
      try {
        await dispatch(changeInitialPassword(currentPassword, password));
        setOpenDialog(false);
        history.push('/dashboard');
      } catch (error) {
        console.error('Error al cambiar la contraseña:', error);
        alert('Error al cambiar la contraseña. Por favor, inténtalo de nuevo.');
      }
    } else {
      alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    }
  };

  const dialogContent = (
    <div>
      <p>Si es tu primera vez, por favor cambia tu contraseña:</p>
      <ReusableTextField
        label='Contraseña Actual' // Cambiado el label para la contraseña actual
        type='password'
        value={currentPassword}
        onChange={handleCurrentPasswordChange}
      />
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
