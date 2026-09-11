export function formatTime(isoString) {
  const date = new Date(isoString);
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${hour}:${minute}`;
}

// 그래프 하단 시간축 라벨 생성
export function buildTimeAxisLabels(points, count = 4) {
  if (!points?.length) return [];
  if (count < 2) return ["지금"];

  const step = (points.length - 1) / (count - 1);

  return Array.from({ length: count }, (_, index) => {
    if (index === count - 1) return "지금";
    const point = points[Math.round(step * index)];
    return `${new Date(point.measuredAt).getHours()}시`;
  });
}

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

export function formatDateLabel(isoString) {
  const date = new Date(isoString);

  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${WEEKDAYS[date.getDay()]}요일`;
}

export function formatDateTimeLabel(isoString) {
  const date = new Date(isoString);
  const hours = date.getHours();
  const meridiem = hours < 12 ? "오전" : "오후";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${meridiem} ${hour12}:${minute}`;
}

export function formatShortDateTime(isoString) {
  const date = new Date(isoString);

  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${formatTime(isoString)}`;
}

// 서버가 타임존 없는 문자열로 저장하므로 로컬 시각을 그대로 보낸다
// new Date().toISOString() 은 UTC라 9시간 이르게 기록된다
export function toServerDateTime(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0");

  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
  );
}
