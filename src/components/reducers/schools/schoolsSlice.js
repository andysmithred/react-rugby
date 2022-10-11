import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchSchoolsAPI,
  fetchSchoolAPI,
  addSchoolAPI,
  updateSchoolAPI,
  deleteSchoolAPI,
} from "./schoolsAPI";

const initialState = {
  items: [],
  fetching: false,
  filter: "",
  selected: null,
  fetchingSelected: false,
  view: "index", // index, details, new, edit, delete
};

// Thunks;

export const fetchSchools = createAsyncThunk(
  "schools/fetchSchools",
  async () => {
    const response = await fetchSchoolsAPI();
    return response;
  }
);

export const fetchSchool = createAsyncThunk(
  "schools/fetchSchool",
  async (schoolId) => {
    const response = await fetchSchoolAPI(schoolId);
    return response;
  }
);

export const addSchool = createAsyncThunk(
  "schools/addSchool",
  async (school) => {
    const response = await addSchoolAPI(school);
    return response;
  }
);

export const updateSchool = createAsyncThunk(
  "schools/updateSchool",
  async (updatedSchool) => {
    const response = await updateSchoolAPI(updatedSchool);
    return response;
  }
);

export const deleteSchool = createAsyncThunk(
  "schools/deleteSchool",
  async (id) => {
    await deleteSchoolAPI(id);
    return id;
  }
);

// slice

export const schoolsSlice = createSlice({
  name: "schools",
  initialState,
  reducers: {
    filterSchools: (state, action) => {
      state.filter = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchools.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchSchools.fulfilled, (state, action) => {
        state.fetching = false;
        state.items = action.payload;
      })
      .addCase(fetchSchool.pending, (state) => {
        state.fetchingSelected = true;
      })
      .addCase(fetchSchool.fulfilled, (state, action) => {
        state.fetchingSelected = false;
        state.selected = action.payload;
      })
      .addCase(addSchool.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.selected = action.payload;
        state.view = "details";
      })
      .addCase(updateSchool.fulfilled, (state, action) => {
        state.selected = action.payload;
        state.items = state.items.map((item) =>
          item.schoolId === action.payload.schoolId
            ? action.payload
            : item
        );
        state.view = "details";
      })
      .addCase(deleteSchool.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.schoolId !== action.payload
        );
        state.selected = state.items[0];
        state.view = "details";
      });
  },
});

// These 'actions' have been automatically generated by createSlice
export const { filterSchools, setView } = schoolsSlice.actions;

export default schoolsSlice.reducer;
