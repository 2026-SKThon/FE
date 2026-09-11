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

export default api;
