import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchMatchPositionsAPI = async () =>
  fetchAPI("https://localhost:7213/api/MatchPositions");
export const fetchMatchPositionAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/MatchPositions/${id}`);
export const addMatchPositionAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/MatchPositions");
export const updateMatchPositionAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/MatchPositions/${item.matchPositionId}`
  );
export const deleteMatchPositionAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/MatchPositions/${id}`);
