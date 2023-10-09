export const getCustomStyles = (theme) => {
  return {
    root: {
      display: "flex",
      backgroundImage:
        "radial-gradient(circle at center, rgb(189, 195, 199) 0.00%,rgb(217, 106, 73) 100.00%)",
      minHeight: "100vh",
      width: "100%",
    },
    appBar: {
      color: "#ffffff",
      backgroundColor: theme.palette.contained.main,
      zIndex: theme.zIndex.drawer + 1,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${theme.drawerWidth}px)`,
        marginLeft: theme.drawerWidth,
      },
    },
    menuButton: {
      [theme.breakpoints.up("md")]: {
        display: "none",
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
