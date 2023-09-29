export const getCustomStyles = (theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
      width: "100%",
      //  backgroundColor: 'red',
    },
    appBar: {
      //  backgroundColor: theme.palette.contained.main,
      backgroundColor: "red",
    },
    drawer: {
      backgroundColor: theme.palette.contained.dark,
    },
    sidebar: {},

    listItem: {
      marginRight: "20px",
      background: "#09FAE7",

      // border: '2px solid #3EA766',
    },
    ListItemText: {
      background: "#09FAE7",
    },
  };
};
