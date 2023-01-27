import { useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import "../Content.css";

// TODO:AS another candidate for refactoring

const ItemsGrid = ({ items, columnDefs, onRowClick }) => {

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  const excelStyles = [
    {
      id: "numberType",
      numberFormat: {
        format: "0",
      },
    },
    {
      id: "currencyFormat",
      numberFormat: {
        format: "#,##0.00 €",
      },
    },
    {
      id: "negativeInBrackets",
      numberFormat: {
        format: "$[blue] #,##0;$ [red](#,##0)",
      },
    },
    {
      id: "booleanType",
      dataType: "Boolean",
    },
    {
      id: "stringType",
      dataType: "String",
    },
    {
      id: "dateType",
      dataType: "DateTime",
    },
  ];

  const cellClickedListener = useCallback((e) => {
    // TODO:AS remove
    console.log("Cell clicked", e);
    onRowClick(e.data);
  }, [onRowClick]);

  return (
    <div className="ag-theme-balham-dark content-view-content">
      <AgGridReact
        onCellClicked={cellClickedListener}
        rowData={items}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        excelStyles={excelStyles}
        //rowSelection='multiple'
        animateRows={true}
      />
    </div>
  );
};

export default ItemsGrid;
