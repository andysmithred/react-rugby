import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchReferees,
  fetchReferee,
} from "../../../../reducers/referees/refereesSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemReferees = () => {
  const items = useSelector((state) => state.referees.items);
  const item = useSelector((state) => state.referees.item);
  const fetching = useSelector((state) => state.referees.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Referees")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReferees());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchReferee(items[0].refereeId));
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

export default HomeItemReferees;
