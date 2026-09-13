import api from "./api";

// GET /api/children/{childId}/temperatures/latest - 최신 체온
export async function getLatestTemperature(childId) {
  const response = await api.get(`/api/children/${childId}/temperatures/latest`);
  return response.data.data;
}

// GET /api/children/{childId}/temperatures/history - 체온 그래프
export async function getTemperatureHistory(childId) {
  const response = await api.get(
    `/api/children/${childId}/temperatures/history`,
  );
  return response.data.data;
}

// POST /api/children/{childId}/temperatures - 체온 기록 저장
export async function createTemperature(childId, body) {
  const response = await api.post(
    `/api/children/${childId}/temperatures`,
    body,
  );
  return response.data.data;
}
