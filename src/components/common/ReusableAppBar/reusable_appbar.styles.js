// reusable_appbar.styles.js
export const getCustomStyles = (theme) => {
  return {
    appBar: {
      backgroundColor: theme.palette.contained.dark,
      position: 'fixed',
      zIndex: 1, // Agrega el zIndex para la elevación
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: theme.spacing(0, 0.1, 0, 0.2),
      padding: theme.spacing(0, 0.5, 0, 0.5),
      alignItems: 'center',
    },
    menuButton: {
      edge: (buttonPosition) => (buttonPosition === 'right' ? 'end' : 'start'),
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.inherit.contrastText,
    },
    title: {
      color: theme.palette.primary.contrastText,
      fontWeight: 'bold',
      fontSize: '1.7rem',

      flexGrow: 3,
    },
    navbaritem: {
      borderRadius: '10px',
      backgroundColor:
        'radial-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgb(255, 255, 255)',
    },
    button: {
      background: theme.palette.primary.main,
      border: '2px solid brown',
      borderRadius: '10px',
      fontWeight: 'bold',
      color: theme.palette.primary.contrastText,
    },
    btnlogout: {
      background: theme.palette.primary.main,
      border: '2px solid brown',
      borderRadius: '10px',
      fontWeight: 'bold',
      color: theme.palette.primary.contrastText,
    },
    textField: {
      width: '100%',
      borderRadius: '5px',
      padding: '0.1rem',
    },
    table: {
      border: '1px solid black',
      width: '100%',
    },
  };
};
