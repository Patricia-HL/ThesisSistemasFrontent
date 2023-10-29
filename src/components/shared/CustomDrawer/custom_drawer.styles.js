export const getCustomStyles = (theme) => {
  return {
    drawer: {
      width: 260,
      
      // Cambia el color de fondo aquí
      [`& .MuiDrawer-paper`]: {
        width: 260,
        backgroundColor: 'salmon',
      },
    },

    container: {
      backgroundColor: theme.palette.secondary.main,

      alignItems: 'center',
      padding: theme.spacing(1, 0.5, 1, 0.5),
      margin: theme.spacing(0.5, 0, 0.5, 0),
    },
    containerItems: {
      backgroundColor: theme.palette.secondary.main,
      position: 'relative',
    },
    title: {
      //  border: `1px solid ${theme.palette.secondary.contrastText}`,
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
      padding: theme.spacing(1.5),
      margin: theme.spacing(0.5, 0, 0.5, 0),
      fontSize: theme.typography.pxToRem(22),
      fontWeight: theme.typography.fontWeightMedium,
      gutterBottom: true,
    },
  };
};
