// "2분 전 측정 · 30분 전보다 0.4°C ↑"
export function buildMeasureCaption({
  minutesSinceMeasured,
  deltaTemperature,
  deltaIntervalMinutes,
}) {
  const direction = deltaTemperature >= 0 ? "↑" : "↓";
  const delta = Math.abs(deltaTemperature).toFixed(1);

  return `${minutesSinceMeasured}분 전 측정 · ${deltaIntervalMinutes}분 전보다 ${delta}°C ${direction}`;
}
