import React, { useState } from 'react';

const useSidebarItemState = (initialState) => {
  const [openItems, setOpenItems] = useState(initialState);

  const toggleItem = (itemName, subItems) => {
    setOpenItems((prevOpenItems) => {
      const newOpenItems = {
        ...prevOpenItems,
        [itemName]: !prevOpenItems[itemName],
      };

      // Activa o desactiva todos los elementos secundarios si es un botón principal
      if (subItems && newOpenItems[itemName]) {
        const updatedOpenItems = { ...newOpenItems };
        subItems.forEach((subItem) => {
          updatedOpenItems[subItem.name] = true;
        });
        return updatedOpenItems;
      }

      return newOpenItems;
    });
  };

  const isItemOpen = (itemName) => openItems[itemName] || false;

  const activateItem = (itemName) => {
    setOpenItems({ [itemName]: true });
  };

  return { toggleItem, isItemOpen, activateItem };
};

export default useSidebarItemState;
