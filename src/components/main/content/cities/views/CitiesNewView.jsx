import { useDispatch, useSelector } from "react-redux/es/exports";

import {
  fetchCities,
  addCity,
  setCitiesView,
} from "../../../../reducers/cities/citiesSlice";
import ItemsHeader from "../../common/ItemsHeader";
import AddCity from "../forms/AddCity";


const CitiesNewView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Cities")
  );

  const handleAddItem = (item) => {
    dispatch(addCity(item));
    dispatch(fetchCities());
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setCitiesView}
      />
      <AddCity onAdd={handleAddItem} />
    </div>
  );
};

export default CitiesNewView;
