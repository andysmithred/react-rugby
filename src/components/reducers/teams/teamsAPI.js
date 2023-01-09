import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchTeamsAPI = async () =>
  fetchAPI("https://localhost:7213/api/Teams");
export const fetchTeamAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Teams/${id}`);
export const addTeamAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Teams");
export const updateTeamAPI = async (item) =>
  updateItemAPI(item, `https://localhost:7213/api/Teams/${item.teamId}`);
export const deleteTeamAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Teams/${id}`);
