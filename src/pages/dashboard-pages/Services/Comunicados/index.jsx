import React from 'react';
import Comentarios from '../../Comentarios';
import { Box } from '@mui/material';

const Comunicados = () => {
  return (
    <div>
      <Box mt={20}>
        {' '}
        <h1>Comunicados</h1>
        <Comentarios />
      </Box>
    </div>
  );
};

export default Comunicados;
