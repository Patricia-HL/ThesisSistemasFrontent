import React from "react";
import { Button, TextField } from "@mui/material";
import { useStyles } from "./button.styles";
const MyButton = () => {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.root}>Button Hook</Button>
      <TextField
        className={classes.textfield}
        label='Text'
      />
    </>
  );
};
export default MyButton;
