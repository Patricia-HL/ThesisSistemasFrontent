import React from 'react';
import { Box } from '@mui/system';
import CustomTable from '../../../../../components/shared/CustomTabble';
import PageBody from '../../../../../components/common/PageBody';

const GerenciaList = () => {
  const data = [
    { id: 1, name: 'Gerencia 1', description: 'Descripción 1' },
    { id: 2, name: 'Gerencia 2', description: 'Descripción 2' },
  ];

  const columns = [
    { id: 'name', label: 'Nombre' },
    { id: 'description', label: 'Descripción' },
  ];

  return (
    <PageBody>
      <CustomTable
        data={data}
        columns={columns}
      />
      <CustomTable
        data={data}
        columns={columns}
      />
      <CustomTable
        data={data}
        columns={columns}
      />
      <CustomTable
        data={data}
        columns={columns}
      />
      <CustomTable
        data={data}
        columns={columns}
      />
      <CustomTable
        data={data}
        columns={columns}
      />
    </PageBody>
  );
};

export default GerenciaList;
