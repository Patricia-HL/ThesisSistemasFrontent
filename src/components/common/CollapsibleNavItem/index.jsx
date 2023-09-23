import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const CollapsibleNavItem = ({ name, items }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem
        button
        onClick={handleClick}
      >
        <ListItemText primary={name} />
      </ListItem>
      <Collapse
        in={open}
        timeout='auto'
        unmountOnExit
      >
        <List
          component='div'
          disablePadding
        >
          {items.map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.route}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default CollapsibleNavItem;
