import { useSelector, useDispatch } from "react-redux";
import { setView, fetchCity } from "../../../../reducers/cities/citiesSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const CitiesIndexView = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cities.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Cities")
  );

  const populationFormatter = (params) => {
    if (params.data.population) {
      return params.data.population.toLocaleString("en-GB");
    } else {
      return "--";
    }
  };

  const rowClickedHandler = (data) => {
    dispatch(fetchCity(data.cityId));
    dispatch(setView("details"));
  }

  const colDefs = [
    { field: "cityId" },
    { field: "name" },
    { field: "region" },
    { field: "country" },
    // { headerName: "Capital", field: "isCapital" },
    { field: "population", valueFormatter: populationFormatter },
    // { headerName: "Latitude", field: "latitudeDegrees" },
    { headerName: "Latitude", field: "latitude" },
    // { headerName: "Longitude", field: "longitudeDegrees" },
    { headerName: "Longitude", field: "longitude" },
    { field: "schools" },
    { field: "stadia" },
    { field: "players" },
    // { field: "coaches" },
    // { field: "referees" }
    { field: "complete" }
  ];

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Details", "New"]}
        category={category}
        setView={setView}
      />
      <ItemsGrid
        items={items}
        columnDefs={colDefs}
        onRowClick={rowClickedHandler}
      />
    </div>
  );
};

export default CitiesIndexView;
