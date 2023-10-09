import React from "react";

import { Box } from "@mui/system";
import ReusablePaper from "../../../../../components/common/ReusablePaper";
import ReusableTextField from "../../../../../components/common/TextField";
import ReusableButton from "../../../../../components/common/Button";
import { Typography } from "@mui/material";

const GerenciaRegister = () => {
  return (
    <Box mt={20}>
      <ReusablePaper>
        <Typography variant="h6">Registro de Gerente</Typography>
        <ReusableTextField name="name" type="text" label="Nombre de Gerente" />
        <ReusableTextField name="surnames" Type="text" label="Codigo" />
        <ReusableTextField name="" Type="text" label="" />
        <ReusableTextField name="surnames" Type="text" label="apellidos" />
        <ReusableTextField name="surnames" Type="text" label="apellidos" />
        <ReusableButton>Crear Permiso</ReusableButton>
      </ReusablePaper>
    </Box>
  );
};

export default GerenciaRegister;
