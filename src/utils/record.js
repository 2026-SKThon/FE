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

const DOSE_UNIT = MEDICATION_FORM_DEFAULT.doseUnit;

// 선택한 답변 중 증상에 해당하는 것만
function collectSymptoms(record) {
  return Object.entries(CONDITION_SYMPTOM)
    .map(([field, map]) => map[record?.[field]])
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

  if (record.recordType === "MEDICATION") {
    return {
      time,
      title: "복약 기록",
      description: `${record.medicationName} · ${record.dosage}${DOSE_UNIT}`,
      type: record.recordType,
    };
  }

  if (record.recordType === "CONDITION") {
    const symptoms = collectSymptoms(record);

    return {
      time,
      title: "상태 기록",
      description: symptoms.length ? symptoms.join(" · ") : "특이 증상 없음",
      type: record.recordType,
    };
  }

  return {
    time,
    title: `${formatTemperature(record.temperature)} 측정`,
    description: RECORD_SOURCE_DESCRIPTION.DEVICE,
    type: record.recordType,
  };
}

// 증상 설명문의 "동반 증상" 문장
export function buildSymptomDescription(record) {
  const symptoms = collectSymptoms(record);

  if (!symptoms.length) {
    return "특이 증상 없이 평소와 같은 상태로 기록되어 있습니다.";
  }

  const last = symptoms.at(-1);

  if (symptoms.length === 1) {
    return `${last}${withParticle(last, "이", "가")} 기록되어 있습니다.`;
  }

  const rest = symptoms.slice(0, -1).join(", ");

  return `${rest}${withParticle(rest, "과", "와")} ${last}${withParticle(last, "이", "가")} 함께 기록되어 있습니다.`;
}

// 서버 기록 + 로컬 기록을 시각 내림차순으로 합친다
export function mergeRecords(serverRecords = [], localRecords = []) {
  return [...serverRecords, ...localRecords].sort(
    (a, b) => Date.parse(b.recordedAt) - Date.parse(a.recordedAt),
  );
}

// recordedAt은 useRecordStore.addRecord가 채운다
const baseRecord = () => ({
  id: Date.now(),
  temperature: null,
  medicationName: null,
  dosage: null,
  responseStatus: null,
  breathingStatus: null,
  hydrationStatus: null,
});

export function buildTemperatureRecord({ temperature, bodyPart, memo }) {
  return {
    ...baseRecord(),
    recordType: "TEMPERATURE",
    temperature,
    measurementSite: bodyPart,
    note: memo,
  };
}

export function buildConditionRecord({ answers, memo }) {
  return {
    ...baseRecord(),
    recordType: "CONDITION",
    ...answers,
    note: memo,
  };
}

export function buildMedicationRecord({ medicineId, productInfo, memo }) {
  const medicine = RECENT_MEDICINES.find(
    (item) => item.medicineId === medicineId,
  );

  return {
    ...baseRecord(),
    recordType: "MEDICATION",
    medicationName: medicine?.name ?? MEDICATION_FORM_DEFAULT.medicineName,
    dosage: MEDICATION_FORM_DEFAULT.dose,
    productInfo,
    note: memo,
  };
}
