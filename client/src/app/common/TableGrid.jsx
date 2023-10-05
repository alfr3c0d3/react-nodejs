import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const TableGrid = ({ columns, data }) => {
  // Use destructuring and reduce to create the columnVisibilityModel object
  const columnVisibilityModel = columns.filter((item) => item.hide === true)
    .reduce((result, column) => {
      return {
        ...result,
        [column.field]: false,
      };
    }, {});

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{ '& .MuiDataGrid-columnSeparator': { display: 'none' } }}
        rows={data}
        columns={columns}
        initialState={{
          columns: {
            columnVisibilityModel: columnVisibilityModel,
          },
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
      />
    </Box>
  );
};

export default TableGrid;

