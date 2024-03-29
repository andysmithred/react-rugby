import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchSeasonsAPI,
  fetchSeasonAPI,
  addSeasonAPI,
  updateSeasonAPI,
  deleteSeasonAPI,
} from "./seasonsAPI";

const initialState = {
  items: [],
  fetchingItems: false,
  item: null,
  fetchingItem: false,
  filter: "",
  view: "index", // index, details, new, edit, delete
};

// Thunks;

export const fetchSeasons = createAsyncThunk(
  "seasons/fetchSeasons",
  async () => {
    const response = await fetchSeasonsAPI();
    return response;
  }
);

export const fetchSeason = createAsyncThunk(
  "seasons/fetchSeason",
  async (id) => {
    const response = await fetchSeasonAPI(id);
    return response;
  }
);

export const addSeason = createAsyncThunk(
  "seasons/addSeason",
  async (item) => {
    const response = await addSeasonAPI(item);
    return response;
  }
);

export const updateSeason = createAsyncThunk(
  "seasons/updateSeason",
  async (item) => {
    const response = await updateSeasonAPI(item);
    return response;
  }
);

export const deleteSeason = createAsyncThunk(
  "seasons/deleteSeason",
  async (id) => {
    await deleteSeasonAPI(id);
    return id;
  }
);

// slice

export const seasonsSlice = createSlice({
  name: "seasons",
  initialState,
  reducers: {
    filterSeasons: (state, action) => {
      state.filter = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeasons.pending, (state) => {
        state.fetchingItems = true;
      })
      .addCase(fetchSeasons.fulfilled, (state, action) => {
        state.fetchingItems = false;
        state.items = action.payload;
      })
      .addCase(fetchSeason.pending, (state) => {
        state.fetchingItem = true;
      })
      .addCase(fetchSeason.fulfilled, (state, action) => {
        state.fetchingItem = false;
        state.item = action.payload;
      })
      .addCase(addSeason.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.item = action.payload;
        state.view = "details";
      })
      .addCase(updateSeason.fulfilled, (state, action) => {
        state.item = action.payload;
        state.items = state.items.map((item) =>
          item.seasonId === action.payload.seasonId ? action.payload : item
        );
        state.view = "details";
      })
      .addCase(deleteSeason.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.seasonId !== action.payload
        );
        state.item = state.items[0];
        state.view = "details";
      });
  },
});

// These 'actions' have been automatically generated by createSlice
export const { filterSeasons, setView } = seasonsSlice.actions;
export default seasonsSlice.reducer;
