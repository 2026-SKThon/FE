// GET /children/{id}/temperatures?range=RECENT_6H
export const recentTemperatureTrend = {
  rangeType: "RECENT_6H",
  summary: { current: 37.7, highest: 38.1, lowest: 36.9 },
  peak: { temperature: 38.1, measuredAt: "2026-08-20T19:30:00+09:00" },
  referenceTemperatures: [37, 38],
  points: [
    { measuredAt: "2026-08-20T16:00:00+09:00", temperature: 36.9 },
    { measuredAt: "2026-08-20T16:30:00+09:00", temperature: 37.0 },
    { measuredAt: "2026-08-20T17:00:00+09:00", temperature: 37.1 },
    { measuredAt: "2026-08-20T17:30:00+09:00", temperature: 37.0 },
    { measuredAt: "2026-08-20T18:00:00+09:00", temperature: 36.9 },
    { measuredAt: "2026-08-20T18:30:00+09:00", temperature: 37.3 },
    { measuredAt: "2026-08-20T19:00:00+09:00", temperature: 37.8 },
    { measuredAt: "2026-08-20T19:30:00+09:00", temperature: 38.1 },
    { measuredAt: "2026-08-20T20:00:00+09:00", temperature: 37.6 },
    { measuredAt: "2026-08-20T20:30:00+09:00", temperature: 37.3 },
    { measuredAt: "2026-08-20T21:00:00+09:00", temperature: 37.2 },
    { measuredAt: "2026-08-20T21:40:00+09:00", temperature: 37.7 },
  ],
};

// GET /children/{id}/temperatures?range=DAY&date=2026-08-20
export const dailyTemperatureTrend = {
  rangeType: "DAY",
  date: "2026-08-20",
  summary: { current: 37.7, highest: 38.6, lowest: 36.8 },
  peak: { temperature: 38.6, measuredAt: "2026-08-20T19:30:00+09:00" },
  referenceTemperatures: [37, 38],
  points: [
    { measuredAt: "2026-08-20T16:00:00+09:00", temperature: 36.8 },
    { measuredAt: "2026-08-20T16:30:00+09:00", temperature: 37.0 },
    { measuredAt: "2026-08-20T17:00:00+09:00", temperature: 37.1 },
    { measuredAt: "2026-08-20T17:30:00+09:00", temperature: 37.0 },
    { measuredAt: "2026-08-20T18:00:00+09:00", temperature: 36.9 },
    { measuredAt: "2026-08-20T18:30:00+09:00", temperature: 37.5 },
    { measuredAt: "2026-08-20T19:00:00+09:00", temperature: 38.2 },
    { measuredAt: "2026-08-20T19:30:00+09:00", temperature: 38.6 },
    { measuredAt: "2026-08-20T20:00:00+09:00", temperature: 37.9 },
    { measuredAt: "2026-08-20T20:30:00+09:00", temperature: 37.4 },
    { measuredAt: "2026-08-20T21:00:00+09:00", temperature: 37.3 },
    { measuredAt: "2026-08-20T21:40:00+09:00", temperature: 37.7 },
  ],
};
