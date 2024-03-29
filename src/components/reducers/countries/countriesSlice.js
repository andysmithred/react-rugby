import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCountriesAPI,
  fetchCountryAPI,
  addCountryAPI,
  updateCountryAPI,
  deleteCountryAPI,
} from "./countriesAPI";

const initialState = {
  items: [],
  fetchingItems: false,
  filter: "",
  item: null,
  fetchingItem: false,
  view: "index", // index, details, new, edit, delete
};

// Thunks

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await fetchCountriesAPI();
    return response;
  }
);

export const fetchCountry = createAsyncThunk(
  "countries/fetchCountry",
  async (countryId) => {
    const response = await fetchCountryAPI(countryId);
    return response;
  }
);

export const addCountry = createAsyncThunk(
  "countries/addCountry",
  async (country) => {
    const response = await addCountryAPI(country);
    return response;
  }
);

export const updateCountry = createAsyncThunk(
  "countries/updateCountry",
  async (updatedCountry) => {
    const response = await updateCountryAPI(updatedCountry);
    return response;
  }
);

export const deleteCountry = createAsyncThunk(
  "countries/deleteCountry",
  async (id) => {
    await deleteCountryAPI(id);
    return id;
  }
);

// Slice

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    filterCountries: (state, action) => {
      state.filter = action.payload;
    },
    setCountriesView: (state, action) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.fetchingItems = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.fetchingItems = false;
        state.items = action.payload;
      })
      .addCase(fetchCountry.pending, (state) => {
        state.fetchingItem = true;
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.fetchingItem = false;
        state.item = action.payload;
      })
      .addCase(addCountry.fulfilled, (state, action) => {
        state.view = "index";
      })
      .addCase(updateCountry.fulfilled, (state, action) => {
        state.item = action.payload;
        state.view = "details";
      })
      .addCase(deleteCountry.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.countryId !== action.payload
        );
        state.item = null;
        state.view = "index";
      });
  },
});

// These 'actions' have been automatically generated by createSlice
export const { filterCountries, setCountriesView } = countriesSlice.actions;

export default countriesSlice.reducer;
