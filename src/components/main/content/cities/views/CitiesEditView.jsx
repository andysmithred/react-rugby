import { useDispatch } from "react-redux/es/exports";
import CitiesHeader from "../header/CitiesHeader";
import { updateCity } from "../../../../reducers/cities/citiesSlice";
import EditCity from "../forms/EditCity";

const CitiesEditView = () => {
  const dispatch = useDispatch();

  const handleEditCity = (updatedCity) => {
    console.log("IN >> handleEditCity");
    console.log(updatedCity);
    dispatch(updateCity(updatedCity));
  };

  return (
    <div className="d-flex flex-column">
      <CitiesHeader menu_items={["Index", "Details"]} />
      <EditCity onEditCity={handleEditCity} />
    </div>
  );
};

export default CitiesEditView;
