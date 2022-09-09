import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "../reducers/categories/categoriesSlice";
import citiesReducer from "../reducers/cities/citiesSlice";
import regionsReducer from "../reducers/regions/regionsSlice";
import countriesReducer from "../reducers/countries/countriesSlice"

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cities: citiesReducer,
    regions: regionsReducer,
    countries: countriesReducer
  },
});
