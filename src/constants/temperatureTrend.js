import { ACTIVE_HOME_STATE } from "./childStatus";

// GET /children/{id}/temperatures?range=RECENT_6H
export const RECENT_TREND_MOCKS = {
  NORMAL: {
    points: [
      { measuredAt: "2026-08-20T16:00:00+09:00", temperature: 36.5 },
      { measuredAt: "2026-08-20T16:30:00+09:00", temperature: 36.6 },
      { measuredAt: "2026-08-20T17:00:00+09:00", temperature: 36.6 },
      { measuredAt: "2026-08-20T17:30:00+09:00", temperature: 36.5 },
      { measuredAt: "2026-08-20T18:00:00+09:00", temperature: 36.7 },
      { measuredAt: "2026-08-20T18:30:00+09:00", temperature: 36.6 },
      { measuredAt: "2026-08-20T19:00:00+09:00", temperature: 36.7 },
      { measuredAt: "2026-08-20T19:30:00+09:00", temperature: 36.6 },
      { measuredAt: "2026-08-20T20:00:00+09:00", temperature: 36.7 },
      { measuredAt: "2026-08-20T20:30:00+09:00", temperature: 36.6 },
      { measuredAt: "2026-08-20T21:00:00+09:00", temperature: 36.7 },
      { measuredAt: "2026-08-20T21:40:00+09:00", temperature: 36.7 },
    ],
  },
  CAUTION: {
    points: [
      { measuredAt: "2026-08-20T16:00:00+09:00", temperature: 37.0 },
      { measuredAt: "2026-08-20T16:30:00+09:00", temperature: 37.2 },
      { measuredAt: "2026-08-20T17:00:00+09:00", temperature: 37.2 },
      { measuredAt: "2026-08-20T17:30:00+09:00", temperature: 37.1 },
      { measuredAt: "2026-08-20T18:00:00+09:00", temperature: 37.2 },
      { measuredAt: "2026-08-20T18:30:00+09:00", temperature: 37.3 },
      { measuredAt: "2026-08-20T19:00:00+09:00", temperature: 37.4 },
      { measuredAt: "2026-08-20T19:30:00+09:00", temperature: 37.5 },
      { measuredAt: "2026-08-20T20:00:00+09:00", temperature: 37.5 },
      { measuredAt: "2026-08-20T20:30:00+09:00", temperature: 37.6 },
      { measuredAt: "2026-08-20T21:00:00+09:00", temperature: 37.6 },
      { measuredAt: "2026-08-20T21:40:00+09:00", temperature: 37.7 },
    ],
  },
  DANGER: {
    points: [
      { measuredAt: "2026-08-20T16:00:00+09:00", temperature: 37.6 },
      { measuredAt: "2026-08-20T16:30:00+09:00", temperature: 37.8 },
      { measuredAt: "2026-08-20T17:00:00+09:00", temperature: 37.9 },
      { measuredAt: "2026-08-20T17:30:00+09:00", temperature: 38.0 },
      { measuredAt: "2026-08-20T18:00:00+09:00", temperature: 38.2 },
      { measuredAt: "2026-08-20T18:30:00+09:00", temperature: 38.4 },
      { measuredAt: "2026-08-20T19:00:00+09:00", temperature: 38.6 },
      { measuredAt: "2026-08-20T19:30:00+09:00", temperature: 38.8 },
      { measuredAt: "2026-08-20T20:00:00+09:00", temperature: 38.9 },
      { measuredAt: "2026-08-20T20:30:00+09:00", temperature: 39.0 },
      { measuredAt: "2026-08-20T21:00:00+09:00", temperature: 39.1 },
      { measuredAt: "2026-08-20T21:40:00+09:00", temperature: 39.2 },
    ],
  },
  OFFLINE: {
    points: [
      { measuredAt: "2026-08-20T16:00:00+09:00", temperature: 37.0 },
      { measuredAt: "2026-08-20T16:30:00+09:00", temperature: 37.1 },
      { measuredAt: "2026-08-20T17:00:00+09:00", temperature: 37.1 },
      { measuredAt: "2026-08-20T17:30:00+09:00", temperature: 37.0 },
      { measuredAt: "2026-08-20T18:00:00+09:00", temperature: 37.2 },
      { measuredAt: "2026-08-20T18:30:00+09:00", temperature: 37.3 },
      { measuredAt: "2026-08-20T19:00:00+09:00", temperature: 37.4 },
      { measuredAt: "2026-08-20T19:30:00+09:00", temperature: 37.5 },
      { measuredAt: "2026-08-20T20:00:00+09:00", temperature: 37.6 },
      { measuredAt: "2026-08-20T20:30:00+09:00", temperature: 37.6 },
      { measuredAt: "2026-08-20T21:00:00+09:00", temperature: 37.7 },
      { measuredAt: "2026-08-20T21:40:00+09:00", temperature: 37.7 },
    ],
  },
};

export const recentTemperatureTrend = RECENT_TREND_MOCKS[ACTIVE_HOME_STATE];

// GET /children/{id}/temperatures?range={DAY|WEEK|MONTH}
export const PERIOD_TREND_MOCKS = {
  DAY: {
    date: "2026-08-20",
    dateLabel: "8월 20일 목요일",
    axisLabels: ["16시", "18시", "20시", "지금"],
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
  },

  WEEK: {
    date: "2026-08-20",
    dateLabel: "8월 14일 - 8월 20일",
    axisLabels: ["8/14", "8/16", "8/18", "오늘"],
    summary: { current: 37.7, highest: 39.1, lowest: 36.5 },
    peak: { temperature: 39.1, measuredAt: "2026-08-17T21:00:00+09:00" },
    referenceTemperatures: [37, 38],
    points: [
      { measuredAt: "2026-08-14T21:00:00+09:00", temperature: 36.5 },
      { measuredAt: "2026-08-15T21:00:00+09:00", temperature: 36.9 },
      { measuredAt: "2026-08-16T21:00:00+09:00", temperature: 38.2 },
      { measuredAt: "2026-08-17T21:00:00+09:00", temperature: 39.1 },
      { measuredAt: "2026-08-18T21:00:00+09:00", temperature: 38.3 },
      { measuredAt: "2026-08-19T21:00:00+09:00", temperature: 37.4 },
      { measuredAt: "2026-08-20T21:40:00+09:00", temperature: 37.7 },
    ],
  },

  MONTH: {
    date: "2026-08-20",
    dateLabel: "2026년 8월",
    axisLabels: ["8/1", "8/10", "8/20", "오늘"],
    summary: { current: 37.7, highest: 39.2, lowest: 36.3 },
    peak: { temperature: 39.2, measuredAt: "2026-08-17T21:00:00+09:00" },
    referenceTemperatures: [37, 38],
    points: [
      { measuredAt: "2026-08-01T21:00:00+09:00", temperature: 36.5 },
      { measuredAt: "2026-08-04T21:00:00+09:00", temperature: 36.3 },
      { measuredAt: "2026-08-07T21:00:00+09:00", temperature: 36.8 },
      { measuredAt: "2026-08-10T21:00:00+09:00", temperature: 37.0 },
      { measuredAt: "2026-08-13T21:00:00+09:00", temperature: 36.9 },
      { measuredAt: "2026-08-16T21:00:00+09:00", temperature: 38.2 },
      { measuredAt: "2026-08-17T21:00:00+09:00", temperature: 39.2 },
      { measuredAt: "2026-08-18T21:00:00+09:00", temperature: 38.4 },
      { measuredAt: "2026-08-19T21:00:00+09:00", temperature: 37.4 },
      { measuredAt: "2026-08-20T21:40:00+09:00", temperature: 37.7 },
    ],
  },
};

export const dailyTemperatureTrend = PERIOD_TREND_MOCKS.DAY;
