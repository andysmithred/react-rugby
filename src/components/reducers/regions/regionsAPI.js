import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchRegionsAPI = async () =>
  fetchAPI("https://localhost:7213/api/Regions");
export const fetchRegionAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Regions/${id}`);
export const addRegionAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Regions");
export const updateRegionAPI = async (item) =>
  updateItemAPI(item, `https://localhost:7213/api/Regions/${item.regionId}`);
export const deleteRegionAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Regions/${id}`);
