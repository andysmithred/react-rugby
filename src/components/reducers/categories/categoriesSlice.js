import { createSlice } from "@reduxjs/toolkit";
import { getFullPathImage } from "../../utils/ImageDetails";

export const categoriesList = [
  {
    name: "Home",
    icon: getFullPathImage("home"),
  },
  {
    name: "Cities",
    icon: getFullPathImage("city"),
    label: "Cities"
  },
  {
    name: "Coaches",
    icon: getFullPathImage("coach"),
    label: "Coaches",
  },
  {
    name: "Competitions",
    icon: getFullPathImage("competition"),
    label: "Competitions",
  },
  {
    name: "Countries",
    icon: getFullPathImage("country"),
  },
  {
    name: "Matches",
    icon: getFullPathImage("match"),
    label: "Matches"
  },
  {
    name: "MatchLineUps",
    icon: getFullPathImage("match-line-up"),
    label: "Match Line Ups",
  },
  {
    name: "MatchPoints",
    icon: getFullPathImage("match-point"),
    label: "Match Points",
  },
  {
    name: "MatchPositions",
    icon: getFullPathImage("match-position"),
    label: "Match Positions",
  },
  {
    name: "MatchTeams",
    icon: getFullPathImage("match-team"),
    label: "Match Teams",
  },
  {
    name: "PenaltyTries",
    icon: getFullPathImage("penalty-try"),
    label: "Penalty Tries",
  },
  {
    name: "Players",
    icon: getFullPathImage("player"),
    label: "Players",
  },
  {
    name: "PointTypes",
    icon: getFullPathImage("point-type"),
    label: "Point Types",
  },
  {
    name: "Positions",
    icon: getFullPathImage("position"),
    label: "Positions",
  },
  {
    name: "Referees",
    icon: getFullPathImage("referee"),
    label: "Referees",
  },
  {
    name: "Regions",
    icon: getFullPathImage("region"),
    label: "Regions"
  },
  {
    name: "Schools",
    icon: getFullPathImage("school"),
    label: "Schools",
  },
  {
    name: "SchoolTypes",
    icon: getFullPathImage("school-type"),
    label: "School Types",
  },
  {
    name: "Seasons",
    icon: getFullPathImage("season"),
    label: "Seasons",
  },
  {
    name: "SeasonPoints",
    icon: getFullPathImage("season-point"),
    label: "Season Points",
  },
  {
    name: "Stadia",
    icon: getFullPathImage("stadium"),
    label: "Stadia",
  },
  {
    name: "Teams",
    icon: getFullPathImage("team"),
    label: "Teams",
  },
  {
    name: "TeamCountries",
    icon: getFullPathImage("team-country"),
    label: "Team Countries",
  },
  {
    name: "TeamPlayers",
    icon: getFullPathImage("team-player"),
    label: "Team Players",
  },
];

const initialState = {
  items: [],
  selected: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.items = action.payload;
    },
    setCategory: (state, action) => {
      state.selected = action.payload;
    },
  },
});

// These 'actions' have been automatically generated by createSlice
export const { setCategories, setCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
