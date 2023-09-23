import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  TableSortLabel,
  TableBody,
  Paper,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

const CustomTable = ({
  data,
  columns,
  initialPageRows = 5,
  rowsPerPageOptions = [5, 10, 25],
  rowsPerPageLabel = 'Filas por página',
  className,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(initialPageRows);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSortRequest = (cellId) => {
    const isAsc = orderBy === cellId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(cellId);
  };

  const getPaginatedData = () => {
    const sortedData = data.slice().sort((a, b) => {
      if (orderBy) {
        const aValue = a[orderBy];
        const bValue = b[orderBy];
        return aValue.localeCompare(bValue, undefined, { numeric: true });
      }
      return 0;
    });

    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return sortedData.slice(startIndex, endIndex);
  };

  return (
    <Paper className={className}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                sortDirection={orderBy === column.id ? order : false}
              >
                {column.disableSorting ? (
                  column.label
                ) : (
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={() => {
                      handleSortRequest(column.id);
                    }}
                  >
                    {column.label}
                    {orderBy === column.id ? (
                      <span style={visuallyHidden}>
                        {order === 'desc'
                          ? 'sorted descending'
                          : 'sorted ascending'}
                      </span>
                    ) : null}
                  </TableSortLabel>
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {getPaginatedData().map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {column.renderCell ? column.renderCell(row) : row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={rowsPerPageLabel}
      />
    </Paper>
  );
};

export default CustomTable;
