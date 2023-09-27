import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import ReusableDialog from '../../../../components/common/ReusableDialog';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/authActions/loginActions';
import ReusableTextField from '../../../../components/common/TextField';

const ChangePasswordInitial = () => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(true);
  const [password, setPassword] = useState(''); // Estado para la nueva contraseña
  const [confirmPassword, setConfirmPassword] = useState(''); // Estado para confirmar la contraseña

  const handleCloseDialog = () => {
    dispatch(logout()); // Dispara la acción de logout
  };

  // Manejar el cambio en los campos de contraseña y confirmación
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Manejar la acción de guardar contraseña
  const handleSavePassword = () => {
    // Aquí puedes agregar la lógica para validar y guardar la contraseña
    // Por ejemplo, puedes verificar si las contraseñas coinciden antes de guardarlas
    if (password === confirmPassword) {
      // Realizar la acción de guardar contraseña aquí
      // Puedes enviar una solicitud al servidor para actualizar la contraseña
      // Una vez que la contraseña se haya guardado exitosamente, puedes cerrar el diálogo
      setOpenDialog(false);
    } else {
      // Mostrar un mensaje de error si las contraseñas no coinciden
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
      onClick: handleSavePassword, // Llama a la función para guardar la contraseña
      color: 'primary',
    },
  ];

  return (
    <Box mt={40}>
      <ReusableDialog
        open={openDialog}
        onClose={handleCloseDialog}
        title='Cambiar Contraseña'
        content={dialogContent}
        actions={dialogActions}
      />
    </Box>
  );
};

export default ChangePasswordInitial;
