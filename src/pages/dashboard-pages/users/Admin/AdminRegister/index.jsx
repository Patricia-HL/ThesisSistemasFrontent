import React from 'react';
import { containerStyle } from './admin._register.styles';
import { Box } from '@mui/system';
import PageBody from '../../../../../components/common/PageBody';
import ReusablePaper from '../../../../../components/common/ReusablePaper';
import { Button, Grid } from '@mui/material';
import ReusableButton from '../../../../../components/common/Button';
import ReusableTextField from '../../../../../components/common/TextField';
const AdminRegister = () => {
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
            <ReusableButton>Registrar Aministrador</ReusableButton>
          </Grid>
        </ReusablePaper>
      </Box>
    </PageBody>
  );
};

export default AdminRegister;
