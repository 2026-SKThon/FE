import axios from "axios";

export const apiClient = axios.create({
  // 개발 환경: vite.config.js의 프록시를 통해 CORS 우회 (baseURL 비워서 same-origin 요청)
  // 배포 환경: 백엔드에서 실제 배포 도메인을 CORS 허용해줘야 함
  baseURL: import.meta.env.DEV ? "" : "https://api.chungs.store",
  headers: {
    // TODO: 로그인/인증 붙기 전까지 임시 고정값. 실제 로그인 붙으면 토큰 기반으로 교체 예정
    "X-USER-ID": "1",
  },
});
