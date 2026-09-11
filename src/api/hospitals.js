import api from "./api";

// GET /api/hospitals/search - 병원명 또는 주소 키워드로 병원 검색
export async function searchHospitals({ keyword, latitude, longitude }) {
  const { data } = await api.get("/api/hospitals/search", {
    params: { keyword, latitude, longitude },
  });
  return data.data.hospitals;
}
