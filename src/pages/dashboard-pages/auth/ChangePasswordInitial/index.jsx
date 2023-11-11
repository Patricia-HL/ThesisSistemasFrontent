import React, { useState, useEffect } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import ReusablePaper from '../../../../components/common/ReusablePaper';
import { useDispatch, useSelector } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ReusableDialog from '../../../../components/common/ReusableDialog';
import ReusableTextField from '../../../../components/common/TextField';
import { containerStyle } from './change_password_initial.styles.styles';
import { useHistory } from 'react-router-dom';
import useForm from '../../../../hooks/useForm';

import { logout } from '../../../../redux/authActions/loginActions';
import { changeInitialPassword } from '../../../../redux/authActions/changePasswordInitialActions';
const initialFormState = {
  password: '',
  newPassword: '',
  confirmPassword: '',
};

const initialFormErrors = {
  password: '',
  newPassword: '',
  confirmPassword: '',
};
const ChangePasswordInitial = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { error } = useSelector((state) => state.auth);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const { values, errors, handleChange, reset, setErrors } = useForm(
    initialFormState,
    initialFormErrors
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
  const validateForm = () => {
    const newErrors = {
      password:
        values.password.trim() === '' ? 'Este campo es obligatorio' : '',
      newPassword:
        values.newPassword.trim() === '' ? 'Este campo es obligatorio' : '',
      confirmPassword: '',
    };

    if (values.confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Este campo es obligatorio';
    } else if (values.confirmPassword !== values.newPassword) {
      newErrors.confirmPassword = 'Las contraseñas noSDSD coinciden';
    }

    return newErrors;
  };

  const handleSavePassword = async () => {
    // Lógica de validación de formulario usando el hook useForm
    const newErrors = validateForm(); // Asegúrate de definir la función validateForm
    setErrors(newErrors);

    // Si no hay errores, realiza la acción de cambio de contraseña
    if (Object.values(newErrors).every((error) => error === '')) {
      const { password, newPassword, confirmPassword } = values;

      try {
        await dispatch(
          changeInitialPassword(password, newPassword, confirmPassword)
        );
        setOpenDialog(false);
        history.push('/dashboard');
      } catch (error) {
        console.error('Error al cambiar la contraseña:', error);
      }
    }
  };

  const handleFieldChange = (e) => {
    handleChange(e);
    const newErrors = validateForm();
    setErrors(newErrors);
  };
  console.log('error', error);
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
              type={showNewPassword ? 'text' : 'password'}
              name='newPassword'
              value={values.newPassword}
              onChange={handleChange}
              error={Boolean(errors.newPassword)}
              helperText={errors.newPassword}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    edge='end'
                  >
                    {showNewPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                ),
              }}
            />
            <ReusableTextField
              style={containerStyle.inputStyle}
              label='Confirmar Nueva Contraseña'
              type='password'
              name='confirmPassword'
              value={values.confirmPassword}
              onChange={handleFieldChange}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
            />
          </Grid>
          {error && <div style={{ color: 'white' }}>{error.message}</div>}
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
  return (
    <Box mt={40}>
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
