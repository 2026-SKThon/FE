export function formatTime(isoString) {
  const date = new Date(isoString);
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${hour}:${minute}`;
}

// 그래프 하단 시간축 라벨 생성
export function buildTimeAxisLabels(points, count = 4) {
  if (!points?.length) return [];
  if (count < 2) return ["지금"];

  const step = (points.length - 1) / (count - 1);

  return Array.from({ length: count }, (_, index) => {
    if (index === count - 1) return "지금";
    const point = points[Math.round(step * index)];
    return `${new Date(point.measuredAt).getHours()}시`;
  });
}
