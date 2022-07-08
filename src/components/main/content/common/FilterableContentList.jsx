import ContentSearchBar from "./ContentSearchBar";
import ContentList from "./ContentList";

import "./FilterableContentList.css";

const FilterableContentList = (props) => {
  return (
    <div className="filterable-content-list">
      <ContentSearchBar
        onFilterTextChange={props.onFilterTextChange}
        filter={props.filter}
      />
      <ContentList items={props.items} />
    </div>
  );
};

export default FilterableContentList;
