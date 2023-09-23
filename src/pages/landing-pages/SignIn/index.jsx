import React from 'react';
import { Box, Avatar, Grid, Paper, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PageBody from '../../../components/common/PageBody';
import useNavigate from '../../../hooks/useNavigate';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/authActions/loginActions';
import useForm from '../../../hooks/useForm';

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
      <Box component={Paper}>
        <Grid container>
          <Grid item>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <form onSubmit={handleSubmit}>
              <TextField
                label='Documento de Identidad o Celular'
                variant='outlined'
                name='dniOrCellNumber'
                value={values.dniOrCellNumber}
                onChange={handleChange}
                helperText={errors.dniOrCellNumber}
                error={Boolean(errors.dniOrCellNumber)}
                required
              />

              <TextField
                label='Contraseña'
                variant='outlined'
                type='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                helperText={errors.password}
                error={Boolean(errors.password)}
                required
              />

              <Button
                variant='contained'
                type='submit'
              >
                Iniciar sesión
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </PageBody>
  );
};

export default SignIn;
