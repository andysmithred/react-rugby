import { useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import "../../Content.css";

const SchoolTypesGrid = ({ schoolTypes }) => {
  const colDefs = [
    { field: "schoolTypeId" },
    { field: "type" },
    { field: "numberSchools" },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  const cellClickedListener = useCallback((e) => {
    console.log("Cell clicked", e);
  }, []);

  return (
    <div className="ag-theme-balham-dark content-view-content">
      <AgGridReact
        onCellClicked={cellClickedListener}
        rowData={schoolTypes}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        //rowSelection='multiple'
        animateRows={true}
      />
    </div>
  );
};

export default SchoolTypesGrid;
