import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchTeamPlayersAPI,
  fetchTeamPlayerAPI,
  addTeamPlayerAPI,
  updateTeamPlayerAPI,
  deleteTeamPlayerAPI,
} from "./teamPlayersAPI";

const initialState = {
  items: [],
  fetchingItems: false,
  item: null,
  fetchingItem: false,
  filter: "",
  view: "index", // index, details, new, edit, delete
};

// Thunks;

export const fetchTeamPlayers = createAsyncThunk(
  "teamPlayers/fetchTeamPlayers",
  async () => {
    const response = await fetchTeamPlayersAPI();
    return response;
  }
);

export const fetchTeamPlayer = createAsyncThunk(
  "teamPlayers/fetchTeamPlayer",
  async (id) => {
    const response = await fetchTeamPlayerAPI(id);
    return response;
  }
);

export const addTeamPlayer = createAsyncThunk(
  "teamPlayers/addTeamPlayer",
  async (item) => {
    const response = await addTeamPlayerAPI(item);
    return response;
  }
);

export const updateTeamPlayer = createAsyncThunk(
  "teamPlayers/updateTeamPlayer",
  async (item) => {
    const response = await updateTeamPlayerAPI(item);
    return response;
  }
);

export const deleteTeamPlayer = createAsyncThunk(
  "teamPlayers/deleteTeamPlayer",
  async (id) => {
    await deleteTeamPlayerAPI(id);
    return id;
  }
);

// slice

export const teamPlayersSlice = createSlice({
  name: "teamPlayers",
  initialState,
  reducers: {
    filterTeamPlayers: (state, action) => {
      state.filter = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamPlayers.pending, (state) => {
        state.fetchingItems = true;
      })
      .addCase(fetchTeamPlayers.fulfilled, (state, action) => {
        state.fetchingItems = false;
        state.items = action.payload;
      })
      .addCase(fetchTeamPlayer.pending, (state) => {
        state.fetchingItem = true;
      })
      .addCase(fetchTeamPlayer.fulfilled, (state, action) => {
        state.fetchingItem = false;
        state.item = action.payload;
      })
      .addCase(addTeamPlayer.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.item = action.payload;
        state.view = "details";
      })
      .addCase(updateTeamPlayer.fulfilled, (state, action) => {
        state.item = action.payload;
        state.items = state.items.map((item) =>
          item.teamPlayerId === action.payload.teamPlayerId
            ? action.payload
            : item
        );
        state.view = "details";
      })
      .addCase(deleteTeamPlayer.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.teamPlayerId !== action.payload
        );
        state.item = state.items[0];
        state.view = "details";
      });
  },
});

// These 'actions' have been automatically generated by createSlice
export const { filterTeamPlayers, setView } = teamPlayersSlice.actions;
export default teamPlayersSlice.reducer;
