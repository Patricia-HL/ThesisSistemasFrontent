import React, { useState, useEffect } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import ReusablePaper from '../../../../components/common/ReusablePaper';
import { useDispatch } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useHistory } from 'react-router-dom';
import ReusableDialog from '../../../../components/common/ReusableDialog';
import { logout } from '../../../../redux/authActions/authActions';
import ReusableTextField from '../../../../components/common/TextField';
import {
  changeInitialPassword,
  changeInitialPasswordRequest,
} from '../../../../redux/authActions/authActions';
import useForm from '../../../../hooks/useForm';
import { containerStyle } from './change_password_initial.styles.styles';
import ReusableSnackbar from '../../../../components/common/ReusableSnackbar';
import { useSelector } from 'react-redux';

const ChangePasswordInitial = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(true);
  const { errorChangepasswordInitial } = useSelector((state) => state.auth);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('error');
  const [showPassword, setShowPassword] = useState(false);
  const { isTemporaryPassword } = useSelector((state) => state.auth);
  //estado para cambiar la contraseña

  const [isFirstTime, setIsFirstTime] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { values, errors, handleChange } = useForm({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  useEffect(() => {
    const handlePopState = () => {
      dispatch(logout());
      history.replace('/');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [dispatch, history]);

  const handleCloseDialog = () => {
    dispatch(logout());
  };
  useEffect(() => {
    console.log('PASSWORD ISTEMPORARY:', isTemporaryPassword);
    if (isTemporaryPassword) {
      setIsFirstTime(true);
    }
  }, [isTemporaryPassword]);

  const handleSavePassword = async () => {
    try {
      setIsLoading(true);
      const successChangePasswordInitial = dispatch(
        changeInitialPassword(
          values.password,
          values.newPassword,
          values.confirmNewPassword
        )
      );
      setIsLoading(false);
      if (successChangePasswordInitial) {
        if (isFirstTime) {
          setIsFirstTime(true);
          console.log(successChangePasswordInitial);
          localStorage.setItem('isChangingPassword', 'true');
        }

        if (!isTemporaryPassword && isFirstTime) {
          setOpenDialog(false);
          history.replace('/dashboard');
        }
      }
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);

      // Utiliza los errores del estado de Redux para mostrar el mensaje en el Snackbar
      if (errorChangepasswordInitial) {
        // Muestra un Snackbar de error
        setSnackbarType('error');
        setSnackbarMessage(errorChangepasswordInitial);
        setSnackbarOpen(true);
      } else {
        // Muestra un mensaje genérico de error
        setSnackbarType('error');
        setSnackbarMessage(
          'Error al cambiar la contraseña. Por favor, inténtalo de nuevo.'
        );
        setSnackbarOpen(true);
      }
    }
  };

  useEffect(() => {
    if (errorChangepasswordInitial) {
      setSnackbarType('error');
      setSnackbarMessage(errorChangepasswordInitial);
      setSnackbarOpen(true);
    }
  }, [errorChangepasswordInitial]);

  const dialogContent = (
    <div>
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
              label='Confirmar Contraseña'
              type='password'
              name='confirmNewPassword'
              value={values.confirmNewPassword}
              onChange={handleChange}
              error={Boolean(errors.confirmNewPassword)}
              helperText={errors.confirmNewPassword}
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
          </Grid>
        </Grid>
      </ReusablePaper>
    </div>
  );

  const dialogActions = [
    {
      label: 'Cancelar',
      onClick: handleCloseDialog,
    },
    {
      label: 'Guardar',
      onClick: handleSavePassword,
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
