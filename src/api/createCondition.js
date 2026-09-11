import api from "./api";

export const createCondition = async (childId, data) => {
  const response = await api.post(`/api/children/${childId}/condition`, data);
  return response.data.data;
};
