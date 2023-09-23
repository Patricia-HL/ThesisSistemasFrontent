import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useStyles } from './footer.styles';
const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root_footer}>
      <Grid
        container
        spacing={2}
        className={classes.grid_footer}
      >
        <Grid
          item
          xs={12}
        >
          <Typography
            variant='h6'
            className={classes.title_footer}
          >
            Copyright2023
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            variant='body2'
            className={classes.text_footer}
          >
            © {new Date().getFullYear()} Blecorop Potosi. Todos los derechos
            reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
