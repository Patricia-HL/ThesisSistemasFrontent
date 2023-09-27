import React, { useState } from 'react';
import { Box, Avatar, Grid, Button, IconButton } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PageBody from '../../../components/common/PageBody';
import ReusableTextField from '../../../components/common/TextField';
import ReusablePaper from '../../../components/common/ReusablePaper';
import useNavigate from '../../../hooks/useNavigate';
import { useDispatch, useSelector } from 'react-redux'; // Importa useSelector
import { loginUser } from '../../../redux/authActions/loginActions';
import useForm from '../../../hooks/useForm';
import { containerStyle } from './signin.styles';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTemporaryPassword = useSelector(
    (state) => state.auth.isTemporaryPassword
  );

  // Agrega la siguiente línea para acceder al estado de auth
  const { error } = useSelector((state) => state.auth);

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
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      dni: values.dni,
      password: values.password,
    };

    await dispatch(loginUser(credentials));
  };

  return (
    <PageBody>
      <Box style={containerStyle.root}>
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
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  style={containerStyle.formStyle}
                >
                  {error && <div style={{ color: 'red' }}>{error}</div>}
                  <ReusableTextField
                    style={containerStyle.inputStyle}
                    label='Documento de Identidad o Celular'
                    type='text'
                    name='dni'
                    value={values.dni}
                    onChange={handleChange}
                    helperText={errors.dni}
                    error={Boolean(errors.dni)}
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
                  {/* Muestra el mensaje de error desde el estado de Redux */}

                  <Button
                    variant='contained'
                    type='submit'
                  >
                    Iniciar sesión
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </ReusablePaper>
      </Box>
    </PageBody>
  );
};

export default SignIn;
