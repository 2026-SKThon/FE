import {
  formatDateLabel,
  formatMonthLabel,
  formatWeekRangeLabel,
} from "../utils/datetime";

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

// 오늘 기준으로 생성한다. 체온 값은 고정이고 날짜만 이동한다
const DAY_TIMES = [
  [16, 0],
  [16, 30],
  [17, 0],
  [17, 30],
  [18, 0],
  [18, 30],
  [19, 0],
  [19, 30],
  [20, 0],
  [20, 30],
  [21, 0],
  [21, 40],
];

const DAY_SERIES = [
  [36.4, 36.5, 36.5, 36.4, 36.6, 36.5, 36.6, 36.5, 36.6, 36.5, 36.6, 36.6],
  [36.6, 36.8, 37.2, 37.9, 38.6, 39.1, 38.8, 38.3, 37.9, 37.6, 37.4, 37.2],
  [37.1, 37.3, 37.6, 38.0, 38.3, 38.1, 37.8, 37.5, 37.3, 37.1, 37.0, 36.9],
  [36.8, 36.9, 37.0, 36.9, 37.1, 37.2, 37.4, 37.3, 37.1, 37.0, 36.9, 36.9],
  [36.8, 37.0, 37.1, 37.0, 36.9, 37.5, 38.2, 38.6, 37.9, 37.4, 37.3, 37.7],
];
const WEEK_SERIES = [
  [36.5, 36.6, 36.4, 36.7, 36.5, 36.6, 36.5],
  [36.6, 36.8, 37.3, 37.6, 37.2, 36.9, 36.7],
  [36.7, 36.9, 37.1, 37.0, 36.8, 36.7, 36.8],
  [36.5, 36.9, 38.2, 39.1, 38.3, 37.4, 37.7],
];
const MONTH_SERIES = [
  [36.5, 36.4, 36.6, 36.5, 36.7, 36.6, 36.5, 36.6, 36.4, 36.5],
  [36.6, 36.5, 37.1, 37.8, 37.4, 36.9, 36.7, 36.6, 36.5, 36.6],
  [36.5, 36.7, 36.6, 36.8, 37.2, 37.6, 37.1, 36.8, 36.6, 36.7],
  [36.5, 36.3, 36.8, 37.0, 36.9, 38.2, 39.2, 38.4, 37.4, 37.7],
];

function atTime(base, hours, minutes) {
  const date = new Date(base);
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function shiftDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

function summarize(points) {
  const values = points.map((point) => point.temperature);
  return {
    current: values.at(-1),
    highest: Math.max(...values),
    lowest: Math.min(...values),
  };
}

function buildEntry(points, dateLabel, axisLabels) {
  return {
    dateLabel,
    axisLabels,
    summary: summarize(points),
    referenceTemperatures: [37, 38],
    points,
  };
}

function buildDayEntry(dayOffset, temperatures, isToday) {
  const base = shiftDays(dayOffset);
  const points = temperatures.map((temperature, index) => ({
    measuredAt: atTime(base, ...DAY_TIMES[index]).toISOString(),
    temperature,
  }));
  const axisLabels = ["16시", "18시", "20시", isToday ? "지금" : "21시"];

  return {
    ...buildEntry(points, formatDateLabel(base.toISOString()), axisLabels),
    date: base.toISOString(),
  };
}

function buildSpanEntry(temperatures, dayStep, endOffset, labelFn, isLatest) {
  const points = temperatures.map((temperature, index) => {
    const offset = endOffset - (temperatures.length - 1 - index) * dayStep;
    return {
      measuredAt: atTime(shiftDays(offset), 21, 0).toISOString(),
      temperature,
    };
  });
  const first = new Date(points[0].measuredAt);
  const last = new Date(points.at(-1).measuredAt);
  const marks = [0, 2, 4].map((i) => {
    const d = new Date(points[Math.min(i * 2, points.length - 1)].measuredAt);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  });

  return buildEntry(points, labelFn(first, last), [
    ...marks.slice(0, 3),
    isLatest ? "오늘" : `${last.getMonth() + 1}/${last.getDate()}`,
  ]);
}

export const PERIOD_TREND_MOCKS = {
  DAY: DAY_SERIES.map((temps, index) =>
    buildDayEntry(
      index - (DAY_SERIES.length - 1),
      temps,
      index === DAY_SERIES.length - 1,
    ),
  ),
  WEEK: WEEK_SERIES.map((temps, index) => {
    const endOffset = -(WEEK_SERIES.length - 1 - index) * 7;
    return buildSpanEntry(
      temps,
      1,
      endOffset,
      (first, last) =>
        formatWeekRangeLabel(first.toISOString(), last.toISOString()),
      index === WEEK_SERIES.length - 1,
    );
  }),
  MONTH: MONTH_SERIES.map((temps, index) => {
    const endOffset = -(MONTH_SERIES.length - 1 - index) * 30;
    return buildSpanEntry(
      temps,
      3,
      endOffset,
      (first, last) => formatMonthLabel(last.toISOString()),
      index === MONTH_SERIES.length - 1,
    );
  }),
};

export const dailyTemperatureTrend = PERIOD_TREND_MOCKS.DAY.at(-1);
