export const getCustomStyles = (theme) => {
  return {
    root: {
      display: 'flex',
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
  };
};
