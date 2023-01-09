import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchSeasonsAPI = async () =>
  fetchAPI("https://localhost:7213/api/Seasons");
export const fetchSeasonAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Seasons/${id}`);
export const addSeasonAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Seasons");
export const updateSeasonAPI = async (item) =>
  updateItemAPI(item, `https://localhost:7213/api/Seasons/${item.seasonId}`);
export const deleteSeasonAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Seasons/${id}`);
