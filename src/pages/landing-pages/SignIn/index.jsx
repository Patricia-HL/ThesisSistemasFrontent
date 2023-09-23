import React, { useState } from 'react';
import { Box, Avatar, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PageBody from '../../../components/common/PageBody';
import ReusablePaper from '../../../components/common/ReusablePaper';
import ReusableTextField from '../../../components/common/TextField'; // Importa tu componente ReusableTextField
import useNavigate from '../../../hooks/useNavigate'; // Importa tu hook useNavigate
import { containerStyle } from './signin.styles';
import ReusableButton from '../../../components/common/Button';

const SignIn = ({ toggleAuthentication }) => {
  const navigate = useNavigate(); // Usa el hook useNavigate

  // Estados para almacenar los valores de los campos de texto
  const [dniOrCellNumber, setDniOrCellNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Aquí puedes agregar la lógica real de autenticación
    // Por ahora, simplemente llamaremos a la función toggleAuthentication para establecer isAuthenticated en true.
    toggleAuthentication(true);

    // Después de la autenticación exitosa, navega a la ruta '/dashboard'
    navigate('/dashboard');
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
                  label='DNI o Celular'
                  variant='outlined'
                  value={dniOrCellNumber}
                  onChange={(e) => setDniOrCellNumber(e.target.value)}
                  style={containerStyle.inputStyle}
                />

                <ReusableTextField
                  label='Contraseña'
                  variant='outlined'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={containerStyle.inputStyle}
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
