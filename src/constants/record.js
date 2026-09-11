import emojiBaby from "../assets/images/emoji_baby.svg";
import emojiPill from "../assets/images/emoji_pill.svg";
import emojiThermometer from "../assets/images/emoji_thermometer.svg";

// 기록 출처별 설명 문구
export const RECORD_SOURCE_DESCRIPTION = {
  DEVICE: "기기에서 자동으로 기록했어요",
  MANUAL: "직접 입력했어요",
};

// 화면4 기록 종류 선택 메뉴
export const RECORD_MENUS = [
  {
    type: "TEMPERATURE",
    title: "체온 직접 기록",
    description: "다른 체온계로 잰 온도와 측정 시각",
    icon: emojiThermometer,
    path: "/records/new/temperature",
  },
  {
    type: "CONDITION",
    title: "아이 상태 기록",
    description: "반응 · 호흡 · 수분 섭취와 동반 증상",
    icon: emojiBaby,
    path: "/records/new/condition",
  },
  {
    type: "MEDICATION",
    title: "약 먹은 기록",
    description: "실제로 먹인 약 · 양 · 복용 시각",
    icon: emojiPill,
    path: "/records/new/medication",
  },
];

// 화면4 하단 안내
export const RECORD_NOTICE = {
  title: "기기 체온은 자동으로 쌓여요",
  descriptions: [
    "같은 측정값을 다시 입력하지 않아도 돼요.",
    "약을 먹이지 않았다면 복약 기록은 건너뛰세요.",
  ],
};
