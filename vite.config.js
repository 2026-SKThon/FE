import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // 개발 중 백엔드 CORS 미설정 우회용 프록시 - /api 요청을 실제 서버로 전달
    proxy: {
      "/api": {
        target: "https://api.chungs.store",
        changeOrigin: true,
      },
    },
  },
});