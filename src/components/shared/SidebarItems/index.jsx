import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { getCustomStyles } from './sidebar_items.styles';
import useSidebarItemState from '../../../hooks/useSidebarItemState ';
import { Box } from '@mui/system';

const SidebarItems = ({
  items,
  history,
  sidebarStyle,
  listItemStyle,
  listItemTextStyle,
  userRoles,
}) => {
  const Theme = useTheme();
  const customStyles = getCustomStyles(Theme);
  const currentPath = history.location.pathname;

  const shouldShowItem = (item) => {
    const roles = localStorage.getItem('roles');
    const userRoles = roles ? JSON.parse(roles) : [];

    if (!item.roles) {
      return true;
    }

    return item.roles.some((role) => userRoles.includes(role));
  };

  const { toggleItem, isItemOpen, activateItem } = useSidebarItemState({});

  // ... Código omitido para brevedad

  const handleItemClick = (item) => {
    if (item.collapse) {
      toggleItem(item.name);
    } else if (item.route) {
      activateItem(item.name);
      history.push(item.route);
    }
  };

  const isItemActive = (itemRoute) => currentPath === itemRoute;

  return (
    <List style={{ ...customStyles.sidebar, ...sidebarStyle }}>
      {items.filter(shouldShowItem).map((item) => (
        <Box
          style={{ boder: '2px solid red' }}
          key={item.name}
        >
          <ListItem
            style={{
              border: 'none',
              display: 'flex',
              borderRadius: '3px',

              marginTop: '5px',
              alignItems: 'center',
              backgroundColor: isItemActive(item.route)
                ? '#DBBCA8' // Botón con ruta activo
                : isItemOpen(item.name)
                ? 'lightyellow' // Botón desplegable activo (color amarillo claro)
                : 'lightyellow', // Botón padre activo (color salmón)
            }}
            onClick={() => handleItemClick(item)}
            component={item.route ? Link : 'button'}
            to={item.route}
          >
            {item.icon && (
              <div
                style={{
                  marginRight: 10,
                  marginLeft: -10,
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}
              >
                {item.icon}
              </div>
            )}
            <ListItemText
              primary={item.name}
              style={{
                ...customStyles.ListItemText,
                ...listItemTextStyle,
                fontWeight: isItemActive(item.route) ? 'bold' : 'normal',
              }}
            />
            {item.collapse &&
              (isItemOpen(item.name) ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
          </ListItem>
          {item.collapse && (
            <Collapse
              in={isItemOpen(item.name)}
              timeout='auto'
              unmountOnExit
              style={{ backgroundColor: '#FFFFF0' }}
            >
              <List disablePadding>
                <SidebarItems
                  items={item.collapse}
                  history={history}
                  sidebarStyle={{
                    paddingRight: 30,
                    borderRadius: '5px',
                  }}
                  listItemStyle={{ ...customStyles.listItem, ...listItemStyle }}
                  listItemTextStyle={{
                    ...customStyles.ListItemText,
                    ...listItemTextStyle,
                  }}
                  userRoles={userRoles}
                />
              </List>
            </Collapse>
          )}
        </Box>
      ))}
    </List>
  );
};

export default withRouter(SidebarItems);
