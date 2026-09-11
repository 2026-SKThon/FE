// 홈 상태 확인용 - NORMAL | CAUTION | DANGER | OFFLINE
export const ACTIVE_HOME_STATE = "CAUTION";

const CHILD_PROFILE = {
  childId: 1,
  childName: "민호",
  ageLabel: "11개월",
};

// GET /children/{id}/status
export const CHILD_STATUS_MOCKS = {
  NORMAL: {
    ...CHILD_PROFILE,
    deviceConnected: true,
    currentTemperature: 36.7,
    measuredAt: "2026-08-20T21:40:00+09:00",
    caption: "센서 측정 · 2분전 수신",
  },
  CAUTION: {
    ...CHILD_PROFILE,
    deviceConnected: true,
    currentTemperature: 37.7,
    measuredAt: "2026-08-20T21:40:00+09:00",
    caption: "2분 전 측정 · 30분 전보다 0.4°C ↑",
  },
  DANGER: {
    ...CHILD_PROFILE,
    deviceConnected: true,
    currentTemperature: 39.2,
    measuredAt: "2026-08-20T21:40:00+09:00",
    caption: "센서 측정 · 2분 전 수신",
  },
  OFFLINE: {
    ...CHILD_PROFILE,
    deviceConnected: false,
    currentTemperature: null,
    measuredAt: "2026-08-20T21:28:00+09:00",
    caption: "마지막 기록 37.7°C · 12분 전",
  },
};

export const childStatus = CHILD_STATUS_MOCKS[ACTIVE_HOME_STATE];
