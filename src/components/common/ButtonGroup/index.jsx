import React from 'react';
import Button from '@mui/material/Button';

const ButtonGroup = ({ buttons }) => {
  return (
    <div>
      {buttons.map((button, index) => (
        <Button
          key={index}
          component={button.component}
          to={button.route}
          variant='outlined' // Puedes ajustar el estilo del botón aquí
        >
          {button.name}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
