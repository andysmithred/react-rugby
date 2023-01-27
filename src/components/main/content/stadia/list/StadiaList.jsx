import { useDispatch, useSelector } from "react-redux";
import FilterableContentList from "../../common/FilterableContentList";
import ListTile from "../../common/lists/ListTile";
import {
  fetchStadium,
  filterStadia,
} from "../../../../reducers/stadia/stadiaSlice";

import "./StadiaList.css";

const StadiaList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.stadia.items);
  const filter = useSelector((state) => state.stadia.filter);
  const category = useSelector((state) => state.categories.selected);
  const filterItems = [];

  const handleFilterTextChange = (filter) => dispatch(filterStadia(filter));

  const handleItemClick = (id) => {
    dispatch(fetchStadium(id));
  };

  items.forEach((item) => {
    // Check if name is filtered out
    if (item.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
      return;
    }
    filterItems.push(
      <ListTile
        key={item.stadiumId}
        id={item.stadiumId}
        primary={item.name}
        secondary={item.city.name}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="stadia-list">
      <FilterableContentList
        onFilterTextChange={handleFilterTextChange}
        items={filterItems}
        filter={filter}
      />
    </div>
  );
};

export default StadiaList;
