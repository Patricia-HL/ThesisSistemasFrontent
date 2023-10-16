import React from "react";
import ReusablePaper from "../../../../../components/common/ReusablePaper";
import { Box, Grid, Typography } from "@mui/material";
import ReusableButton from "../../../../../components/common/Button";
import ReusableTextField from "../../../../../components/common/TextField";
import { containerStyle } from "./liderempresaria.styles";
import PageBody from "../../../../../components/common/PageBody";
const LiderEmpresariaRegister = () => {
  return (
    <PageBody>
      <Box style={containerStyle.root}>
        <ReusablePaper style={containerStyle.paperStyle}>
          <Grid container style={containerStyle.paper_content}>
            <ReusableTextField
              style={containerStyle.inputStyle}
              label="Nombre de la Lider Empresaria"
              type="text"
              name="dni"
            />
            <ReusableTextField
              style={containerStyle.inputStyle}
              label="Apellidos"
              type="text"
              name="name"
            />
            <ReusableButton style={containerStyle.buttonStyle}>
              Registrar Lider Empresaria
            </ReusableButton>
          </Grid>
        </ReusablePaper>
      </Box>
    </PageBody>
  );
};

export default LiderEmpresariaRegister;
