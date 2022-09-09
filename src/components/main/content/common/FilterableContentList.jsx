import ContentSearchBar from "./ContentSearchBar";
import ContentList from "./ContentList";

import "./FilterableContentList.css";

const FilterableContentList = (props) => {
  return (
    <div className="d-flex flex-column filterable-content-list">
      <ContentSearchBar
        onFilterTextChange={props.onFilterTextChange}
        filter={props.filter}
      />
      <ContentList items={props.items} />
    </div>
  );
};

export default FilterableContentList;
