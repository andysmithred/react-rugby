import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "../reducers/categories/categoriesSlice";
import citiesReducer from "../reducers/cities/citiesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cities: citiesReducer,
  },
});
