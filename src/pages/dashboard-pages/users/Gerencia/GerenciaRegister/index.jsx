import React from "react";
import ReusablePaper from "../../../../../components/common/ReusablePaper";
import { Box, Grid, Typography } from "@mui/material";
import ReusableButton from "../../../../../components/common/Button";
import ReusableTextField from "../../../../../components/common/TextField";
import { containerStyle } from "./gerencia_register.styles";
import PageBody from "../../../../../components/common/PageBody";
const GerenciaRegister = () => {
  return (
    <PageBody>
      <Box style={containerStyle.root}>
        <ReusablePaper style={containerStyle.paperStyle}>
          <Grid container style={containerStyle.paper_content}>
            <ReusableTextField
              style={containerStyle.inputStyle}
              label="Nombre del Permiso"
              type="text"
              name="dni"
            />
            <ReusableTextField
              style={containerStyle.inputStyle}
              label="Alias"
              type="text"
              name="name"
            />
            <ReusableButton style={containerStyle.buttonStyle}>
              Registrar Permisos
            </ReusableButton>
          </Grid>
        </ReusablePaper>
      </Box>
    </PageBody>
  );
};

export default GerenciaRegister;
