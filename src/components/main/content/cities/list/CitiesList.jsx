import { useDispatch, useSelector } from "react-redux";
import FilterableContentList from "../../common/FilterableContentList";
import ListTile from "../../common/ListTile";
import { fetchCity, filterCities } from "../../../../reducers/cities/citiesSlice";

import "./CitiesList.css";

const CitiesList = () => {
    const dispatch = useDispatch();
    const cities = useSelector((state) => state.cities.items);
    const filter = useSelector((state) => state.cities.filter);
    const category = useSelector((state) => state.categories.selected);
    const items = [];

    const handleFilterTextChange = (filter) => dispatch(filterCities(filter));

    const handleItemClick = (id) => {
      dispatch(fetchCity(id));
    }

    cities.forEach(city => {
      // Check if name is filtered out
      if (city.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
        return;
      }
      items.push(
        <ListTile
          key={city.cityId}
          id={city.cityId}
          primary={city.name}
          secondary={city.region.name}
          icon={category.icon}
          onItemClick={handleItemClick}
        />
      );
    });

    return (
      <div className="cities-list">
        <FilterableContentList
          onFilterTextChange={handleFilterTextChange}
          items={items}
          filter={filter}
        />
      </div>
    );
}

export default CitiesList;
    