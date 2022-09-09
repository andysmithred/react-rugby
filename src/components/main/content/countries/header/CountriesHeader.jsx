import { useDispatch, useSelector } from "react-redux/es/exports";
import { setView } from "../../../../reducers/countries/countriesSlice";

import "./CountriesHeader.css";

const CountriesHeader = ({ menu_items }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Countries")
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
    <nav className="navbar navbar-expand-sm navbar-dark countries-header">
      <img src={category.icon} className="image" alt={category.name} />
      <div className="mx-4 label">{category.name.toUpperCase()}</div>
      <ul className="navbar-nav">{items}</ul>
    </nav>
  );
};

export default CountriesHeader;
