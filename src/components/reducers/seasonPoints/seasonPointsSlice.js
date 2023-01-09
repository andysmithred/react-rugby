import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchSeasonPointsAPI,
  fetchSeasonPointAPI,
  addSeasonPointAPI,
  updateSeasonPointAPI,
  deleteSeasonPointAPI,
} from "./seasonPointsAPI";

const initialState = {
  items: [],
  fetchingItems: false,
  item: null,
  fetchingItem: false,
  filter: "",
  view: "index", // index, details, new, edit, delete
};

// Thunks;

export const fetchSeasonPoints = createAsyncThunk(
  "seasonPoints/fetchSeasonPoints",
  async () => {
    const response = await fetchSeasonPointsAPI();
    return response;
  }
);

export const fetchSeasonPoint = createAsyncThunk(
  "seasonPoints/fetchSeasonPoint",
  async (id) => {
    const response = await fetchSeasonPointAPI(id);
    return response;
  }
);

export const addSeasonPoint = createAsyncThunk(
  "seasonPoints/addSeasonPoint",
  async (item) => {
    const response = await addSeasonPointAPI(item);
    return response;
  }
);

export const updateSeasonPoint = createAsyncThunk(
  "seasonPoints/updateSeasonPoint",
  async (item) => {
    const response = await updateSeasonPointAPI(item);
    return response;
  }
);

export const deleteSeasonPoint = createAsyncThunk(
  "seasonPoints/deleteSeasonPoint",
  async (id) => {
    await deleteSeasonPointAPI(id);
    return id;
  }
);

// slice

export const seasonPointsSlice = createSlice({
  name: "seasonPoints",
  initialState,
  reducers: {
    filterSeasonPoints: (state, action) => {
      state.filter = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeasonPoints.pending, (state) => {
        state.fetchingItems = true;
      })
      .addCase(fetchSeasonPoints.fulfilled, (state, action) => {
        state.fetchingItems = false;
        state.items = action.payload;
      })
      .addCase(fetchSeasonPoint.pending, (state) => {
        state.fetchingItem = true;
      })
      .addCase(fetchSeasonPoint.fulfilled, (state, action) => {
        state.fetchingItem = false;
        state.item = action.payload;
      })
      .addCase(addSeasonPoint.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.item = action.payload;
        state.view = "details";
      })
      .addCase(updateSeasonPoint.fulfilled, (state, action) => {
        state.item = action.payload;
        state.items = state.items.map((item) =>
          item.seasonPointId === action.payload.seasonPointId
            ? action.payload
            : item
        );
        state.view = "details";
      })
      .addCase(deleteSeasonPoint.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.seasonPointId !== action.payload
        );
        state.item = state.items[0];
        state.view = "details";
      });
  },
});

// These 'actions' have been automatically generated by createSlice
export const { filterSeasonPoints, setView } = seasonPointsSlice.actions;
export default seasonPointsSlice.reducer;
