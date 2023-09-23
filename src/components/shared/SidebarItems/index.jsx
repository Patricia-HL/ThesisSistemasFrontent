import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'; // Importamos withRouter

import ListItemIcon from '@mui/material/ListItemIcon';

import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  useTheme,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { getCustomStyles } from './sidebar_items.styles';
const SidebarItems = ({
  items,
  history,
  sidebarStyle,
  listStyle,
  listItemStyle,
  listItemTextStyle,
  userRoles, // Pasa los roles del usuario como una prop
}) => {
  const Theme = useTheme();
  const customStyles = getCustomStyles(Theme);

  const [openItems, setOpenItems] = useState({});

  // const shouldShowItem = (item) => {
  //   const roles = localStorage.getItem("roles");
  //   const userRoles = roles ? JSON.parse(roles) : [];

  //   if (!item.roles || item.roles.some((role) => userRoles.includes(role))) {
  //     return true;
  //   }

  //   return false;
  // };
  const shouldShowItem = (item) => {
    const roles = localStorage.getItem('roles');
    const userRoles = roles ? JSON.parse(roles) : [];

    if (!item.roles) {
      // Si el elemento no tiene roles definidos, mostrarlo
      return true;
    }

    // Verificar si al menos uno de los roles del usuario coincide con los roles del elemento
    return item.roles.some((role) => userRoles.includes(role));
  };

  const handleItemClick = (itemName, route, hasCollapse) => {
    if (hasCollapse) {
      setOpenItems((prevOpenItems) => ({
        ...prevOpenItems,
        [itemName]: !prevOpenItems[itemName],
      }));
    } else {
      setOpenItems({});

      if (route) {
        history.push(route);
      }
    }
  };

  const isItemOpen = (itemName) => {
    return openItems[itemName] || false;
  };

  return (
    <List style={{ ...customStyles.sidebar, ...sidebarStyle }}>
      {items
        .filter(shouldShowItem) // Filtra las rutas que deben mostrarse
        .map((item) => (
          <React.Fragment key={item.name}>
            <ListItem
              style={{ ...customStyles.listItem, ...listItemStyle }}
              onClick={() =>
                handleItemClick(item.name, item.route, item.collapse)
              }
              component={item.route ? Link : 'button'}
              to={item.route}
            >
              <ListItemText
                primary={item.name}
                style={{ ...customStyles.ListItemText, ...listItemTextStyle }}
              />
              {item.collapse && isItemOpen(item.name) ? (
                <MoreHorizIcon />
              ) : (
                <MoreVertIcon />
              )}
            </ListItem>
            {item.collapse && (
              <Collapse
                in={isItemOpen(item.name)}
                timeout='auto'
                unmountOnExit
              >
                <List disablePadding>
                  <SidebarItems
                    items={item.collapse}
                    history={history}
                    sidebarStyle={{ ...customStyles.sidebar, ...sidebarStyle }}
                    listItemStyle={{
                      ...customStyles.listItem,
                      ...listItemStyle,
                    }}
                    listItemTextStyle={{
                      ...customStyles.ListItemText,
                      ...listItemTextStyle,
                    }}
                    userRoles={userRoles} // Pasa los roles del usuario recursivamente
                  />
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
    </List>
  );
};

export default withRouter(SidebarItems); // Utilizamos withRouter para tener acceso a history
