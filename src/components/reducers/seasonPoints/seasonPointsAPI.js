import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchSeasonPointsAPI = async () =>
  fetchAPI("https://localhost:7213/api/SeasonPoints");
export const fetchSeasonPointAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/SeasonPoints/${id}`);
export const addSeasonPointAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/SeasonPoints");
export const updateSeasonPointAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/SeasonPoints/${item.seasonPointId}`
  );
export const deleteSeasonPointAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/SeasonPoints/${id}`);
