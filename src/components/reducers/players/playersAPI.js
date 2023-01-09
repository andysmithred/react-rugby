import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchPlayersAPI = async () =>
  fetchAPI("https://localhost:7213/api/Players");
export const fetchPlayerAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Players/${id}`);
export const addPlayerAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Players");
export const updatePlayerAPI = async (item) =>
  updateItemAPI(item, `https://localhost:7213/api/Players/${item.playerId}`);
export const deletePlayerAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Players/${id}`);
