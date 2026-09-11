// 그래프 마지막 점보다 나중에 저장된 체온만 이어 붙인다
// (목데이터로 깔린 기록은 전부 마지막 점 이전이라 중복되지 않는다)
export function mergeTrendWithRecords(trend, records) {
  const lastMeasuredAt = Date.parse(trend.points.at(-1).measuredAt);

  const added = records
    .filter(
      (record) =>
        record.recordType === "TEMPERATURE" &&
        Date.parse(record.recordedAt) > lastMeasuredAt,
    )
    .map((record) => ({
      measuredAt: record.recordedAt,
      temperature: record.temperature,
    }))
    .sort((a, b) => Date.parse(a.measuredAt) - Date.parse(b.measuredAt));

  if (!added.length) return trend;

  const points = [...trend.points, ...added];
  const temperatures = points.map((point) => point.temperature);

  return {
    ...trend,
    points,
    summary: {
      current: temperatures.at(-1),
      highest: Math.max(...temperatures),
      lowest: Math.min(...temperatures),
    },
  };
}
