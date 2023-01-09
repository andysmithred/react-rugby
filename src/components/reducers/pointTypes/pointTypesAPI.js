import {
  fetchAPI,
  addItemAPI,
  updateItemAPI,
  deleteItemAPI,
} from "../../utils/utils";

export const fetchPointTypesAPI = async () =>
  fetchAPI("https://localhost:7213/api/PointTypes");
export const fetchPointTypeAPI = async (id) =>
  fetchAPI(`https://localhost:7213/api/PointTypes/${id}`);
export const addPointTypeAPI = async (item) =>
  addItemAPI(item, "https://localhost:7213/api/PointTypes");
export const updatePointTypeAPI = async (item) =>
  updateItemAPI(
    item,
    `https://localhost:7213/api/PointTypes/${item.pointTypeId}`
  );
export const deletePointTypeAPI = async (id) =>
  deleteItemAPI(`https://localhost:7213/api/PointTypes/${id}`);
