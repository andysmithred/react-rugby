import { createSlice } from "@reduxjs/toolkit";
// import { ImageDetails } from "../../utils/ImageDetails";

export const categoriesList = [
  { name: "Home", icon: "home" },
  { name: "Cities", icon: "cities" },
  { name: "Regions", icon: "regions" },
  { name: "Countries", icon: "countries" },
];

const initialState = {
  items: [],
  selected: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.items = action.payload;
    },
    setCategory: (state, action) => {
      state.selected = action.payload;
    },
  },
});

// These 'actions' have been automatically generated by createSlice
export const { setCategories, setCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
