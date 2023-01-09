import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchMatchTeamsAPI = async () =>
  fetchAPI("https://localhost:7213/api/MatchTeams");
export const fetchMatchTeamAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/MatchTeams/${id}`);
export const addMatchTeamAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/MatchTeams");
export const updateMatchTeamAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/MatchTeams/${item.matchTeamId}`
  );
export const deleteMatchTeamAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/MatchTeams/${id}`);
