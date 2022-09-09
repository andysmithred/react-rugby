import "./HomeHeader.css";

const HomeHeader = ({category}) => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark content-header">
      <img src={category.icon} className="image" alt={category.name} />
      <div className="mx-4 label">{category.name.toUpperCase()}</div>
    </nav>
  );
};

export default HomeHeader;
