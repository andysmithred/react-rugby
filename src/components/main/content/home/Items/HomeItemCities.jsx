import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import {
  fetchCities,
  fetchCity,
} from "../../../../reducers/cities/citiesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemCities = () => {
  const cities = useSelector((state) => state.cities.items);
  const city = useSelector((state) => state.cities.selected);
  const fetching = useSelector((state) => state.cities.fetching);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Cities")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  useEffect(() => {
    if (cities.length > 0 && !city) {
      dispatch(fetchCity(cities[0].cityId));
    }
  }, [dispatch, cities, city]);

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
        value={cities.length}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default HomeItemCities;
