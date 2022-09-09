import { useDispatch } from "react-redux/es/exports";
import CountriesHeader from "../header/CountriesHeader";
import { addCountry } from "../../../../reducers/countries/countriesSlice";
import AddCountry from "../forms/AddCountry";

const CountriesNewView = () => {
  const dispatch = useDispatch();

  const handleAddCountry = (country) => {
    dispatch(addCountry(country));
  };

  return (
    <div className="d-flex flex-column">
        <CountriesHeader menu_items={["Index"]} />
        <AddCountry onAddCountry={handleAddCountry} />
    </div>
  );
};

export default CountriesNewView;
