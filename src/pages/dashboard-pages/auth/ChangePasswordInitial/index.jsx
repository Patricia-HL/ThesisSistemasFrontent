import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ReusableDialog from '../../../../components/common/ReusableDialog';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/authActions/loginActions';
const ChangePasswordInitial = () => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(true);

  const handleCloseDialog = () => {
    dispatch(logout()); // Dispara la acción de logout
  };

  const dialogContent = (
    <div>
      <p>Este es el contenido del diálogo.</p>
    </div>
  );

  const dialogActions = [
    {
      label: 'Cancelar',
      onClick: handleCloseDialog,
      color: 'primary',
    },
    {
      label: 'Guardar',

      color: 'primary',
    },
  ];

  return (
    <Box mt={40}>
      <ReusableDialog
        open={openDialog}
        onClose={handleCloseDialog}
        title='Título del Diálogo'
        content={dialogContent}
        actions={dialogActions}
      />
    </Box>
  );
};

export default ChangePasswordInitial;
