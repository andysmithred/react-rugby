import { useDispatch, useSelector } from "react-redux";
import FilterableContentList from "../../common/FilterableContentList";
import ListTile from "../../common/lists/ListTile";
import {
  fetchSchool,
  filterSchools,
} from "../../../../reducers/schools/schoolsSlice";

import "./SchoolsList.css";

const SchoolsList = () => {
  const dispatch = useDispatch();
  const schools = useSelector((state) => state.schools.items);
  const filter = useSelector((state) => state.schools.filter);
  const category = useSelector((state) => state.categories.selected);
  const items = [];

  const handleFilterTextChange = (filter) => dispatch(filterSchools(filter));

  const handleItemClick = (id) => {
    dispatch(fetchSchool(id));
  };

  schools.forEach((school) => {
    // Check if name is filtered out
    if (school.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
      return;
    }
    items.push(
      <ListTile
        key={school.schoolId}
        id={school.schoolId}
        primary={school.name}
        secondary={school.city.name}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="schools-list">
      <FilterableContentList
        onFilterTextChange={handleFilterTextChange}
        items={items}
        filter={filter}
      />
    </div>
  );
};

export default SchoolsList;
