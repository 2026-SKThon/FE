// 발열 단계 임계값 - resolveFeverLevel에서만 사용
export const FEVER_THRESHOLD = {
  CAUTION: 37.5,
  DANGER: 38.5,
};

const DEVICE_PATH = "/mypage/device";
const CONDITION_PATH = "/records/new/condition";
export const RECORDS_PATH = "/records";

const CONNECTED_TAG = {
  label: "기기 연결",
  background: "#FFEBE9",
  color: "#FF4F37",
  path: DEVICE_PATH,
};

export const FEVER_LEVEL = {
  NORMAL: {
    temperatureColor: "#599EFF",
    chartColor: "#4389EB",
    showEndDot: true,
    showChildLabel: true,
    tag: CONNECTED_TAG,
    pill: {
      variant: "gradient",
      background: "#E8F3FF",
      color: "#64A8FF",
      fontSize: "13px",
      message: "체온이 평소 범위예요",
    },
    notice: {
      variant: "plain",
      title: "최근 30분간 큰 변화가 없어요",
      description: "아이의 상태도 평소와 같은지 살펴봐 주세요.",
    },
    primaryAction: "아이 상태 기록하기",
    primaryPath: CONDITION_PATH,
    secondaryAction: "복약 • 증상 기록 함께 보기",
  },

  CAUTION: {
    temperatureColor: "#FF4F37",
    chartColor: "#FF4F37",
    showEndDot: true,
    showChildLabel: true,
    tag: CONNECTED_TAG,
    pill: {
      variant: "gradient",
      background: "#FFEBE9",
      color: "#FF4F37",
      fontSize: "13px",
      message: "30분 전보다 0.4°C 올랐어요",
    },
    notice: {
      variant: "plain",
      title: "마지막 상태 확인 · 35분 전",
      description: "체온 변화와 아이의 반응을 함께 확인해요.",
    },
    primaryAction: "지금 아이 상태 확인",
    primaryPath: RECORDS_PATH,
    secondaryAction: "가까운 병원·약국 찾기",
  },

  DANGER: {
    temperatureColor: "#FF4F37",
    chartColor: "#FF4F37",
    showEndDot: true,
    showChildLabel: true,
    tag: CONNECTED_TAG,
    pill: {
      variant: "gradient",
      background: "#FFEBE9",
      color: "#FF4F37",
      fontSize: "16px",
      message: "!  체온이 높게 측정됐어요",
    },
    notice: {
      variant: "alert",
      title: "체온계로 다시 측정해 주세요",
      description: "아이의 반응과 호흡 상태도 함께 확인해요.",
    },
    primaryAction: "지금 아이 상태 확인",
    primaryPath: RECORDS_PATH,
    secondaryAction: "긴급 증상이 있나요? 도움 요청",
  },

  OFFLINE: {
    temperatureColor: "#D1D6DB",
    chartColor: "#B0B8C1",
    showEndDot: false,
    showChildLabel: false,
    tag: {
      label: "연결 확인 필요",
      background: "#F3F4F6",
      color: "#8B95A1",
      path: DEVICE_PATH,
    },
    pill: {
      variant: "solid",
      background: "#F3F4F6",
      color: "#8B95A1",
      fontSize: "13px",
      message: "새로운 측정값이 들어오지 않아요",
    },
    notice: {
      variant: "plain",
      title: "지금 체온을 확인할 수 없어요",
      description: "기기 연결 상태와 센서 부착을 확인해 주세요.",
    },
    primaryAction: "기기 연결 확인하기",
    primaryPath: DEVICE_PATH,
    secondaryAction: "체온계 측정·아이 상태 확인",
  },
};
