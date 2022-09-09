import { useDispatch } from "react-redux/es/exports";
import CitiesHeader from "../header/CitiesHeader";
import AddCity from "../forms/AddCity";
import { addCity } from "../../../../reducers/cities/citiesSlice";

const CitiesNewView = () => {
  const dispatch = useDispatch();

  const handleAddCity = (city) => {
    dispatch(addCity(city));
  };

  return (
    <div className="d-flex flex-column">
      <CitiesHeader menu_items={["Index"]} />
      <AddCity onAddCity={handleAddCity} />
    </div>
  );
};

export default CitiesNewView;
