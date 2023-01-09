import { useDispatch, useSelector } from "react-redux";
import FilterableContentList from "../../common/FilterableContentList";
import ListTileSimple from "../../common/ListTileSimple";
import {
  fetchCompetition,
  filterCompetitions,
} from "../../../../reducers/competitions/competitionsSlice";

import "./CompetitionsList.css";

const CompetitionsList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.competitions.items);
  const filter = useSelector((state) => state.competitions.filter);
  const category = useSelector((state) => state.categories.selected);
  const filterItems = [];

  const handleFilterTextChange = (filter) => dispatch(filterCompetitions(filter));

  const handleItemClick = (id) => {
    dispatch(fetchCompetition(id));
  };

  items.forEach((item) => {
    // Check if name is filtered out
    if (item.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
      return;
    }
    filterItems.push(
      <ListTileSimple
        key={item.competitionId}
        id={item.competitionId}
        label={item.name}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="competitions-list">
      <FilterableContentList
        onFilterTextChange={handleFilterTextChange}
        items={filterItems}
        filter={filter}
      />
    </div>
  );
};

export default CompetitionsList;
