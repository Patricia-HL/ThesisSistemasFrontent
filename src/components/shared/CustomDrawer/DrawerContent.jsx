import React from 'react';
import { Grid, Divider, Box, Typography, useTheme } from '@mui/material';
import { getCustomStyles } from './custom_drawer.styles';

const DrawerContent = ({ items }) => {
  const Theme = useTheme();
  const customStyles = getCustomStyles(Theme);
  return (
    <Box
      style={{
        overflow: 'hidden',
        overflowY: 'auto',
      }}
    >
      <Grid
        container
        style={{
          justifyContent: 'center',
          margin: '0.7rem',
        }}
      >
        <Typography
          variant='h6'
          gutterBottom
        >
          Belcorp Potosí
        </Typography>
      </Grid>
      <Divider />
      {items}
    </Box>
  );
};

export default DrawerContent;
