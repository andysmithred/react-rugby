import { useSelector, useDispatch } from "react-redux";
import { setCountriesView, fetchCountry } from "../../../../reducers/countries/countriesSlice";
import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const CountriesIndexView = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.countries.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Countries")
  );

  const rowClickedHandler = (data) => {
    dispatch(fetchCountry(data.countryId));
    dispatch(setCountriesView("details"));
  }

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
    { field: "fullName" },
    { field: "isocode" },
    { field: "population", valueFormatter: populationFormatter },
    { field: "area", valueFormatter: areaFormatter },
    { field: "highestPoint", valueFormatter: hightestPointFormatter },
    { field: "highestPointName" },
    { field: "coastline", valueFormatter: coastlineFormatter },
    { field: "landBoundries", valueFormatter: landBoundriesFormatter },
    { field: "complete" }
  ];

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Details", "New"]}
        category={category}
        setView={setCountriesView}
      />
      <ItemsGrid
        items={items}
        columnDefs={colDefs}
        onRowClick={rowClickedHandler}
      />
    </div>
  );
};

export default CountriesIndexView;
