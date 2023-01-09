import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchMatchPointsAPI = async () =>
  fetchAPI("https://localhost:7213/api/MatchPoints");
export const fetchMatchPointAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/MatchPoints/${id}`);
export const addMatchPointAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/MatchPoints");
export const updateMatchPointAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/MatchPoints/${item.matchPointId}`
  );
export const deleteMatchPointAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/MatchPoints/${id}`);
