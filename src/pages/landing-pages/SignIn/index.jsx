import React, { useState } from 'react';
import { Box, Avatar, Grid, Paper, Button, IconButton } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PageBody from '../../../components/common/PageBody';
import ReusableTextField from '../../../components/common/TextField';
import ReusablePaper from '../../../components/common/ReusablePaper';
import useNavigate from '../../../hooks/useNavigate';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loginUser } from '../../../redux/authActions/loginActions';
import useForm from '../../../hooks/useForm';
import { containerStyle } from './signin.styles';
import ReusableSnackbar from '../../../components/common/ReusableSnackbar';
import { useHistory } from 'react-router-dom'; // Asegúrate de importar useHistory

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTemporaryPassword = useSelector(
    (state) => state.auth.isTemporaryPassword
  ); // Obtener el valor de isTemporaryPassword

  const validationRules = {
    dni: (value) => (value.trim() === '' ? 'Este campo es obligatorio' : null),
    password: (value) =>
      value.trim() === '' ? 'Este campo es obligatorio' : null,
  };

  const { values, errors, handleChange } = useForm(
    { dni: '', password: '' },
    validationRules
  );

  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const history = useHistory(); // Obtener el objeto history para redireccionar

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      dni: values.dni,
      password: values.password,
    };

    try {
      await dispatch(loginUser(credentials));

      if (isTemporaryPassword) {       // Redirige al usuario a la página de dashboard u otra página
        history.push('/dashboard');
        // Redirige al usuario a ChangePasswordInitial si es contraseña temporal
        history.push('/change-password-initial'); // Cambia esto a la ruta de tu componente ChangePasswordInitial
      } else {
 
      }
    } catch (error) {
      console.error('Error durante la autenticación:', error);
      setSnackbarOpen(true);

      if (error.message === 'Credenciales incorrectas') {
        console.log(error.message);
        setSnackbarMessage(
          'Las credenciales proporcionadas son incorrectas. Por favor, inténtelo de nuevo.'
        );
      } else {
        setSnackbarMessage(
          'Error durante la autenticación. Por favor, inténtelo de nuevo.'
        );
      }
    }
  };

  return (
    <PageBody>
      {' '}
      <Box style={containerStyle.root}>
        {' '}
        <ReusablePaper style={containerStyle.paperStyle}>
          <Grid
            container
            style={containerStyle.paper_content}
          >
            <Grid item>
              <Avatar style={containerStyle.avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Grid item>
              {' '}
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  style={containerStyle.formStyle}
                >
                  <ReusableTextField
                    style={containerStyle.inputStyle}
                    label='Documento de Identidad o Celular'
                    type='text'
                    name='dni'
                    value={values.dni}
                    onChange={handleChange}
                    helperText={errors.dni}
                    error={Boolean(errors.dni)}
                    required={true}
                    hideAsterisk
                  />

                  <ReusableTextField
                    style={containerStyle.inputStyle}
                    label='Contraseña'
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    helperText={errors.password}
                    error={Boolean(errors.password)}
                    required={true}
                    hideAsterisk
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge='end'
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      ),
                    }}
                  />
                  <Button
                    variant='contained'
                    type='submit'
                  >
                    Iniciar sesión
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>{' '}
        </ReusablePaper>
        <ReusableSnackbar
          open={snackbarOpen}
          handleClose={() => setSnackbarOpen(false)}
          message={snackbarMessage}
          type='error'
        />
      </Box>
    </PageBody>
  );
};

export default SignIn;
