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
      // ... Otros estilos del listItem
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '18px',
      color: 'white',
      cursor: 'pointer',

      '&:hover': {
        color: theme.palette.secondary.dark,
        backgroundColor: 'transparent',
      },
      '&:active': {
        // Estilos para el estado activo
        backgroundColor: 'blue', // Cambia a tu color deseado
        color: 'white', // Cambia a tu color deseado
        // Otras propiedades de estilo para el estado activo
      },
    },
    ListItemText: {
      textDecoration: 'none',
      cursor: 'pointer',
    },
  };
};
