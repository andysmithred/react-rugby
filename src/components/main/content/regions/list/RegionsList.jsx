import { useDispatch, useSelector } from "react-redux";
import FilterableContentList from "../../common/FilterableContentList";
import ListTile from "../../common/ListTile";
import {
  fetchRegion,
  filterRegions,
} from "../../../../reducers/regions/regionsSlice";

import "./RegionsList.css";

const RegionsList = () => {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions.items);
  const filter = useSelector((state) => state.regions.filter);
  const category = useSelector((state) => state.categories.selected);
  const items = [];

  const handleFilterTextChange = (filter) => dispatch(filterRegions(filter));

  const handleItemClick = (id) => {
    dispatch(fetchRegion(id));
  };

  regions.forEach((region) => {
    // Check if name is filtered out
    if (region.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
      return;
    }
    items.push(
      <ListTile
        key={region.regionId}
        id={region.regionId}
        primary={region.name}
        secondary={region.country.name}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="regions-list">
      <FilterableContentList
        onFilterTextChange={handleFilterTextChange}
        items={items}
        filter={filter}
      />
    </div>
  );
};

export default RegionsList;
