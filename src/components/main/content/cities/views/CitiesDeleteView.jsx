import { useDispatch } from "react-redux";
import { deleteCity, setView } from "../../../../reducers/cities/citiesSlice";
import DeleteCity from "../forms/DeleteCity";
import CitiesHeader from "../header/CitiesHeader";

const CitiesDeleteView = () => {
  const dispatch = useDispatch();

  const handleDeleteCity = (id) => {
    console.log(`DELETE: ${id}`);
    dispatch(deleteCity(id));
  };

  const handleCancel = () => {
    console.log("Cancelling");
    dispatch(setView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <CitiesHeader menu_items={["Index", "Details"]} />
      <DeleteCity onDeleteCity={handleDeleteCity} onCancel={handleCancel} />
    </div>
  );
};

export default CitiesDeleteView;
