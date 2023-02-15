import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchCitiesAPI = async () =>
  fetchAPI("https://localhost:7213/api/Cities");
export const fetchCityAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Cities/${id}`);
export const addCityAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Cities");
export const updateCityAPI = async (item) =>
  updateItemAPI(item, `https://localhost:7213/api/Cities/${item.cityId}`);
export const deleteCityAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Cities/${id}`);
