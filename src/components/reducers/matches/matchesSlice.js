import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchMatchesAPI,
  fetchMatchAPI,
  addMatchAPI,
  updateMatchAPI,
  deleteMatchAPI,
} from "./matchesAPI";

const initialState = {
  items: [],
  fetchingItems: false,
  item: null,
  fetchingItem: false,
  filter: "",
  view: "index", // index, details, new, edit, delete
};

// Thunks;

export const fetchMatches = createAsyncThunk(
  "matches/fetchMatches",
  async () => {
    const response = await fetchMatchesAPI();
    return response;
  }
);

export const fetchMatch = createAsyncThunk(
  "matches/fetchMatch",
  async (id) => {
    const response = await fetchMatchAPI(id);
    return response;
  }
);

export const addMatch = createAsyncThunk(
  "matches/addMatch",
  async (item) => {
    const response = await addMatchAPI(item);
    return response;
  }
);

export const updateMatch = createAsyncThunk(
  "matches/updateMatch",
  async (item) => {
    const response = await updateMatchAPI(item);
    return response;
  }
);

export const deleteMatch = createAsyncThunk(
  "matches/deleteMatch",
  async (id) => {
    await deleteMatchAPI(id);
    return id;
  }
);

// slice

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    filterMatches: (state, action) => {
      state.filter = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.fetchingItems = true;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.fetchingItems = false;
        state.items = action.payload;
      })
      .addCase(fetchMatch.pending, (state) => {
        state.fetchingItem = true;
      })
      .addCase(fetchMatch.fulfilled, (state, action) => {
        state.fetchingItem = false;
        state.item = action.payload;
      })
      .addCase(addMatch.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.item = action.payload;
        state.view = "details";
      })
      .addCase(updateMatch.fulfilled, (state, action) => {
        state.item = action.payload;
        state.items = state.items.map((item) =>
          item.matchId === action.payload.matchId
            ? action.payload
            : item
        );
        state.view = "details";
      })
      .addCase(deleteMatch.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.matchId !== action.payload
        );
        state.item = state.items[0];
        state.view = "details";
      });
  },
});

// These 'actions' have been automatically generated by createSlice
export const { filterMatches, setView } = matchesSlice.actions;
export default matchesSlice.reducer;
