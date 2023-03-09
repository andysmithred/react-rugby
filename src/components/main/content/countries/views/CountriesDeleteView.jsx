import { useDispatch, useSelector } from "react-redux";
import {
  deleteCountry,
  setCountriesView,
} from "../../../../reducers/countries/countriesSlice";
import ItemsHeader from "../../common/ItemsHeader";
import DeleteCountry from "../forms/DeleteCountry";

const CountriesDeleteView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Countries")
  );

  const handleDelete = (id) => {
    dispatch(deleteCountry(id));
  };

  const handleCancel = () => {
    dispatch(setCountriesView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setCountriesView}
      />
      <DeleteCountry onDelete={handleDelete} onCancel={handleCancel} />
    </div>
  );
};

export default CountriesDeleteView;
