import React from "react";
import ReusablePaper from "../../../../../components/common/ReusablePaper";
import { Box, Typography } from "@mui/material";
import ReusableButton from "../../../../../components/common/Button";
import ReusableTextField from "../../../../../components/common/TextField";
import { containerStyle } from "./permission.styles";
const PermisionRegister = () => {
  return (
    <Box mt={20}>
      <ReusablePaper style={containerStyle.paperStyle}>
        <Typography variant="h6">Registro de Permiso</Typography>
        <ReusableTextField
          style={containerStyle.textFieldStyle}
          name="name"
          type="text"
          label="Nombre del Permiso"
        />
        <ReusableTextField
          name="alias_permission"
          Type="text"
          label="Alias del Permiso"
        />{" "}
        <ReusableButton style={containerStyle.buttonStyle}>
          Crear Permiso
        </ReusableButton>
      </ReusablePaper>
    </Box>
  );
};

export default PermisionRegister;
