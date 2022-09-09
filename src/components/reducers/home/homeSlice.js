import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  featuredCityId: 0,
  featuredCityLoading: false,
  featuredCity: null,
  featuredRegion: null,
  featuredCountry: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    requestFeaturedCity: (state, action) => {
      console.log("requestFeaturedCity");
      console.log(action);
      state.featuredCityId = action.payload;
      state.featuredCityLoading = true;
    },
    receiveFeaturedCity: (state, action) => {
      console.log("receiveFeaturedCity");
      console.log(action);
      state.featuredCity = action.payload;
      state.featuredCityLoading = false;
    },
  },
});

export const { requestFeaturedCity, receiveFeaturedCity } = homeSlice.actions;
export default homeSlice.reducer;
