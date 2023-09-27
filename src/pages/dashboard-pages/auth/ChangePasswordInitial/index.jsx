import React, { useState, useEffect } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import ReusablePaper from '../../../../components/common/ReusablePaper';
import { useDispatch } from 'react-redux';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useHistory } from 'react-router-dom';
import ReusableDialog from '../../../../components/common/ReusableDialog';
import { logout } from '../../../../redux/authActions/loginActions';
import ReusableTextField from '../../../../components/common/TextField';
import {
  changeInitialPassword,
  changeInitialPasswordRequest,
} from '../../../../redux/authActions/changePasswordInitialActions';
import useForm from '../../../../hooks/useForm';
import { containerStyle } from './change_password_initial.styles.styles';
import ReusableSnackbar from '../../../../components/common/ReusableSnackbar';

import { useSelector } from 'react-redux';

const ChangePasswordInitial = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(true);
  const { error } = useSelector((state) => state.auth);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('error');
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, handleChange, reset } = useForm(
    {
      password: '', // Nueva entrada para la contraseña actual
      newPassword: '',
      confirmPassword: '',
    },
    {
      password: (value) =>
        value.trim() === '' ? 'Este campo es obligatorio' : null,
      newPassword: (value) =>
        value.trim() === '' ? 'Este campo es obligatorio' : null,
      confirmPassword: (value) =>
        value !== values.password ? 'Las contraseñas no coinciden' : null,
    }
  );

  useEffect(() => {
    const handlePopState = () => {
      dispatch(logout()); // Cierre de sesión al retroceder en el navegador
      history.replace('/'); // Redirige al usuario a la página de inicio o la que desees
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [dispatch, history]);

  const handleCloseDialog = () => {
    dispatch(logout());
  };

  const handleSavePassword = async () => {
    if (
      values.password.trim() === '' ||
      values.newPassword.trim() === '' ||
      values.confirmPassword.trim() === ''
    ) {
      setSnackbarType('error');
      setSnackbarMessage('Por favor, completa todos los campos.');
      setSnackbarOpen(true);
      return;
    }

    if (errors.password || errors.newPassword || errors.confirmPassword) {
      setSnackbarType('error');
      setSnackbarMessage(
        'Por favor, corrige los errores antes de guardar la contraseña.'
      );
      setSnackbarOpen(true);
      return;
    }

    dispatch(changeInitialPasswordRequest());

    try {
      await dispatch(
        changeInitialPassword(values.password, values.newPassword)
      );
      setOpenDialog(false);
      history.push('/dashboard');
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
      setSnackbarType('error');
      setSnackbarMessage(
        'Error al cambiar la contraseña. Por favor, inténtalo de nuevo.'
      );
      setSnackbarOpen(true);
    }
  };

  const dialogContent = (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ReusablePaper
        title='Si es tu primera vez, cambia tu contraseña:'
        style={containerStyle.paperStyle}
      >
        <Grid
          container
          style={containerStyle.paper_content}
        >
          <Grid
            container
            style={containerStyle.formStyle}
          >
            <ReusableTextField
              style={containerStyle.inputStyle}
              label='Contraseña Actual'
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={values.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge='end'
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                ),
              }}
            />
            <ReusableTextField
              style={containerStyle.inputStyle}
              label='Nueva Contraseña'
              type='password'
              name='newPassword'
              value={values.newPassword}
              onChange={handleChange}
              error={Boolean(errors.newPassword)}
              helperText={errors.newPassword}
            />
            <ReusableTextField
              style={containerStyle.inputStyle}
              label='Confirmar Contraseña'
              type='password'
              name='confirmPassword'
              value={values.confirmPassword}
              onChange={handleChange}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
            />
          </Grid>
        </Grid>
      </ReusablePaper>
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box mt={40}>
      <ReusableSnackbar
        open={snackbarOpen}
        handleClose={handleSnackbarClose}
        message={snackbarMessage}
        type={snackbarType}
      />
      <ReusableDialog
        open={openDialog}
        title='Cambio de Contraseña'
        content={dialogContent}
        actions={dialogActions}
        style={containerStyle.dialogStyle}
        overlayColor={containerStyle.overlayColor}
      />
    </Box>
  );
};

export default ChangePasswordInitial;
