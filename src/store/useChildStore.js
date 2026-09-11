import { create } from "zustand";

const useChildStore = create((set) => ({
  // 변수
  child: {
    name: "민호",
    afterBirth: "생후 11개월",
    birthDate: "2025.10.02",
    weight: "9.2kg",
    allergy: "미입력",
  },

  // 함수
  setChild: (child) => set({ child }),
}));

export default useChildStore;
