import { useDispatch } from "react-redux/es/exports";

import "../Content.css";

const ItemsHeader = ({ menuItems, category, setView }) => {
  const dispatch = useDispatch();

  const handleMenuClicked = (view) => {
    dispatch(setView(view));
  };

  const items = menuItems.map((item) => {
    return (
      <li key={item} className="nav-item">
        <div
          className="nav-link menu-item"
          onClick={() => handleMenuClicked(item.toLowerCase())}
        >
          {item}
        </div>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-sm navbar-dark content-header">
      <img src={category.icon} className="image" alt={category.name} />
      <div className="mx-4 label">{category.label.toUpperCase()}</div>
      <ul className="navbar-nav">{items}</ul>
    </nav>
  );
};

export default ItemsHeader;
