import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchCountriesAPI = async () =>
  fetchAPI("https://localhost:7213/api/Countries");
export const fetchCountryAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Countries/${id}`);
export const addCountryAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Countries");
export const updateCountryAPI = async (item) =>
  updateItemAPI(item, `https://localhost:7213/api/Countries/${item.countryId}`);
export const deleteCountryAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Countries/${id}`);
