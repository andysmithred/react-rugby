import { useDispatch, useSelector } from "react-redux";
import FilterableContentList from "../../common/FilterableContentList";
import ListTile from "../../common/lists/ListTile";
import {
  fetchCoach,
  filterCoaches,
} from "../../../../reducers/coaches/coachesSlice";

import "./CoachesList.css";

const CoachesList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.coaches.items);
  const filter = useSelector((state) => state.coaches.filter);
  const category = useSelector((state) => state.categories.selected);
  const filterItems = [];

  const handleFilterTextChange = (filter) => dispatch(filterCoaches(filter));

  const handleItemClick = (id) => {
    dispatch(fetchCoach(id));
  };

  items.forEach((item) => {
    // Check if name is filtered out
    if (item.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
      return;
    }
    filterItems.push(
      <ListTile
        key={item.coachId}
        id={item.coachId}
        primary={item.name}
        secondary={item.city.name}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="coaches-list">
      <FilterableContentList
        onFilterTextChange={handleFilterTextChange}
        items={filterItems}
        filter={filter}
      />
    </div>
  );
};

export default CoachesList;
