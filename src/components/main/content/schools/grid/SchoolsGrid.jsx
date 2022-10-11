import { useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import "../../Content.css";

const SchoolsGrid = ({ items }) => {
  const colDefs = [
    { field: "schoolId" },
    { field: "name" },
    { field: "city.name" },
    { field: "founded" },
    { field: "schoolType.type" },
    { field: "latitude" },
    { field: "longitude" },
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
        rowData={items}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        //rowSelection='multiple'
        animateRows={true}
      />
    </div>
  );
};

export default SchoolsGrid;
