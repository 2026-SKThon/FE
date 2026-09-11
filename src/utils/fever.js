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

const TEMPERATURE_RANGE = { MIN: 34.0, MAX: 42.0 };

// 0.1 단위 증감 - 부동소수 오차 제거를 위해 소수 1자리로 반올림
export function stepTemperature(value, delta) {
  const next = Math.round((value + delta) * 10) / 10;

  return Math.min(Math.max(next, TEMPERATURE_RANGE.MIN), TEMPERATURE_RANGE.MAX);
}
