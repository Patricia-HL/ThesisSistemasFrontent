import React from 'react';
import { containerStyle } from './gerencia_register.styles';
import { Box } from '@mui/system';
import ReusablePaper from '../../../../../components/common/ReusablePaper';
import ReusableTextField from '../../../../../components/common/TextField';
import ReusableButton from '../../../../../components/common/Button';
import PageBody from '../../../../../components/common/PageBody';

import { Button, Grid } from '@mui/material';

const GerenciaRegister = () => {
  return (
    <PageBody>
      <Box style={containerStyle.root}>
        <ReusablePaper style={containerStyle.paperStyle}>
          <Grid
            container
            style={containerStyle.paper_content}
          >
            <ReusableTextField
              label='Nombre'
              type='text'
              name='name'
            />
            <ReusableTextField
              label='Nombre'
              type='text'
              name='name'
            />
            <ReusableTextField
              label='Nombre'
              type='text'
              name='name'
            />
            <ReusableTextField
              label='Nombre'
              type='text'
              name='name'
            />
            <ReusableTextField
              label='Nombre'
              type='text'
              name='name'
            />{' '}
            <ReusableButton>Registrar Gerente</ReusableButton>
          </Grid>
        </ReusablePaper>
      </Box>
    </PageBody>
  );
};

export default GerenciaRegister;
