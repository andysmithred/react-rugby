import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import { fetchCountries, fetchCountry } from "../../../../reducers/countries/countriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemCountries = () => {
  const countries = useSelector((state) => state.countries.items);
  const country = useSelector((state) => state.countries.selected);
  const fetching = useSelector((state) => state.countries.fetching);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Countries")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    if (countries.length > 0 && !country) {
      dispatch(fetchCountry(countries[0].countryId));
    }
  }, [dispatch, countries, country]);

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
        value={countries.length}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default HomeItemCountries;
