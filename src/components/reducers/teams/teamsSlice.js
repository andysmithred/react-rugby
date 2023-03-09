import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchTeamsAPI,
  fetchTeamAPI,
  addTeamAPI,
  updateTeamAPI,
  deleteTeamAPI,
} from "./teamsAPI";

const initialState = {
  items: [],
  fetchingItems: false,
  item: null,
  fetchingItem: false,
  filter: "",
  view: "index", // index, details, new, edit, delete
};

// Thunks;

export const fetchTeams = createAsyncThunk("teams/fetchTeams", async () => {
  const response = await fetchTeamsAPI();
  return response;
});

export const fetchTeam = createAsyncThunk("teams/fetchTeam", async (id) => {
  const response = await fetchTeamAPI(id);
  return response;
});

export const addTeam = createAsyncThunk("teams/addTeam", async (item) => {
  const response = await addTeamAPI(item);
  return response;
});

export const updateTeam = createAsyncThunk("teams/updateTeam", async (item) => {
  const response = await updateTeamAPI(item);
  return response;
});

export const deleteTeam = createAsyncThunk("teams/deleteTeam", async (id) => {
  await deleteTeamAPI(id);
  return id;
});

// slice

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    filterTeams: (state, action) => {
      state.filter = action.payload;
    },
    setTeamsView: (state, action) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.fetchingItems = true;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.fetchingItems = false;
        state.items = action.payload;
      })
      .addCase(fetchTeam.pending, (state) => {
        state.fetchingItem = true;
      })
      .addCase(fetchTeam.fulfilled, (state, action) => {
        state.fetchingItem = false;
        state.item = action.payload;
      })
      .addCase(addTeam.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.item = action.payload;
        state.view = "details";
      })
      .addCase(updateTeam.fulfilled, (state, action) => {
        state.item = action.payload;
        state.items = state.items.map((item) =>
          item.teamId === action.payload.teamId ? action.payload : item
        );
        state.view = "details";
      })
      .addCase(deleteTeam.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.teamId !== action.payload
        );
        state.item = state.items[0];
        state.view = "details";
      });
  },
});

// These 'actions' have been automatically generated by createSlice
export const { filterTeams, setTeamsView } = teamsSlice.actions;
export default teamsSlice.reducer;
