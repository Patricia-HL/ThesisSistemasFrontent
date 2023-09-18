import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

const SidebarItems = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemName) => {
    setOpenItem((prevOpenItem) =>
      prevOpenItem === itemName ? null : itemName
    );
  };

  const isItemOpen = (itemName) => {
    return openItem === itemName;
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <List>
      {items.map((item) => (
        <React.Fragment key={item.name}>
          <ListItem
            button
            component={Link}
            to={item.route}
            onClick={() => handleItemClick(item.name)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
          {item.collapse && (
            <Collapse in={isItemOpen(item.name)} timeout="auto" unmountOnExit>
              <List disablePadding>
                <SidebarItems items={item.collapse} />
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default SidebarItems;
