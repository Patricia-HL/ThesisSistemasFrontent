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
  sidebarStyle, // Accede al estilo personalizado del componente Sidebar
  listStyle, // Accede al estilo personalizado del componente List
  listItemStyle, // Accede al estilo personalizado del componente ListItem
  listItemTextStyle, // Accede al estilo personalizado del componente ListItemText
}) => {
  const Theme = useTheme();
  const customStyles = getCustomStyles(Theme);

  const [openItems, setOpenItems] = useState({});

  const handleItemClick = (itemName, route, hasCollapse) => {
    if (hasCollapse) {
      setOpenItems((prevOpenItems) => ({
        ...prevOpenItems,
        [itemName]: !prevOpenItems[itemName],
      }));
    } else {
      setOpenItems({}); // Cerrar todos los colapsos si no hay colapsos en el elemento clickeado
      // Redirigir a la ruta correspondiente si se proporciona
      if (route) {
        history.push(route); // Usamos history.push para redirigir sin recargar la página
      }
    }
  };

  const isItemOpen = (itemName) => {
    return openItems[itemName] || false; // Aseguramos que esté definido como false si no existe
  };

  return (
    <List style={{ ...customStyles.sidebar, ...sidebarStyle }}>
      {items.map((item) => (
        <React.Fragment key={item.name}>
          <ListItem
            style={{ ...customStyles.listItem, ...listItemStyle }}
            onClick={() =>
              handleItemClick(item.name, item.route, item.collapse)
            }
            component={item.route ? Link : 'button'}
            to={item.route}
          >
            {/* <ListItemIcon>{item.icon}</ListItemIcon>*/}
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

              // style={{ ...customStyles.list, ...listStyle }}
            >
              <List
                // style={{ ...customStyles.list, ...listStyle }}
                disablePadding
              >
                {/* Pasamos las rutas dentro de los colapsos a SidebarItems */}
                <SidebarItems
                  items={item.collapse}
                  history={history}
                  sidebarStyle={{ ...customStyles.sidebar, ...sidebarStyle }}
                  listItemStyle={{ ...customStyles.listItem, ...listItemStyle }}
                  listItemTextStyle={{
                    ...customStyles.ListItemText,
                    ...listItemTextStyle,
                  }}
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
