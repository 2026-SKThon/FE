import api from "./api";

export const getChildProfile = async (childId) => {
  const response = await api.get(`/api/users/children/${childId}`);
  return response.data.data;
};
