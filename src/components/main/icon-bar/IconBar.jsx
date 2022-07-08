import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../reducers/categories/categoriesSlice";
import IconBarItem from "./IconBarItem";

import "./IconBar.css";

const IconBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);

  useEffect(() => {
    dispatch(setCategory(categories[0]));
  }, [dispatch, categories]);

  const handleIconBarItemClick = (category) => {
    dispatch(setCategory(category));
  }

  const iconBarItems = categories.map((category) => {
    return (
      <IconBarItem
        key={category.name}
        category={category}
        onIconBarItemClick={handleIconBarItemClick}
      />
    );
  });

  return <div className="icon-bar">{iconBarItems}</div>;
};

export default IconBar;
