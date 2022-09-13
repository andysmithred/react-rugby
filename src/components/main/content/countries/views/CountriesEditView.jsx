import { useDispatch } from "react-redux/es/exports";
import CountriesHeader from "../header/CountriesHeader";
import EditCountry from "../forms/EditCountry";
import { updateCountry } from "../../../../reducers/countries/countriesSlice";

const CountriesEditView = () => {
  const dispatch = useDispatch();

  const handleEditCountry = (updatedCountry) => {
    dispatch(updateCountry(updatedCountry));
  };
  
  return (
    <div className="d-flex flex-column">
      <CountriesHeader menu_items={["Index", "Details"]} />
      <EditCountry onEditCountry={handleEditCountry} />
    </div>
  );
};

export default CountriesEditView;
