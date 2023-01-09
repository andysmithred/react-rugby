import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchPenaltyTriesAPI = async () =>
  fetchAPI("https://localhost:7213/api/PenaltyTries");
export const fetchPenaltyTryAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/PenaltyTries/${id}`);
export const addPenaltyTryAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/PenaltyTries");
export const updatePenaltyTryAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/PenaltyTries/${item.penaltyTryId}`
  );
export const deletePenaltyTryAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/PenaltyTries/${id}`);
