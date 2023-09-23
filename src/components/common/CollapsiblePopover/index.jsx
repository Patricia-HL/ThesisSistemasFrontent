import React, { useState } from 'react';
import { Button, Popover } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
const CollapsiblePopover = ({ items, renderTrigger }) => {
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [openItemIndex, setOpenItemIndex] = useState(null);
  const [openSubItemIndex, setOpenSubItemIndex] = useState(null);
  const [openParentCollapseIndex, setOpenParentCollapseIndex] = useState();

  const handlePopoverOpen = (event, index) => {
    setPopoverAnchorEl(event.currentTarget);
    setOpenItemIndex(index);
    setOpenSubItemIndex(null);
    setOpenParentCollapseIndex(null);
  };

  const handleSubItemCollapse = (event, index, nestedIndex) => {
    setOpenSubItemIndex(openSubItemIndex === nestedIndex ? null : nestedIndex);

    if (!items[index]?.collapse[nestedIndex]?.collapse) {
      handlePopoverClose(); // Cierra el popover si no hay más elementos anidados
    } else if (openSubItemIndex === nestedIndex) {
      //importnte sin hacer else if al hacer click en un elmento de subcolpase el collpase padre seguira abierto perossi colcoamos else if desaparecera tanto la el colasp padre
      handlePopoverClose(); // Cierra el popover si no hay más elementos anidados al abrir subihsis tambien
    }
    event.stopPropagation();
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
    setOpenItemIndex(null);
    setOpenSubItemIndex(null);
  };

  const isOpen = Boolean(popoverAnchorEl);

  return (
    <div>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {renderTrigger((event) => handlePopoverOpen(event, index))}
          <Popover
            open={isOpen && openItemIndex === index}
            anchorEl={popoverAnchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            disableScrollLock={true} // Added
          >
            <List>
              {item.collapse &&
                item.collapse.map((nestedItem, nestedIndex) => (
                  <React.Fragment key={nestedIndex}>
                    <ListItem
                      button
                      onClick={(event) =>
                        handleSubItemCollapse(event, index, nestedIndex)
                      }
                      component={Link}
                      to={nestedItem.route}
                    >
                      <ListItemText primary={nestedItem.name} />
                    </ListItem>
                    {nestedItem.collapse && (
                      <Collapse
                        in={
                          isOpen &&
                          openItemIndex === index &&
                          openSubItemIndex === nestedIndex
                        }
                        timeout='auto'
                        unmountOnExit
                      >
                        <List disablePadding>
                          {nestedItem.collapse.map(
                            (subNestedItem, subNestedIndex) => (
                              <React.Fragment key={subNestedIndex}>
                                <ListItem
                                  button
                                  onClick={(event) =>
                                    handleSubItemCollapse(
                                      event,
                                      index,
                                      nestedIndex
                                    )
                                  }
                                  component={Link}
                                  to={subNestedItem.route}
                                >
                                  <ListItemText primary={subNestedItem.name} />
                                </ListItem>
                              </React.Fragment>
                            )
                          )}
                        </List>
                      </Collapse>
                    )}
                  </React.Fragment>
                ))}
            </List>
          </Popover>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CollapsiblePopover;
