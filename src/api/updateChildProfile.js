import api from "./api";

export const updateChildProfile = async (childId, data) => {
  const response = await api.patch(`/api/users/children/${childId}`, data);
  return response.data.data;
};
