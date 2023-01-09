import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTeamCountries, fetchTeamCountry } from "../../../../reducers/teamCountries/teamCountriesSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemTeamCountries = () => {
  const items = useSelector((state) => state.teamCountries.items);
  const item = useSelector((state) => state.teamCountries.item);
  const fetching = useSelector((state) => state.teamCountries.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "TeamCountries")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeamCountries());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchTeamCountry(items[0].teamCountryId));
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

export default HomeItemTeamCountries;
