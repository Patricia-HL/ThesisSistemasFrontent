import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import { useStyles } from "./footer.styles";
const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root_footer}>
      <Grid container spacing={2} className={classes.grid_footer}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title_footer}>
            Tres marcas que te llevan al exito Ésika, L´bel y Cyzone
          </Typography>
          <Grid container spacing={1} className={classes.avatars}>
            {" "}
            <Avatar>W</Avatar>
            <Avatar>F</Avatar>
            <Avatar>I</Avatar>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className={classes.text_footer}>
            © {new Date().getFullYear()} Belcorp Potosi. Todos los derechos
            reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
