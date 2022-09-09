import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux/es/exports";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import "../views/CountriesViews.css";

const CountriesGrid = () => {
  const countries = useSelector((state) => state.countries.items);

  const colDefs = [
    { field: "countryId" },
    { field: "name" },
    { field: "fullname" },
    { field: "population" },
    { field: "area" },
    { field: "highestPoint" },
    { field: "highestPointName" },
    { field: "isoCode" },
    { field: "coastline" },
    { field: "landBoundries" },
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
    <div className="ag-theme-balham-dark country-view-content">
      <AgGridReact
        onCellClicked={cellClickedListener}
        rowData={countries}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        //rowSelection='multiple'
        animateRows={true}
      />
    </div>
  );
};

export default CountriesGrid;
