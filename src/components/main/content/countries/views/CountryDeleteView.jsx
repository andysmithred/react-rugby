import { useDispatch } from "react-redux";
import {
  deleteCountry,
  setCountriesView,
} from "../../../../reducers/countries/countriesSlice";
import CountriesHeader from "../header/CountriesHeader";
import DeleteCountry from "../forms/DeleteCountry";

const CountryDeleteView = () => {
  const dispatch = useDispatch();

  const handleDeleteCountry = (id) => {
    dispatch(deleteCountry(id));
  };

  const handleCancel = () => {
    dispatch(setCountriesView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <CountriesHeader menu_items={["Index", "Details"]} />
      <DeleteCountry
        onDeleteCountry={handleDeleteCountry}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default CountryDeleteView;
