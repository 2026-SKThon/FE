import { create } from "zustand";

import { records } from "../constants/records";

export const useRecordStore = create((set) => ({
  records,
  setRecords: (records) => set({ records }),
  addRecord: (record) =>
    set((state) => ({
      records: [
        { ...record, recordedAt: new Date().toISOString() },
        ...state.records,
      ],
    })),
}));
