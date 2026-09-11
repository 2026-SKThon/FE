// GET /children/{id}/reports/{reportId}/checked-info
export const checkedInfoList = [
  {
    id: "temperature",
    title: "체온 변화",
    // description은 temperatureTrend.js의 dailyTemperatureTrend.summary로 계산 (Analysis.jsx 참고)
  },
  {
    id: "medication",
    title: "마지막 복약",
    description: "19:10 복용 · 2시간 30분 경과",
  },
  {
    id: "symptom",
    title: "함께 기록한 증상",
    description: "기침과 처짐이 기록되어 있어요",
  },
];
