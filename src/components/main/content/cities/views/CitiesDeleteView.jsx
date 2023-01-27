import { useDispatch, useSelector } from "react-redux";
import {
  deleteCity,
  setView,
} from "../../../../reducers/cities/citiesSlice";
import ItemsHeader from "../../common/ItemsHeader";
import DeleteCity from "../forms/DeleteCity";

const CitiesDeleteView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Cities")
  );

  const handleDelete = (id) => {
    dispatch(deleteCity(id));
  };

  const handleCancel = () => {
    dispatch(setView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setView}
      />
      <DeleteCity onDelete={handleDelete} onCancel={handleCancel} />
    </div>
  );
};

export default CitiesDeleteView;
