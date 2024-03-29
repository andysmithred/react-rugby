import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchMatchPointsAPI,
  fetchMatchPointAPI,
  addMatchPointAPI,
  updateMatchPointAPI,
  deleteMatchPointAPI,
} from "./matchPointsAPI";

const initialState = {
  items: [],
  fetchingItems: false,
  item: null,
  fetchingItem: false,
  filter: "",
  view: "index", // index, details, new, edit, delete
};

// Thunks;

export const fetchMatchPoints = createAsyncThunk(
  "matchPoints/fetchMatchLineUps",
  async () => {
    const response = await fetchMatchPointsAPI();
    return response;
  }
);

export const fetchMatchPoint = createAsyncThunk(
  "matchPoints/fetchMatchPoint",
  async (id) => {
    const response = await fetchMatchPointAPI(id);
    return response;
  }
);

export const addMatchPoint = createAsyncThunk(
  "matchPoints/addMatchPoint",
  async (item) => {
    const response = await addMatchPointAPI(item);
    return response;
  }
);

export const updateMatchPoint = createAsyncThunk(
  "matchPoints/updateMatchPoint",
  async (item) => {
    const response = await updateMatchPointAPI(item);
    return response;
  }
);

export const deleteMatchPoint = createAsyncThunk(
  "matchPoints/deleteMatchPoint",
  async (id) => {
    await deleteMatchPointAPI(id);
    return id;
  }
);

// slice

export const matchPointsSlice = createSlice({
  name: "matchPoints",
  initialState,
  reducers: {
    filterMatchPoints: (state, action) => {
      state.filter = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatchPoints.pending, (state) => {
        state.fetchingItems = true;
      })
      .addCase(fetchMatchPoints.fulfilled, (state, action) => {
        state.fetchingItems = false;
        state.items = action.payload;
      })
      .addCase(fetchMatchPoint.pending, (state) => {
        state.fetchingItem = true;
      })
      .addCase(fetchMatchPoint.fulfilled, (state, action) => {
        state.fetchingItem = false;
        state.item = action.payload;
      })
      .addCase(addMatchPoint.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.item = action.payload;
        state.view = "details";
      })
      .addCase(updateMatchPoint.fulfilled, (state, action) => {
        state.item = action.payload;
        state.items = state.items.map((item) =>
          item.matchPointId === action.payload.matchPointId
            ? action.payload
            : item
        );
        state.view = "details";
      })
      .addCase(deleteMatchPoint.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.matchPointId !== action.payload
        );
        state.item = state.items[0];
        state.view = "details";
      });
  },
});

// These 'actions' have been automatically generated by createSlice
export const { filterMatchPoints, setView } = matchPointsSlice.actions;
export default matchPointsSlice.reducer;
