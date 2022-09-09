import { useDispatch, useSelector } from "react-redux/es/exports";
import { setView } from "../../../../reducers/regions/regionsSlice";

import "./RegionsHeader.css";

const RegionsHeader = ({ menu_items }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Regions")
  );

  const handleMenuClicked = (view) => {
    dispatch(setView(view));
  };

  const items = menu_items.map((item) => {
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
    <nav className="navbar navbar-expand-sm navbar-dark regions-header">
      <img src={category.icon} className="image" alt={category.name} />
      <div className="mx-4 label">{category.name.toUpperCase()}</div>
      <ul className="navbar-nav">{items}</ul>
    </nav>
  );
};

export default RegionsHeader;
