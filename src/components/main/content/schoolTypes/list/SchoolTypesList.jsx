import { useDispatch, useSelector } from "react-redux";
import FilterableContentList from "../../common/FilterableContentList";
import ListTile from "../../common/ListTile";
import {
  fetchSchoolType,
  filterSchoolTypes,
} from "../../../../reducers/schoolTypes/schoolTypesSlice";

//import "./RegionsList.css";

const SchoolTypesList = () => {
  const dispatch = useDispatch();
  const schoolTypes = useSelector((state) => state.schoolTypes.items);
  const filter = useSelector((state) => state.schoolTypes.filter);
  const category = useSelector((state) => state.categories.selected);
  const items = [];

  const handleFilterTextChange = (filter) =>
    dispatch(filterSchoolTypes(filter));

  const handleItemClick = (id) => {
    console.log(`IN >> SchoolTypesList >> handleItemClick: ${id}`)
    dispatch(fetchSchoolType(id));
  };

  schoolTypes.forEach((schoolType) => {
    // Check if name is filtered out
    if (schoolType.type.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
      return;
    }
    items.push(
      <ListTile
        key={schoolType.schoolTypeId}
        id={schoolType.schoolTypeId}
        primary={schoolType.type}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="school-types-list">
      <FilterableContentList
        onFilterTextChange={handleFilterTextChange}
        items={items}
        filter={filter}
      />
    </div>
  );
};

export default SchoolTypesList;
