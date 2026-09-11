import { FEVER_THRESHOLD } from "../constants/fever";

// 36.4 미만도 NORMAL로 본다 (디자인에 저체온 상태 없음)
export function resolveFeverLevel({ deviceConnected, currentTemperature }) {
  if (!deviceConnected || currentTemperature === null) return "OFFLINE";
  if (currentTemperature >= FEVER_THRESHOLD.DANGER) return "DANGER";
  if (currentTemperature >= FEVER_THRESHOLD.CAUTION) return "CAUTION";

  return "NORMAL";
}

export function formatTemperature(value) {
  return value === null || value === undefined ? "- °C" : `${value}°C`;
}
