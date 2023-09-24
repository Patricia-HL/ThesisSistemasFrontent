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
import { loginUser } from '../../../redux/authActions/loginActions';
import useForm from '../../../hooks/useForm';
import { containerStyle } from './signin.styles';
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationRules = {
    dniOrCellNumber: (value) =>
      value.trim() === '' ? 'Este campo es obligatorio' : null,
    password: (value) =>
      value.trim() === '' ? 'Este campo es obligatorio' : null,
  };

  const { values, errors, handleChange } = useForm(
    { dniOrCellNumber: '', password: '' },
    validationRules
  );

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      dni: values.dniOrCellNumber,
      password: values.password,
    };

    try {
      await dispatch(loginUser(credentials));
      navigate('/dashboard');
    } catch (error) {
      console.error('Error durante la autenticación:', error);
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
                    name='dniOrCellNumber'
                    value={values.dniOrCellNumber}
                    onChange={handleChange}
                    helperText={errors.dniOrCellNumber}
                    error={Boolean(errors.dniOrCellNumber)}
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
      </Box>
    </PageBody>
  );
};

export default SignIn;
