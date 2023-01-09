import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchTeamCountriesAPI = async () =>
  fetchAPI("https://localhost:7213/api/TeamCountries");
export const fetchTeamCountryAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/TeamCountries/${id}`);
export const addTeamCountryAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/TeamCountries");
export const updateTeamCountryAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/TeamCountries/${item.teamCountryId}`
  );
export const deleteTeamCountryAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/TeamCountries/${id}`);
