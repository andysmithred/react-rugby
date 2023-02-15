import { useSelector, useDispatch } from "react-redux";
import { fetchCountry, setView } from "../../../../reducers/countries/countriesSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import { getFullPathImage } from "../../../../utils/ImageDetails";

import "./CountryLink.css";


const CountryLink = ({ country }) => {
    const dispatch = useDispatch();
    const category = useSelector((state) =>
        state.categories.items.find((c) => c.name === "Countries")
    );  

    const handleItemClick = (category, id) => {
      dispatch(fetchCountry(id));
      dispatch(setView("details"));
      dispatch(setCategory(category));
    }

    return (
      <div
        className="country-link"
        onClick={() => handleItemClick(category, country.countryId)}
      >
        <div>
          <img src={category.icon} className="image" alt={category.name} />
        </div>
        <div className="details">
          <div className="title">{country.name}</div>
        </div>
        <div>
          <img
            src={getFullPathImage("forward")}
            className="arrow"
            alt="arrow"
          />
        </div>
      </div>
    );
}

export default CountryLink;