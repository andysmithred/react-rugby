import { useDispatch } from "react-redux";
import { fetchCountry, setCountriesView } from "../../../../reducers/countries/countriesSlice";

import Link from "../../common/links/Link";

import "./RegionLinks.css";


const RegionLinks = ({ region }) => {
    const dispatch = useDispatch();

    const handleCountryClicked = (id) => {
      dispatch(fetchCountry(id));
      dispatch(setCountriesView("details"));
    }

    let items = [];
    items.push(
        <Link 
            id={region.countryId} 
            categoryName="Countries" 
            title={region.country.name} 
            onItemClick={handleCountryClicked} 
        />
    );

    return <div className="mt-1 pb-1 region-links">
        {items}
    </div>;
}

export default RegionLinks;