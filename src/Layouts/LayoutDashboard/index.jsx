// LayoutDashboard.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Divider, Typography, Grid, Box, useTheme } from '@mui/material';
import CustomDrawer from '../../components/shared/CustomDrawer';
import SidebarItems from '../../components/shared/SidebarItems';
import { useStyles } from './layout_dashboard.styles';
import { getCustomStyles } from './layout_dashboard.styles';
import ReusableAppBar from '../../components/common/ReusableAppBar';

const findCurrentRoute = (routes, pathname) => {
  for (const route of routes) {
    if (route.route === pathname) {
      return route.name;
    }
    if (route.collapse) {
      const found = findCurrentRoute(route.collapse, pathname);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

const LayoutDashboard = ({ isAuthenticated, privateRoutes, children }) => {
  const Theme = useTheme();
  const customStyles = getCustomStyles(Theme);
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const currentRoute = findCurrentRoute(privateRoutes, location.pathname);

    if (currentRoute) {
      setCurrentPage(currentRoute);
    } else {
      setCurrentPage('Route Not Found');
    }

    // Cerrar el drawer cuando se selecciona una ruta del SidebarItems
    setIsDrawerOpen(false);
  }, [location.pathname, privateRoutes]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box style={customStyles.root}>
      <ReusableAppBar
        onMenuButtonClick={toggleDrawer}
        buttonPosition='right'
        showLogoutButton={true}
        showTitle={false} // Mostrar el título en el AppBar
        position='start' // El ReusableAppBar se mostrará a la izquierda en el LayoutDashboard
        // appBar={customStyles.appBar}
      />
      <CustomDrawer
        drawerStyle={customStyles.drawer} // Estilo personalizado del Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        isPermanent={true}
        items={
          <React.Fragment>
            <Grid
              container
              style={{ justifyContent: 'center', margin: '0.7rem' }}
            >
              <Typography
                variant='h6'
                gutterBottom
              >
                Perfil
              </Typography>
            </Grid>
            <Divider />
            <SidebarItems
              items={privateRoutes} // Pasa las rutas privadas a SidebarItems
              onItemClick={() => setIsDrawerOpen(false)}
              sidebarStyle={customStyles.sidebarStyle} // Estilos para el elemento Sidebar
              listItemStyle={customStyles.listItemStyle} // Estilos para el elemento List
              listItemTextStyle={customStyles.listItemTextStyle} // Estilos para el elemento ListItemTex
            />
          </React.Fragment>
        }
      />
      {children}
    </Box>
  );
};

export default LayoutDashboard;
