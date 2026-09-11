import { create } from "zustand";

const useChildStore = create((set) => ({
  // 아이 정보
  child: null,

  // 아이 정보 변경
  setChild: (child) => set({ child }),
}));

export default useChildStore;