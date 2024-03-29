import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchPenaltyTriesAPI,
  fetchPenaltyTryAPI,
  addPenaltyTryAPI,
  updatePenaltyTryAPI,
  deletePenaltyTryAPI,
} from "./penaltyTriesAPI";

const initialState = {
  items: [],
  fetchingItems: false,
  item: null,
  fetchingItem: false,
  filter: "",
  view: "index", // index, details, new, edit, delete
};

// Thunks;

export const fetchPenaltyTries = createAsyncThunk(
  "penaltyTries/fetchPenaltyTries",
  async () => {
    const response = await fetchPenaltyTriesAPI();
    return response;
  }
);

export const fetchPenaltyTry = createAsyncThunk(
  "penaltyTries/fetchPenaltyTry",
  async (id) => {
    const response = await fetchPenaltyTryAPI(id);
    return response;
  }
);

export const addPenaltyTry = createAsyncThunk(
  "penaltyTries/addPenaltyTry",
  async (item) => {
    const response = await addPenaltyTryAPI(item);
    return response;
  }
);

export const updatePenaltyTry = createAsyncThunk(
  "penaltyTries/updatePenaltyTry",
  async (item) => {
    const response = await updatePenaltyTryAPI(item);
    return response;
  }
);

export const deletePenaltyTry = createAsyncThunk(
  "penaltyTries/deletePenaltyTry",
  async (id) => {
    await deletePenaltyTryAPI(id);
    return id;
  }
);

// slice

export const penaltyTriesSlice = createSlice({
  name: "penaltyTries",
  initialState,
  reducers: {
    filterPenaltyTries: (state, action) => {
      state.filter = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPenaltyTries.pending, (state) => {
        state.fetchingItems = true;
      })
      .addCase(fetchPenaltyTries.fulfilled, (state, action) => {
        state.fetchingItems = false;
        state.items = action.payload;
      })
      .addCase(fetchPenaltyTry.pending, (state) => {
        state.fetchingItem = true;
      })
      .addCase(fetchPenaltyTry.fulfilled, (state, action) => {
        state.fetchingItem = false;
        state.item = action.payload;
      })
      .addCase(addPenaltyTry.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.item = action.payload;
        state.view = "details";
      })
      .addCase(updatePenaltyTry.fulfilled, (state, action) => {
        state.item = action.payload;
        state.items = state.items.map((item) =>
          item.penaltyTryId === action.payload.penaltyTryId
            ? action.payload
            : item
        );
        state.view = "details";
      })
      .addCase(deletePenaltyTry.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.penaltyTryId !== action.payload
        );
        state.item = state.items[0];
        state.view = "details";
      });
  },
});

// These 'actions' have been automatically generated by createSlice
export const { filterPenaltyTries, setView } = penaltyTriesSlice.actions;
export default penaltyTriesSlice.reducer;
