import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux/es/exports";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import "../views/CitiesViews.css";

const CitiesGrid = () => {
  const cities = useSelector((state) => state.cities.items);

  const numberFormatter = (params) => {
    if (params.data.population) {
      return params.data.population.toLocaleString("en-GB");
    } else {
      return "--";
    }
  };

  const cityColDefs = [
    { field: "cityId" },
    { field: "name" },
    { field: "region.name" },
    { field: "region.country" },
    { field: "population", valueFormatter: numberFormatter },
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
    <div className="ag-theme-balham-dark city-view-content">
      <AgGridReact
        onCellClicked={cellClickedListener}
        rowData={cities}
        columnDefs={cityColDefs}
        defaultColDef={defaultColDef}
        //rowSelection='multiple'
        animateRows={true}
      />
    </div>
  );
};

export default CitiesGrid;
