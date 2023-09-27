import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Backdrop, // Importa Backdrop de Material-UI
} from '@mui/material';

const ReusableDialog = ({
  open,
  onClose,
  title,
  content,
  actions,
  style,
  overlayColor,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      BackdropComponent={Backdrop} // Usa Backdrop como componente de fondo
      BackdropProps={{
        style: {
          backgroundColor: overlayColor, // Establece el color de fondo del Backdrop
          ...style, // Aplica cualquier estilo personalizado
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button
            key={index}
            onClick={action.onClick}
            color={action.color}
          >
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default ReusableDialog;
