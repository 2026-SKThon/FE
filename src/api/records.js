import api from "./api";

// GET /api/children/{childId}/records/top3 - 오늘의 기록 최근 3개
export async function getTodayRecordsTop3(childId) {
  const response = await api.get(`/api/children/${childId}/records/top3`);
  return response.data.data;
}

// GET /api/children/{childId}/records - 오늘의 기록 전체 (커서 페이지네이션)
export async function getTodayRecords(childId, { size, cursorId, cursor } = {}) {
  const response = await api.get(`/api/children/${childId}/records`, {
    params: { size, cursorId, cursor },
  });
  return response.data.data;
}
