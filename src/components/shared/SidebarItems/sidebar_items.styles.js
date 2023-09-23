export const getCustomStyles = (theme) => {
  return {
    sidebar: {
      backgroundColor: 'yellow',
      width: 260,
    },
    listItem: {
      background: 'yellow',
      // border: '1px solid yellow',
      textDecoration: 'none',

      '&:hover': {
        color: 'red',

        textDecoration: 'none',
      },
      cursor: 'pointer',
    },
    ListItemText: {
      color: 'red',
      textDecoration: 'none',

      '&:hover': {
        color: 'white',

        background: 'white',
        textDecoration: 'none',
      },
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '18px',
    },
  };
};
