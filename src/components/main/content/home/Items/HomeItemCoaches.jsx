import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchCoaches,
  fetchCoach,
} from "../../../../reducers/coaches/coachesSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemCoaches = () => {
  const coaches = useSelector((state) => state.coaches.items);
  const coach = useSelector((state) => state.coaches.item);
  const fetching = useSelector((state) => state.coaches.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Coaches")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoaches());
  }, [dispatch]);

  useEffect(() => {
    if (coaches.length > 0 && !coach) {
      dispatch(fetchCoach(coaches[0].coachId));
    }
  }, [dispatch, coaches, coach]);

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
        value={coaches.length}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default HomeItemCoaches;
