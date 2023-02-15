import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchCities,
  updateCity,
  setCitiesView,
} from "../../../../reducers/cities/citiesSlice";
import ItemsHeader from "../../common/ItemsHeader";
import EditCity from "../forms/EditCity";

const CitiesEditView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Cities")
  );

  const handleEdit = (updated) => {
    dispatch(updateCity(updated));
    dispatch(fetchCities());
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setCitiesView}
      />
      <EditCity onEdit={handleEdit} />
    </div>
  );
};

export default CitiesEditView;
