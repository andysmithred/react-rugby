import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchCountries,
  updateCountry,
  setCountriesView,
} from "../../../../reducers/countries/countriesSlice";
import ItemsHeader from "../../common/ItemsHeader";
import EditCountry from "../forms/EditCountry";

const CountriesEditView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Countries")
  );

  const handleEdit = (updated) => {
    dispatch(updateCountry(updated));
    dispatch(fetchCountries());
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setCountriesView}
      />
      <EditCountry onEdit={handleEdit} />
    </div>
  );
};

export default CountriesEditView;
