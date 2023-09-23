import React from 'react';
import { Box } from '@mui/material';

import { useStyles } from './page_body.styles';
const PageBody = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.pageBody}>{children}</Box>;
};

export default PageBody;
