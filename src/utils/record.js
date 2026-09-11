import { RECORD_SOURCE_DESCRIPTION } from "../constants/record";
import { formatTime } from "./datetime";

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

  return {
    time,
    title: `${record.temperature}°C 측정`,
    description: RECORD_SOURCE_DESCRIPTION[record.source],
    type: record.type,
  };
}
