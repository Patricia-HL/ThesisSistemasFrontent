import React from 'react';
import Comentarios from '../../Comentarios';
import { Box } from '@mui/material';

const Confeencias = () => {
  return (
    <div>
      <Box mt={20}>
        {' '}
        <h1>Confeencias</h1>
        <Comentarios />
      </Box>
    </div>
  );
};

export default Confeencias;
