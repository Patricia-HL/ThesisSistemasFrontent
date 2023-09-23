import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { basePaperStyle } from './reusable_paper.styles';

const ReusablePaper = ({ title, children, style }) => {
  // Combina los estilos base con los estilos personalizados
  const combinedStyle = {
    ...basePaperStyle, // Estilos base
    ...style, // Estilos personalizados
  };

  return (
    <Paper
      elevation={3}
      style={combinedStyle}
    >
      {title && <Typography variant='h6'>{title}</Typography>}
      {children}
    </Paper>
  );
};

export default ReusablePaper;
