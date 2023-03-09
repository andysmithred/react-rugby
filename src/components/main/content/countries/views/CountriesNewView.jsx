import { useDispatch, useSelector } from "react-redux/es/exports";

import {
  fetchCountries,
  addCountry,
  setCountriesView,
} from "../../../../reducers/countries/countriesSlice";
import ItemsHeader from "../../common/ItemsHeader";
import AddCountry from "../forms/AddCountry";


const CountriesNewView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Countries")
  );

  const handleAddItem = (item) => {
    dispatch(addCountry(item));
    dispatch(fetchCountries());
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setCountriesView}
      />
      <AddCountry onAdd={handleAddItem} />
    </div>
  );
};

export default CountriesNewView;
