import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export default ({pagination, handleChangePage, handleChangeRowsPerPage}) => {
  const { number=1, size=10, total=0 } = pagination;
  return (
    <TablePagination
      rowsPerPageOptions={[ 5, 10, 20]}
      component="div"
      count={total}
      rowsPerPage={Number(size)}
      page={Number(number-1)}
      backIconButtonProps={{
        'aria-label': 'Previous Page',
      }}
      nextIconButtonProps={{
        'aria-label': 'Next Page',
      }}
      onChangePage={(event, page) => handleChangePage(page+1)}
      onChangeRowsPerPage={(event) => handleChangeRowsPerPage(event.target.value)}
    />
  )
};