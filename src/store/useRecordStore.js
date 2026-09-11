import { create } from "zustand";

import { records } from "../constants/records";

const NEXT_RECORD_GAP_MINUTES = 10;

// 목데이터 타임라인(8월 20일) 뒤에 이어 붙인다
// 실제 현재 시각을 쓰면 목록에서 기존 기록보다 이른 시각으로 보인다
function nextRecordedAt(currentRecords) {
  const latest = currentRecords.reduce(
    (max, record) => Math.max(max, Date.parse(record.recordedAt)),
    0,
  );

  return new Date(latest + NEXT_RECORD_GAP_MINUTES * 60 * 1000).toISOString();
}

export const useRecordStore = create((set) => ({
  records,
  setRecords: (records) => set({ records }),
  addRecord: (record) =>
    set((state) => ({
      records: [
        { ...record, recordedAt: nextRecordedAt(state.records) },
        ...state.records,
      ],
    })),
}));
