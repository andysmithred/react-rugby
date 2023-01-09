import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchMatchesAPI = async () =>
  fetchAPI("https://localhost:7213/api/Matches");
export const fetchMatchAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Matches/${id}`);
export const addMatchAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Matches");
export const updateMatchAPI = async (item) =>
  updateItemAPI(item, `https://localhost:7213/api/Matches/${item.matchId}`);
export const deleteMatchAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Matches/${id}`);
