import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchStadiaAPI = async () =>
  fetchAPI("https://localhost:7213/api/Stadia");
export const fetchStadiumAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Stadia/${id}`);
export const addStadiumAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Stadia");
export const updateStadiumAPI = async (item) =>
  updateItemAPI(item, `https://localhost:7213/api/Stadia/${item.stadiumId}`);
export const deleteStadiumAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Schools/${id}`);
