import { useDispatch, useSelector } from "react-redux";
import FilterableContentList from "../../common/FilterableContentList";
import ListTile from "../../common/lists/ListTile";
import { fetchCountry, filterCountries } from "../../../../reducers/countries/countriesSlice";

import "./CountriesList.css";

const CountriesList = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.items);
  const filter = useSelector((state) => state.countries.filter);
  const category = useSelector((state) => state.categories.selected);
  const items = [];

  const handleFilterTextChange = (filter) => dispatch(filterCountries(filter));

  const handleItemClick = (id) => {
    dispatch(fetchCountry(id));
  };

  countries.forEach((country) => {
    // Check if name is filtered out
    if (country.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
      return;
    }
    items.push(
      <ListTile
        key={country.countryId}
        id={country.countryId}
        primary={country.name}
        secondary={country.fullName ? country.fullName : "--"}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="countries-list">
      <FilterableContentList
        onFilterTextChange={handleFilterTextChange}
        items={items}
        filter={filter}
      />
    </div>
  );
};

export default CountriesList;
