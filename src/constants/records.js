// 복약 기록은 서버 저장 API가 없어 로컬 스토어에만 둔다
// 체온은 서버에서 오므로 여기에 없다
function minutesAgo(minutes) {
  return new Date(Date.now() - minutes * 60 * 1000).toISOString();
}

const emptyRecord = {
  temperature: null,
  medicationName: null,
  dosage: null,
  responseStatus: null,
  breathingStatus: null,
  hydrationStatus: null,
};

export const records = [
  {
    ...emptyRecord,
    id: 102,
    recordType: "MEDICATION",
    recordedAt: minutesAgo(150),
    medicationName: "챔프 시럽",
    dosage: 5,
  },
  {
    ...emptyRecord,
    id: 107,
    recordType: "MEDICATION",
    recordedAt: minutesAgo(330),
    medicationName: "타이레놀 시럽",
    dosage: 4,
  },
];
