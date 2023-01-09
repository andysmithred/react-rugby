import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchRefereesAPI = async () =>
  fetchAPI("https://localhost:7213/api/Referees");
export const fetchRefereeAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Referees/${id}`);
export const addRefereeAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Referees");
export const updateRefereeAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/Referees/${item.refereeId}`
  );
export const deleteRefereeAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Referees/${id}`);
