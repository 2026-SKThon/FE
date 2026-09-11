import api from "./api";

export const getDevice = async (userId) => {
  const response = await api.get(`/api/users/${userId}/device`);
  return response.data.data;
};
