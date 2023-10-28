import React, { useState } from 'react';
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

const SidebarItems = ({
  items,
  history,
  sidebarStyle,
  listStyle,
  listItemStyle,
  listItemTextStyle,
  userRoles,
}) => {
  const Theme = useTheme();
  const customStyles = getCustomStyles(Theme);
  const currentPath = history.location.pathname;

  const [openItems, setOpenItems] = useState({});

  const shouldShowItem = (item) => {
    const roles = localStorage.getItem('roles');
    const userRoles = roles ? JSON.parse(roles) : [];

    if (!item.roles) {
      return true;
    }

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

  const isItemActive = (itemRoute) => {
    return currentPath === itemRoute;
  };

  return (
    <List style={{ ...customStyles.sidebar, ...sidebarStyle }}>
      {items.filter(shouldShowItem).map((item) => (
        <React.Fragment key={item.name}>
          <ListItem
            style={{
              ...customStyles.listItem,
              ...listItemStyle,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: isItemActive(item.route)
                ? 'rgba(255, 255, 255, 0.2)'
                : 'transparent',
            }}
            onClick={() =>
              handleItemClick(item.name, item.route, item.collapse)
            }
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
              (isItemOpen(item.name) ? (
                <ExpandLessIcon
                  style={{
                    color: 'white',
                    marginLeft: 'auto',
                  }}
                />
              ) : (
                <ExpandMoreIcon
                  style={{
                    color: 'white',
                    marginLeft: 'auto',
                  }}
                />
              ))}
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
                  sidebarStyle={{ paddingRight: 15, margin: 0 }}
                  listItemStyle={{
                    ...customStyles.listItem,
                    ...listItemStyle,
                  }}
                  listItemTextStyle={{
                    ...customStyles.ListItemText,
                    ...listItemTextStyle,
                  }}
                  userRoles={userRoles}
                />
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
export default withRouter(SidebarItems);
