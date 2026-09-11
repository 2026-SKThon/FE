import axios from "axios";

// TODO: 로그인 붙기 전까지 임시 고정값
const USER_ID = "1";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-USER-ID": USER_ID,
  },
});

// { success, code, message, data } 형태일 때만 data를 꺼낸다
function isEnvelope(body) {
  return (
    body !== null &&
    typeof body === "object" &&
    "success" in body &&
    "data" in body
  );
}

api.interceptors.response.use((response) =>
  isEnvelope(response.data)
    ? { ...response, data: response.data.data }
    : response,
);

export default api;
