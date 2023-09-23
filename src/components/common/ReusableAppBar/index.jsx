// ReusableAppBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import {
  Grid,
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  useTheme,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Typography, Box } from '@mui/material';
import ReusableButton from '../Button';
import { publicRoutes } from '././../../../routes';
import CollapsiblePopover from '../CollapsiblePopover';
import ButtonGroup from '../ButtonGroup';
import { getCustomStyles } from './reusable_appbar.styles'; // Importa la función getCustomStyles
const ReusableAppBar = ({
  onMenuButtonClick,
  buttonPosition,
  showTitle,
  isPublic,
  showLogoutButton,
  appBar,
  it,
  style,
  ...props
}) => {
  const theme = useTheme(); // Accede al tema global
  const customStyles = getCustomStyles(theme); // Obtén los estilos personalizados
  const history = useHistory();

  const handleButtonClick = (item) => {
    // Realizar acciones adicionales si es necesario
    // ...

    // Navegar a la nueva página
    history.push(item.route);
    console.log(item.route);
  };
  const mergedStyles = { ...customStyles, ...style };
  return (
    <AppBar style={mergedStyles}>
      <Toolbar style={customStyles.toolbar}>
        {showTitle && (
          <Typography style={customStyles.title}>Belcorp Potosí</Typography>
        )}
        <Hidden smUp>
          <Box>
            <IconButton
              edge={customStyles.menuButton.edge(buttonPosition)}
              style={customStyles.menuButton}
              aria-label='menu'
              onClick={onMenuButtonClick}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Hidden>
        <Hidden smDown>
          <Box sx={{ flexGrow: 0.01 }} />
        </Hidden>
        <Hidden smDown>
          {isPublic &&
            publicRoutes.map((item, index) => (
              <Box
                key={index}
                style={customStyles.navbaritem}
              >
                {item.collapse ? (
                  <CollapsiblePopover
                    items={[item]}
                    renderTrigger={(openPopover, isOpen) => (
                      <ReusableButton
                        style={customStyles.button}
                        onClick={openPopover}
                      >
                        {item.name}
                      </ReusableButton>
                    )}
                  />
                ) : (
                  <ReusableButton
                    style={customStyles.button}
                    onClick={() => handleButtonClick(item)} // Pasa el parámetro 'item'
                  >
                    {item.name}
                  </ReusableButton>
                )}
              </Box>
            ))}
        </Hidden>{' '}
        {showLogoutButton && (
          <ReusableButton style={customStyles.btnlogout}>
            Cerrar Sesión
          </ReusableButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ReusableAppBar;
