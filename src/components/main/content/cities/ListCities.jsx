import { useDispatch, useSelector } from "react-redux";
import CityTile from "./CityTile";
import FilterableContentList from "../common/FilterableContentList";
import { filterCities } from "../../../reducers/cities/citiesSlice";
import "./ListCities.css";

const ListCities = () => {
    const dispatch = useDispatch();
    const cities = useSelector((state) => state.cities.items);
    const filter = useSelector((state) => state.cities.filter);
    const category = useSelector((state) => state.categories.selected);
    const items = [];

    const handleFilterTextChange = (filter) => dispatch(filterCities(filter));

    cities.forEach(city => {
      // Check if name is filtered out
      if (city.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
        return;
      }
      items.push(<CityTile icon={category.icon} city={city} key={city.id} />);
    });

    return (
      <div className="list-cities">
        <FilterableContentList
          onFilterTextChange={handleFilterTextChange}
          items={items}
          filter={filter}
        />
      </div>
    );
}

export default ListCities;
    