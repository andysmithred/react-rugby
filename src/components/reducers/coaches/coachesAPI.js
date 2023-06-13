import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchCoachesAPI = async () =>
  fetchAPI("https://localhost:7213/api/Coaches");
export const fetchCoachAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Coaches/${id}`);
export const addCoachAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Coaches");
export const updateCoachAPI = async (item) =>
  updateItemAPI(item, `https://localhost:7213/api/Coaches/${item.coachId}`);
export const deleteCoachAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Coaches/${id}`);
