import { FEVER_THRESHOLD } from "../constants/fever";

// 36.4 미만도 NORMAL로 본다 (디자인에 저체온 상태 없음)
export function resolveFeverLevel({ deviceConnected, currentTemperature }) {
  if (!deviceConnected || currentTemperature === null) return "OFFLINE";
  if (currentTemperature >= FEVER_THRESHOLD.DANGER) return "DANGER";
  if (currentTemperature >= FEVER_THRESHOLD.CAUTION) return "CAUTION";

  return "NORMAL";
}

export function formatTemperature(value) {
  if (value === null || value === undefined) return "- °C";

  return `${value.toFixed(1)}°C`;
}

const TEMPERATURE_RANGE = { MIN: 34.0, MAX: 42.0 };

// 0.1 단위 증감 - 부동소수 오차 제거를 위해 소수 1자리로 반올림
export function stepTemperature(value, delta) {
  const next = Math.round((value + delta) * 10) / 10;

  return Math.min(Math.max(next, TEMPERATURE_RANGE.MIN), TEMPERATURE_RANGE.MAX);
}

function formatElapsed(isoString) {
  const minutes = Math.max(
    0,
    Math.floor((Date.now() - new Date(isoString).getTime()) / 60000),
  );

  if (minutes < 60) return `${minutes}분 전`;
  if (minutes < 60 * 24) return `${Math.floor(minutes / 60)}시간 전`;

  return `${Math.floor(minutes / (60 * 24))}일 전`;
}

// "2분 전 측정 · 0.4°C ↑" / 변화가 없으면 "2분 전 측정"
export function buildMeasureCaption({ lastMeasuredAt, temperatureDifference }) {
  const measured = `${formatElapsed(lastMeasuredAt)} 측정`;

  if (!temperatureDifference) return measured;

  const direction = temperatureDifference > 0 ? "↑" : "↓";
  const delta = Math.abs(temperatureDifference).toFixed(1);

  return `${measured} · ${delta}°C ${direction}`;
}
