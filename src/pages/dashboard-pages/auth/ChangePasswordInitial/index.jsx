import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import ReusablePaper from '../../../../components/common/ReusablePaper';
import { useDispatch } from 'react-redux';
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
const ChangePasswordInitial = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(true);

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

  const handleCloseDialog = () => {
    dispatch(logout());
  };

  const handleSavePassword = async () => {
    if (!errors.password && !errors.newPassword && !errors.confirmPassword) {
      dispatch(changeInitialPasswordRequest());
      try {
        await dispatch(
          changeInitialPassword(values.password, values.newPassword)
        );
        setOpenDialog(false);
        history.push('/dashboard');
      } catch (error) {
        console.error('Error al cambiar la contraseña:', error);
        alert('Error al cambiar la contraseña. Por favor, inténtalo de nuevo.');
      }
    } else {
      alert('Por favor, corrige los errores antes de guardar la contraseña.');
    }
  };

  const dialogContent = (
    <div>
      <p></p>
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
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
            <ReusableTextField
              style={containerStyle.inputStyle}
              label='Nueva Contraseña'
              type='password'
              name='password'
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
