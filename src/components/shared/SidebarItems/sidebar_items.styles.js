export const getCustomStyles = (theme) => {
  return {
    sidebar: {
      // backgroundColor: '#f5f5f5',
      width: 260,
      margin: theme.spacing(0.5), // Utilizando el sistema de espaciado del theme de Material-UI
      borderRadius: '8px', // Reflejando la forma de los elementos del primer bloque
      transition: 'all .5s', // Transición similar al primer bloque
    },
    listItem: {
      paddingRight: '5px',
      fontWeight: 'bold',
      fontSize: '18px',
      color: 'white',
      cursor: 'pointer',

      '&:hover': {
        color: theme.palette.secondary.dark,
        backgroundColor: 'transparent',
      },
   
    },
    ListItemText: {
      textDecoration: 'none',
      cursor: 'pointer',
    },
  };
};
