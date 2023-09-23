import { makeStyles } from '@mui/styles';

const appBarAndToolbarHeight = 64; // Ajusta este valor según la altura real de tu AppBar y Toolbar

export const useStyles = makeStyles((theme) => ({
  pageBody: {
    marginTop: appBarAndToolbarHeight, // Aplica el margen superior para evitar superposiciones
    border: '1px solid red',

    width: '100%',
  },
}));
