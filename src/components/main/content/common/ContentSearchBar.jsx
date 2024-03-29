import "./ContentSearchBar.css";

const ContentSearchBar = (props) => {
    const handleFilterTextChange = (e) => props.onFilterTextChange(e.target.value);
    const filterText = props.filter;

    return (
      <form>
        <input
          type="text"
          value={filterText}
          className="my-1 ps-1 content-search-bar"
          onChange={handleFilterTextChange}
          placeholder="Filter..."
        ></input>
      </form>
    );
}

export default ContentSearchBar;
