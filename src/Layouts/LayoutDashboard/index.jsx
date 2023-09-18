import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import SidebarItems from '../../components/shared/SidebarItems';
import Divider from '@mui/material/Divider';
import { Box, Grid } from '@mui/material';

const LayoutDashboard = ({ privateRoutes }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box>
      {' '}
      {/* <Box style={{ height: '100vh', with: '100%', margin: '0' }}>*/}
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            Belcorp Potosí
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer}>
        <Grid container style={{ justifyContent: 'center', margin: '1rem' }}>
          {/* Aquí colocamos el logo o cualquier otro contenido */}
          {/*<Box
            component='img'
            src='/path/to/your/logo.png'
            alt='Logo'
            style={{ width: '100px', marginBottom: '16px' }}
          />
*/}
          {/* Aquí colocamos el texto con Typography */}
          <Typography variant='h6' gutterBottom>
            Belcorp Potosí
          </Typography>
          {/* Agregamos un Divider para separar el logo y el texto */}
        </Grid>
        <Divider />
        {/* A continuación, mostramos el componente SidebarItems */}
        <SidebarItems items={privateRoutes} />
      </Drawer>
      {/* Content */}
    </Box>
  );
};

export default LayoutDashboard;
