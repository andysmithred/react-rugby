import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchPointTypes,
  fetchPointType,
} from "../../../../reducers/pointTypes/pointTypesSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemPointTypes = () => {
  const items = useSelector((state) => state.pointTypes.items);
  const item = useSelector((state) => state.pointTypes.item);
  const fetching = useSelector((state) => state.pointTypes.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "PointTypes")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPointTypes());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchPointType(items[0].pointTypeId));
    }
  }, [dispatch, items, item]);

  const handleItemClick = (category) => {
    dispatch(setCategory(category));
  };

  if (fetching) {
    return <div className="mt-1 loading">LOADING...</div>;
  }

  return (
    <div className="item">
      <HomeItem
        category={category}
        value={items.length}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default HomeItemPointTypes;
