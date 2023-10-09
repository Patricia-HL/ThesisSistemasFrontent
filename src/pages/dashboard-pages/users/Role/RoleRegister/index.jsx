import React from "react";

import { Box } from "@mui/system";
import ReusablePaper from "../../../../../components/common/ReusablePaper";
import ReusableButton from "../../../../../components/common/Button";
import { Typography, TextField } from "@mui/material";
import ReusableTextField from "../../../../../components/common/TextField";
const RoleRegister = () => {
  return (
    <Box mt={20}>
      <ReusablePaper>
        <Typography variant="h6">Registro de Rol</Typography>
        <ReusableTextField name="name" type="text" label="Registro de Rol" />
        <ReusableTextField
          name="alias_role"
          type="text"
          label="Alias del Rol"
        />
        <TextField name="name" type="text" label="Registro de Rol" />
        <input name="name" type="text" placeholder="asdasda" />
        <ReusableButton>Crear Rol</ReusableButton>
      </ReusablePaper>
    </Box>
  );
};

export default RoleRegister;
