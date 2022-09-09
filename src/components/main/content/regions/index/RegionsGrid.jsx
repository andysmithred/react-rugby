import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux/es/exports";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import "../views/RegionsViews.css";

const RegionsGrid = () => {
  const regions = useSelector((state) => state.regions.items);

  const colDefs = [
    { field: "regionId" },
    { field: "name" },
    { field: "country.name" },
    { field: "numberCities" },
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
    <div className="ag-theme-balham-dark region-view-content">
      <AgGridReact
        onCellClicked={cellClickedListener}
        rowData={regions}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        //rowSelection='multiple'
        animateRows={true}
      />
    </div>
  );
};

export default RegionsGrid;
