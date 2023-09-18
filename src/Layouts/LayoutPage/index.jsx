import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CustomDrawer from '../../components/shared/CustomDrawer';
import SidebarItems from '../../components/shared/SidebarItems';
import { Divider, Box, useTheme } from '@mui/material';
import ReusableAppBar from '../../components/common/ReusableAppBar';

import Footer from '../../components/common/Footer';
import { getCustomStyles } from './layout_page.styles';
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

const LayoutPage = ({
  isAuthenticated,
  publicRoutes,
  privateRoutes,

  children,
}) => {
  const Theme = useTheme();
  const customStyles = getCustomStyles(Theme);

  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const currentRoute = findCurrentRoute(publicRoutes, location.pathname);

    if (currentRoute) {
      setCurrentPage(currentRoute);
    } else {
      setCurrentPage('Route Not Found');
    }

    // Cerrar el drawer cuando se selecciona una ruta del SidebarItems
    setIsDrawerOpen(false);
  }, [location.pathname, publicRoutes]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box style={customStyles.root}>
      <ReusableAppBar
        onMenuButtonClick={toggleDrawer}
        isPublic={true}
        showTitle={true}
        position='end'
        style={customStyles.appBar}
      />
      <CustomDrawer
        drawerStyle={customStyles.drawer} // Estilo personalizado del Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        isPermanent={false}
        items={
          <Box>
            <Divider />
            <SidebarItems
              items={isAuthenticated ? privateRoutes : publicRoutes}
              onItemClick={() => setIsDrawerOpen(false)}
              sidebarStyle={customStyles.sidebar} // Estilos para el elemento Sidebar
              listStyle={customStyles.list} // Estilos para el elemento List
              listItemStyle={customStyles.listItem} // Estilos para el elemento ListItem
              listItemTextStyle={customStyles.listItemText} // Estilos para el elemento ListItemText
            />
          </Box>
        }
        a
      />
      {children}
      <Footer />
    </Box>
  );
};

export default LayoutPage;
