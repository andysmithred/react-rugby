import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchPositionsAPI = async () =>
  fetchAPI("https://localhost:7213/api/Positions");
export const fetchPositionAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Positions/${id}`);
export const addPositionAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Positions");
export const updatePositionAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/Positions/${item.positionId}`
  );
export const deletePositionAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Positions/${id}`);
