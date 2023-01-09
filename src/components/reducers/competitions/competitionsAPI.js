import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchCompetitionsAPI = async () =>
  fetchAPI("https://localhost:7213/api/Competitions");
export const fetchCompetitionAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/Competitions/${id}`);
export const addCompetitionAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/Competitions");
export const updateCompetitionAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/Competitions/${item.competitionId}`
  );
export const deleteCompetitionAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/Competitions/${id}`);
