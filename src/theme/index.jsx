import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          margin: 0,
          padding: 0,
          overflow: 'scroll',
          /* Otros estilos globales si es necesario */
        },
      },
    },
    MuiDrawer: {
      paper: {
        width: 260, // Tus estilos personalizados aquí
        backgroundColor: '#212121',
      },
    },
  },
  palette: {
    primary: {
      main: '#E67A37',
      dark: '#E67A37',
      light: '#E67A37',
      contrastText: '#fff',
    },
    secondary: {
      main: '#E63319',
      dark: '#E63319',
      light: '#E63319',
      contrastText: '#fff',
    },
    inherit: {
      main: '#E67A37',
      dark: '#E67A37',
      light: '#E67A37',
      contrastText: '#fff',
    },
    contained: {
      main: '#DE9735',
      dark: '#DE6635',
      light: '#F59247',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Arial, sans-serif', // Cambia la familia de fuentes según tus necesidades
    fontWeight: 'bold', // Establecer el peso de la fuente en negrita por defecto
    h1: {
      fontSize: '10rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      // Puedes agregar o modificar los breakpoints según tus necesidades
    },
  },
  // Agrega otras configuraciones de tema según sea necesario
});

export default theme;
