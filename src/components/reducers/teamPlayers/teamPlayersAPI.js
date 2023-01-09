import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchTeamPlayersAPI = async () =>
  fetchAPI("https://localhost:7213/api/TeamPlayers");
export const fetchTeamPlayerAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/TeamPlayers/${id}`);
export const addTeamPlayerAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/TeamPlayers");
export const updateTeamPlayerAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/TeamPlayers/${item.teamPlayerId}`
  );
export const deleteTeamPlayerAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/TeamPlayers/${id}`);
