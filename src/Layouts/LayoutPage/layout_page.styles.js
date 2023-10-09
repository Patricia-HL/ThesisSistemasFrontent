export const getCustomStyles = (theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
      width: "100%",
      backgroundImage:
        "radial-gradient(circle at center, rgb(189, 195, 199) 0.00%,rgb(238, 39, 95) 100.00%)",
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
