import "./ContentList.css";

const ContentList = ({ items }) => {
  return (
    <div className="d-flex flex-column content-list">
      {items.length > 0 ? items : "--"}
    </div>
  );
};

export default ContentList;
