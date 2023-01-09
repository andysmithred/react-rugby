import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "../reducers/categories/categoriesSlice";
import citiesReducer from "../reducers/cities/citiesSlice";
import coachesReducer from "../reducers/coaches/coachesSlice";
import competitionsReducer from "../reducers/competitions/competitionsSlice";
import countriesReducer from "../reducers/countries/countriesSlice";
import matchesReducer from "../reducers/matches/matchesSlice";
import matchLineUpsReducer from "../reducers/matchLineUps/matchLineUpsSlice";
import matchPointsReducer from "../reducers/matchPoints/matchPointsSlice";
import matchPositionsReducer from "../reducers/matchPositions/matchPositionsSlice";
import matchTeamsReducer from "../reducers/matchTeams/matchTeamsSlice";
import penaltyTriesReducer from "../reducers/penaltyTries/penaltyTriesSlice";
import playersReducer from "../reducers/players/playersSlice";
import pointTypesReducer from "../reducers/pointTypes/pointTypesSlice";
import positionsReducer from "../reducers/positions/positionsSlice";
import refereesReducer from "../reducers/referees/refereesSlice";
import regionsReducer from "../reducers/regions/regionsSlice";
import schoolsReducer from "../reducers/schools/schoolsSlice";
import schoolTypesReducer from "../reducers/schoolTypes/schoolTypesSlice";
import seasonPointsReducer from "../reducers/seasonPoints/seasonPointsSlice";
import seasonsReducer from "../reducers/seasons/seasonsSlice";
import stadiaReducer from "../reducers/stadia/stadiaSlice";
import teamCountriesReducer from "../reducers/teamCountries/teamCountriesSlice";
import teamPlayersReducer from "../reducers/teamPlayers/teamPlayersSlice";
import teamsReducer from "../reducers/teams/teamsSlice";


export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cities: citiesReducer,
    coaches: coachesReducer,
    competitions: competitionsReducer,
    countries: countriesReducer,
    matches: matchesReducer,
    matchLineUps: matchLineUpsReducer,
    matchPoints: matchPointsReducer,
    matchPositions: matchPositionsReducer,
    matchTeams: matchTeamsReducer,
    penaltyTries: penaltyTriesReducer,
    players: playersReducer,
    pointTypes: pointTypesReducer,
    positions: positionsReducer,
    referees: refereesReducer,
    regions: regionsReducer,
    schools: schoolsReducer,
    schoolTypes: schoolTypesReducer,
    seasonPoints: seasonPointsReducer,
    seasons: seasonsReducer,
    stadia: stadiaReducer,
    teamCountries: teamCountriesReducer,
    teamPlayers: teamPlayersReducer,
    teams: teamsReducer
  },
});
