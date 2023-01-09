import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux/es/exports";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import "../views/CountriesViews.css";

const CountriesGrid = () => {
  const countries = useSelector((state) => state.countries.items);

  const populationFormatter = (params) => {
    return formatNumber(params.data.population);
  };

  const areaFormatter = (params) => {
    return formatNumber(params.data.area);
  };

  const hightestPointFormatter = (params) => {
    return formatNumber(params.data.highestPoint);
  };

  const coastlineFormatter = (params) => {
    return formatNumber(params.data.coastline);
  };

  const landBoundriesFormatter = (params) => {
    return formatNumber(params.data.landBoundries);
  };

  const formatNumber = number => {
    if (number) {
      return number.toLocaleString("en-GB");
    } else {
      return "--";
    }
  }

  const colDefs = [
    { field: "countryId" },
    { field: "name" },
    { field: "fullname" },
    { field: "population", valueFormatter: populationFormatter },
    { field: "area", valueFormatter: areaFormatter },
    { field: "highestPoint", valueFormatter: hightestPointFormatter },
    { field: "highestPointName" },
    { field: "isoCode" },
    { field: "coastline", valueFormatter: coastlineFormatter },
    { field: "landBoundries", valueFormatter: landBoundriesFormatter },
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
