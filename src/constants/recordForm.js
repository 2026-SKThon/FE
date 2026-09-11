// 체온 직접 기록 - 측정 부위
export const BODY_PART_OPTIONS = [
  { value: "EAR", label: "귀" },
  { value: "ARMPIT", label: "겨드랑이" },
  { value: "FOREHEAD", label: "이마" },
  { value: "ETC", label: "기타" },
];

// 아이 상태 기록 - 질문 3종
export const CONDITION_QUESTIONS = [
  {
    key: "activity",
    question: "컨디션은 어때요?",
    options: [
      { value: "NORMAL", label: "평소와 같아요" },
      { value: "LETHARGIC", label: "쳐져 있어요" },
      { value: "UNKNOWN", label: "모르겠어요" },
    ],
  },
  {
    key: "breathing",
    question: "호흡은 어떤가요?",
    options: [
      { value: "NORMAL", label: "평소와 같아요" },
      { value: "LABORED", label: "힘들어보여요" },
      { value: "UNKNOWN", label: "모르겠어요" },
    ],
  },
  {
    key: "hydration",
    question: "수분 섭취랑 소변은 어때요?",
    options: [
      { value: "NORMAL", label: "평소와 같아요" },
      { value: "DECREASED", label: "줄었어요" },
      { value: "UNKNOWN", label: "모르겠어요" },
    ],
  },
];

// 복약 기록 - 최근 복용한 약
export const RECENT_MEDICINES = [
  { medicineId: 1, name: "챔프 시럽" },
  { medicineId: 2, name: "부루펜 시럽" },
];

// 복약 기록 - 제품 정보 선택지
export const PRODUCT_INFO_OPTIONS = [
  { value: "SELECT", label: "제품 선택" },
  { value: "MANUAL", label: "직접 입력" },
];

// POST /children/{id}/records (type: TEMPERATURE)
export const TEMPERATURE_FORM_DEFAULT = {
  temperature: 37.7,
  measuredAt: "2026-08-20T21:40:00+09:00",
  bodyPart: null,
  memo: "",
};

// POST /children/{id}/records (type: MEDICATION)
export const MEDICATION_FORM_DEFAULT = {
  medicineId: 1,
  medicineName: "챔프 시럽",
  takenAt: "2026-08-20T19:10:00+09:00",
  dose: 5,
  doseUnit: "mL",
  temperatureAtDose: 38.6,
  memo: "",
};
