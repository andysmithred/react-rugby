import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchMatchLineUpsAPI = async () =>
  fetchAPI("https://localhost:7213/api/MatchLineUps");
export const fetchMatchLineUpAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/MatchLineUps/${id}`);
export const addMatchLineUpAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/MatchLineUps");
export const updateMatchLineUpAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/MatchLineUps/${item.matchLineUpId}`
  );
export const deleteMatchLineUpAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/MatchLineUps/${id}`);
