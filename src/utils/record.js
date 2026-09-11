import {
  CONDITION_SYMPTOM,
  RECORD_SOURCE_DESCRIPTION,
} from "../constants/record";
import {
  MEDICATION_FORM_DEFAULT,
  RECENT_MEDICINES,
} from "../constants/recordForm";
import { formatTime } from "./datetime";
import { formatTemperature } from "./fever";

// 선택한 답변 중 증상에 해당하는 것만
function collectSymptoms(condition = {}) {
  return Object.entries(condition)
    .map(([key, value]) => CONDITION_SYMPTOM[key]?.[value])
    .filter(Boolean);
}

// 받침 유무로 조사 선택
function withParticle(word, withJong, withoutJong) {
  const code = word.charCodeAt(word.length - 1);
  const isHangul = code >= 0xac00 && code <= 0xd7a3;

  return isHangul && (code - 0xac00) % 28 !== 0 ? withJong : withoutJong;
}

// 기록 -> 표시용 텍스트
export function formatRecord(record) {
  const time = formatTime(record.recordedAt);

  if (record.type === "MEDICATION") {
    const { name, dose, doseUnit } = record.medication;

    return {
      time,
      title: "복약 기록",
      description: `${name} · ${dose}${doseUnit}`,
      type: record.type,
    };
  }

  if (record.type === "CONDITION") {
    const symptoms = collectSymptoms(record.condition);

    return {
      time,
      title: "상태 기록",
      description: symptoms.length ? symptoms.join(" · ") : "특이 증상 없음",
      type: record.type,
    };
  }

  return {
    time,
    title: `${formatTemperature(record.temperature)} 측정`,
    description: RECORD_SOURCE_DESCRIPTION[record.source],
    type: record.type,
  };
}

// 증상 설명문의 "동반 증상" 문장
export function buildSymptomDescription(condition) {
  const symptoms = collectSymptoms(condition);

  if (!symptoms.length) {
    return "특이 증상 없이 평소와 같은 상태로 기록되어 있습니다.";
  }

  const last = symptoms[symptoms.length - 1];

  if (symptoms.length === 1) {
    return `${last}${withParticle(last, "이", "가")} 기록되어 있습니다.`;
  }

  const rest = symptoms.slice(0, -1).join(", ");

  return `${rest}${withParticle(rest, "과", "와")} ${last}${withParticle(last, "이", "가")} 함께 기록되어 있습니다.`;
}

const baseRecord = () => ({
  recordId: Date.now(),
  source: "MANUAL",
  recordedAt: new Date().toISOString(),
  temperature: null,
  medication: null,
  condition: null,
});

export function buildTemperatureRecord({ temperature, bodyPart, memo }) {
  return { ...baseRecord(), type: "TEMPERATURE", temperature, bodyPart, memo };
}

export function buildConditionRecord({ answers, memo }) {
  return { ...baseRecord(), type: "CONDITION", condition: answers, memo };
}

export function buildMedicationRecord({ medicineId, productInfo, memo }) {
  const medicine = RECENT_MEDICINES.find(
    (item) => item.medicineId === medicineId,
  );

  return {
    ...baseRecord(),
    type: "MEDICATION",
    medication: {
      name: medicine?.name ?? MEDICATION_FORM_DEFAULT.medicineName,
      dose: MEDICATION_FORM_DEFAULT.dose,
      doseUnit: MEDICATION_FORM_DEFAULT.doseUnit,
    },
    productInfo,
    memo,
  };
}
