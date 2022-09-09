import "./ContentHeader.css";

const ContentHeader = ({ category }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark content-header">
      <img src={category.icon} className="image" alt={category.name} />
      <div className="mx-4 label">{category.name.toUpperCase()}</div>
    </nav>
  );
};

export default ContentHeader;
