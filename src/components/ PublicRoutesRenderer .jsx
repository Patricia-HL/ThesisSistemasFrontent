import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const PublicRoutesRenderer = ({ routes }) => {
  const [openItems, setOpenItems] = useState({});

  const handleItemClick = (itemName, route, hasCollapse) => {
    if (hasCollapse) {
      setOpenItems((prevOpenItems) => ({
        ...prevOpenItems,
        [itemName]: !prevOpenItems[itemName],
      }));
    }
  };

  const isItemOpen = (itemName) => {
    return openItems[itemName] || false;
  };

  return (
    <List>
      {routes.map((route) => (
        <React.Fragment key={route.name}>
          <ListItem
            button
            onClick={() =>
              handleItemClick(route.name, route.route, route.collapse)
            }
            component={route.route ? Link : 'button'}
            to={route.route}
          >
            <ListItemText primary={route.name} />
            {route.collapse && isItemOpen(route.name) ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </ListItem>
          {route.collapse && (
            <Collapse
              in={isItemOpen(route.name)}
              timeout='auto'
              unmountOnExit
            >
              <List>
                <PublicRoutesRenderer routes={route.collapse} />
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default PublicRoutesRenderer;
