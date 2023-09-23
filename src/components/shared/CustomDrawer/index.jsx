import React from 'react';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import { useTheme } from '@mui/material';
import DrawerContent from './DrawerContent';
import { getCustomStyles } from './custom_drawer.styles';
import { Box } from '@mui/system';
const CustomDrawer = ({ open, onClose, items, isPermanent, drawerStyle }) => {
  const Theme = useTheme();
  const customStyles = getCustomStyles(Theme);
  return (
    <Box>
      {/* Drawer visible solo en dispositivos móviles */}
      <Hidden mdUp>
        <Drawer
          anchor={isPermanent ? 'left' : 'right'}
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              ...customStyles.drawer, // Estilo personalizado de customStyles
              ...drawerStyle, // Estilo personalizado de drawerStyle
            },
          }}
        >
          <DrawerContent items={items} /> {/* Pasa los items aquí */}
        </Drawer>
      </Hidden>

      {/* Drawer permanente en escritorio */}
      {isPermanent && (
        <Hidden smDown>
          <Drawer
            anchor='left'
            open
            variant='permanent'
            sx={customStyles.drawer}
          >
            <DrawerContent items={items} /> {/* Pasa los items aquí */}
          </Drawer>
        </Hidden>
      )}
    </Box>
  );
};
export default CustomDrawer;
