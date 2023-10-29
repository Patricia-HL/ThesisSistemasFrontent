export const getCustomStyles = (theme) => {
  return {
    root: {
      display: 'flex',
      backgroundImage:
        'radial-gradient(circle at center, rgb(189, 195, 199) 0.00%,rgb(217, 106, 73) 100.00%)',
      minHeight: '100vh',
      width: '100%',
    },
    appBar: {
      color: '#ffffff',
      backgroundColor: theme.palette.contained.main,
      zIndex: theme.zIndex.drawer + 1,
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${theme.drawerWidth}px)`,
        marginLeft: theme.drawerWidth,
      },
    },
    menuButton: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    drawer: {
      backgroundColor: theme.palette.contained.light,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    sidebarStyle: {
      width: 260, // Ancho del ListItem dentro del collapse
      paddingRight: '10px',
      borderRadius: '8px', // Borde redondeado
      cursor: 'pointer',
      // border: '1px solid #ddd', // Borde del ListItem dentro del collapse
    },
    listItemStyle: {
      backgroundColor: theme.palette.contained.dark,
      paddingRight: '10px',
      borderRadius: '8px', // Estilo del borde redondeado
      marginBottom: '4px', // Espaciado entre elementos
    },
    listItemTextStyle: {
      color: '#333333',

      '&:hover': {
        color: theme.palette.secondary.dark,
        backgroundColor: 'transparent',
      },
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '88px',
    },
  };
};
