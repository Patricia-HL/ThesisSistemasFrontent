import React, { useState } from 'react';
import { Box, Avatar, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PageBody from '../../../components/common/PageBody';
import ReusablePaper from '../../../components/common/ReusablePaper';
import ReusableTextField from '../../../components/common/TextField';
import useNavigate from '../../../hooks/useNavigate';
import { containerStyle } from './signin.styles';
import ReusableButton from '../../../components/common/Button';
import { useDispatch } from 'react-redux'; // Importa useDispatch de react-redux
import { loginUser } from '../../../redux/authActions/loginActions';

const SignIn = ({ toggleAuthentication }) => {
  const dispatch = useDispatch(); // Obtiene la función dispatch desde Redux

  const navigate = useNavigate();

  const [dniOrCellNumber, setDniOrCellNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Llama a la acción loginUser para iniciar sesión
    const credentials = {
      dni: dniOrCellNumber,
      password,
    };

    try {
      await dispatch(loginUser(credentials));

      // Si la autenticación es exitosa, puedes realizar acciones adicionales aquí
      // Por ejemplo, navegar a una página diferente
      navigate('/dashboard');

    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la autenticación
      console.error('Error durante la autenticación:', error);
    }
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
              <Grid
                container
                style={containerStyle.formStyle}
              >
                <ReusableTextField
                  label='Documento de Identidad  o Celular'
                  variant='outlined'
                  value={dniOrCellNumber}
                  onChange={(e) => setDniOrCellNumber(e.target.value)}
                  style={containerStyle.inputStyle}
                  required
       
                />

                <ReusableTextField
                  label='Contraseña'
                  variant='outlined'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={containerStyle.inputStyle}
                  required
         
                />

                <ReusableButton
                  variant='contained'
                  type='submit'
                  onClick={handleSignIn}
                  style={containerStyle.buttonStyle}

                >
                  Iniciar sesión
                </ReusableButton>
              </Grid>
            </Grid>
          </Grid>
        </ReusablePaper>
      </Box>
    </PageBody>
  );
};

export default SignIn;
